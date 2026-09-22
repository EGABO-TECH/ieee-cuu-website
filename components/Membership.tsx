import { membership } from "@/lib/data";
import { SectionHead } from "./SectionHead";

export function Membership() {
  return (
    <section id="membership" className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          light
          kicker="Membership"
          title="Find the category that fits you"
          body="Membership is individual — students and graduates may qualify for different grades depending on academic status."
        />
        <div className="overflow-x-auto rounded-2xl border border-ink/10">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-ink/[0.03] text-left text-xs font-semibold uppercase tracking-wide text-ink/50">
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Who it&apos;s for</th>
              </tr>
            </thead>
            <tbody>
              {membership.map((m, i) => (
                <tr key={m.tier} className={i !== membership.length - 1 ? "border-b border-ink/10" : ""}>
                  <td className="whitespace-nowrap px-5 py-4 font-semibold">{m.tier}</td>
                  <td className="px-5 py-4 text-ink/65">{m.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 rounded-xl border-l-2 border-violet bg-violet/5 px-6 py-4 text-sm text-ink/65">
          Fees, eligibility and application steps can change — always confirm current details on{" "}
          <a href="https://students.ieee.org/membership/" target="_blank" rel="noopener noreferrer" className="font-semibold text-violet underline underline-offset-2">
            students.ieee.org/membership
          </a>{" "}
          before you apply or renew, and make sure Cavendish University Uganda is correctly linked to your IEEE profile.
        </div>
      </div>
    </section>
  );
}
