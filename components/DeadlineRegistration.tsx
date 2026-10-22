"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Hook that returns true if we are before the deadline, false after, null
 * only during the very first render (SSR).  When `serverIsOpen` is provided
 * (computed by the server) we use it as the initial value and avoid the flash.
 */
function useDeadlineOpen(deadlineISO: string, serverIsOpen?: boolean) {
  const [isOpen, setIsOpen] = useState<boolean | null>(
    serverIsOpen !== undefined ? serverIsOpen : null
  );

  useEffect(() => {
    const deadline = new Date(deadlineISO).getTime();
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const update = () => {
      const open = Date.now() < deadline;
      setIsOpen(open);
      if (!open && intervalId !== undefined) clearInterval(intervalId);
    };

    update();
    intervalId = setInterval(update, 1000);
    return () => {
      if (intervalId !== undefined) clearInterval(intervalId);
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
  /** Pre-computed on the server to avoid "Checking registration..." flash */
  serverIsOpen,
}: {
  deadlineISO: string;
  href: string;
  children: ReactNode;
  closedLabel: string;
  className: string;
  closedClassName?: string;
  target?: string;
  rel?: string;
  serverIsOpen?: boolean;
}) {
  const isOpen = useDeadlineOpen(deadlineISO, serverIsOpen);

  if (isOpen === false) {
    return (
      <span role="status" className={closedClassName ?? `${className} cursor-not-allowed opacity-70`}>
        {closedLabel}
      </span>
    );
  }

  // During SSR (isOpen === null) render the closed state as fallback
  // only when serverIsOpen is explicitly false; otherwise render the link.
  if (isOpen === null) {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
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
  /** Pre-computed on the server to avoid "Checking registration..." flash */
  serverIsOpen,
}: {
  deadlineISO: string;
  openLabel: string;
  closedLabel: string;
  openClassName: string;
  closedClassName: string;
  serverIsOpen?: boolean;
}) {
  const isOpen = useDeadlineOpen(deadlineISO, serverIsOpen);

  return (
    <span
      role="status"
      aria-live="polite"
      className={isOpen === false ? closedClassName : openClassName}
    >
      {isOpen === false ? closedLabel : openLabel}
    </span>
  );
}