"use client";

import { useEffect, useState, type ReactNode } from "react";

function useDeadlineOpen(deadlineISO: string) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const deadline = new Date(deadlineISO).getTime();
    let intervalId: number | undefined;

    const update = () => {
      const open = Date.now() < deadline;
      setIsOpen(open);
      if (!open && intervalId !== undefined) window.clearInterval(intervalId);
    };

    update();
    intervalId = window.setInterval(update, 1000);
    return () => {
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [deadlineISO]);

  return isOpen;
}

export function DeadlineRegistrationAction({
  deadlineISO,
  href,
  children,
  closedLabel,
  className,
  closedClassName,
  target,
  rel,
}: {
  deadlineISO: string;
  href: string;
  children: ReactNode;
  closedLabel: string;
  className: string;
  closedClassName?: string;
  target?: string;
  rel?: string;
}) {
  const isOpen = useDeadlineOpen(deadlineISO);

  if (isOpen === false) {
    return (
      <span role="status" className={closedClassName ?? `${className} cursor-not-allowed opacity-70`}>
        {closedLabel}
      </span>
    );
  }

  if (isOpen === null) {
    return (
      <span role="status" aria-busy="true" className={closedClassName ?? `${className} cursor-wait opacity-70`}>
        Checking registration...
      </span>
    );
  }

  return (
    <a href={href} target={target} rel={rel} className={className}>
      {children}
    </a>
  );
}

export function DeadlineRegistrationStatus({
  deadlineISO,
  openLabel,
  closedLabel,
  openClassName,
  closedClassName,
}: {
  deadlineISO: string;
  openLabel: string;
  closedLabel: string;
  openClassName: string;
  closedClassName: string;
}) {
  const isOpen = useDeadlineOpen(deadlineISO);

  return (
    <span role="status" aria-live="polite" className={isOpen ? openClassName : closedClassName}>
      {isOpen === null ? "Checking registration..." : isOpen ? openLabel : closedLabel}
    </span>
  );
}