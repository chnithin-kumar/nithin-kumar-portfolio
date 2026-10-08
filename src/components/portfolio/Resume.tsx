import { motion } from "framer-motion";
import { Download, ExternalLink, Printer } from "lucide-react";
import { Section } from "./Section";
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECT,
  RESUME_URL,
  SERVICES,
  SKILL_GROUPS,
} from "@/lib/portfolio-data";

const resumeStyles = `
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Arial, sans-serif; color: #111827; background: #ffffff; }
  .resume-page { width: 210mm; min-height: 297mm; padding: 18mm; margin: 0 auto; background: #ffffff; }
  .resume-header { border-bottom: 2px solid #0f766e; padding-bottom: 14px; margin-bottom: 18px; }
  h1 { margin: 0; font-size: 30px; letter-spacing: 0; color: #0f172a; }
  .title { margin: 6px 0 10px; color: #0f766e; font-weight: 700; font-size: 15px; }
  .contact { display: flex; flex-wrap: wrap; gap: 8px 14px; font-size: 12px; color: #334155; }
  h2 { margin: 18px 0 8px; color: #0f172a; font-size: 14px; text-transform: uppercase; border-bottom: 1px solid #d1d5db; padding-bottom: 5px; }
  h3 { margin: 0; color: #111827; font-size: 13px; }
  p { margin: 4px 0; font-size: 12px; line-height: 1.55; }
  ul { margin: 6px 0 0 18px; padding: 0; }
  li { margin: 3px 0; font-size: 11.5px; line-height: 1.45; }
  .muted { color: #64748b; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 18px; }
  .pill-list { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
  .pill { border: 1px solid #cbd5e1; border-radius: 999px; padding: 4px 8px; font-size: 11px; color: #1e293b; }
  .item { margin-bottom: 9px; break-inside: avoid; }
  @media print { body { background: #ffffff; } .resume-page { width: auto; min-height: auto; padding: 0; } }
`;

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function buildPrintableResume() {
  const skillPills = SKILL_GROUPS.flatMap((group) => group.skills.map((skill) => skill.name));

  return `<!doctype html>
    <html>
      <head>
        <title>${escapeHtml(PROFILE.name)} Resume</title>
        <style>${resumeStyles}</style>
      </head>
      <body>
        <main class="resume-page">
          <header class="resume-header">
            <h1>${escapeHtml(PROFILE.fullName)}</h1>
            <p class="title">${escapeHtml(PROFILE.titles.join(" • "))}</p>
            <div class="contact">
              <span>${escapeHtml(PROFILE.email)}</span>
              <span>${escapeHtml(PROFILE.phone)}</span>
              <span>${escapeHtml(PROFILE.linkedin)}</span>
              <span>${escapeHtml(PROFILE.github)}</span>
              <span>${escapeHtml(PROFILE.location)}</span>
            </div>
          </header>
          <section>
            <h2>Professional Summary</h2>
            <p>DevOps and Cloud Engineer with hands-on experience across Azure, AWS, CI/CD automation, containerization, Kubernetes, infrastructure as code, release management, monitoring, and secure software delivery.</p>
          </section>
          <section>
            <h2>Experience</h2>
            ${EXPERIENCE.map(
              (item) => `<div class="item">
                <h3>${escapeHtml(item.role)} — ${escapeHtml(item.company)}</h3>
                <p class="muted">${escapeHtml(item.duration)} • ${escapeHtml(item.location)}</p>
                <ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
              </div>`,
            ).join("")}
          </section>
          <section>
            <h2>Key Project</h2>
            <div class="item">
              <h3>${escapeHtml(PROJECT.name)} — ${escapeHtml(PROJECT.tagline)}</h3>
              <p>${escapeHtml(PROJECT.overview)}</p>
              <ul>${PROJECT.responsibilities.slice(0, 6).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </section>
          <section>
            <h2>Technical Skills</h2>
            <div class="pill-list">${skillPills.map((skill) => `<span class="pill">${escapeHtml(skill)}</span>`).join("")}</div>
          </section>
          <section>
            <h2>Services</h2>
            <div class="grid">${SERVICES.slice(0, 6).map((service) => `<p><strong>${escapeHtml(service.title)}:</strong> ${escapeHtml(service.desc)}</p>`).join("")}</div>
          </section>
          <section>
            <h2>Certifications & Achievements</h2>
            <div class="grid">
              <div>${CERTIFICATIONS.map((item) => `<p><strong>${escapeHtml(item.title)}</strong><br><span class="muted">${escapeHtml(item.issuer)}</span></p>`).join("")}</div>
              <div>${ACHIEVEMENTS.map((item) => `<p><strong>${escapeHtml(item.title)}</strong><br><span class="muted">${escapeHtml(item.desc)}</span></p>`).join("")}</div>
            </div>
          </section>
          <section>
            <h2>Education</h2>
            ${EDUCATION.map((item) => `<p><strong>${escapeHtml(item.degree)}</strong> — ${escapeHtml(item.institute)}</p>`).join("")}
          </section>
        </main>
      </body>
    </html>`;
}

export function Resume() {
  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "noopener,noreferrer");

    if (!printWindow) {
      window.print();
      return;
    }

    printWindow.document.write(buildPrintableResume());
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const allSkills = SKILL_GROUPS.flatMap((group) => group.skills.map((skill) => skill.name));

  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="My complete resume"
      subtitle="Preview inline, download, open in a new tab, or print directly."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-3xl p-4 sm:p-6"
      >
        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href={RESUME_URL}
            download="Nithin_Kumar_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover-glow"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={16} /> Open Resume
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <Printer size={16} /> Print Resume
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden bg-white text-slate-950 border border-white/10 shadow-2xl">
          <article className="mx-auto min-h-[760px] max-w-5xl p-6 sm:p-10 lg:p-12 font-sans">
            <header className="border-b-2 border-teal-700 pb-5">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-normal text-slate-950">
                {PROFILE.fullName}
              </h3>
              <p className="mt-2 text-sm sm:text-base font-bold text-teal-700">
                {PROFILE.titles.join(" • ")}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600">
                <span>{PROFILE.email}</span>
                <span>{PROFILE.phone}</span>
                <span>{PROFILE.linkedin}</span>
                <span>{PROFILE.github}</span>
                <span>{PROFILE.location}</span>
              </div>
            </header>

            <section className="mt-6">
              <h4 className="border-b border-slate-300 pb-1 text-sm font-extrabold uppercase tracking-normal text-slate-950">
                Professional Summary
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                DevOps and Cloud Engineer with hands-on experience across Azure, AWS, CI/CD automation,
                containerization, Kubernetes, infrastructure as code, release management, monitoring, and secure software delivery.
              </p>
            </section>

            <section className="mt-6">
              <h4 className="border-b border-slate-300 pb-1 text-sm font-extrabold uppercase tracking-normal text-slate-950">
                Experience
              </h4>
              {EXPERIENCE.map((item) => (
                <div key={item.company} className="mt-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h5 className="text-base font-bold text-slate-950">
                      {item.role} — {item.company}
                    </h5>
                    <p className="text-xs font-semibold text-slate-500">{item.duration}</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{item.location}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                    {item.bullets.slice(0, 8).map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mt-6">
              <h4 className="border-b border-slate-300 pb-1 text-sm font-extrabold uppercase tracking-normal text-slate-950">
                Key Project
              </h4>
              <div className="mt-3">
                <h5 className="text-base font-bold text-slate-950">
                  {PROJECT.name} — {PROJECT.tagline}
                </h5>
                <p className="mt-2 text-sm leading-6 text-slate-700">{PROJECT.overview}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                  {PROJECT.responsibilities.slice(0, 5).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-6">
              <h4 className="border-b border-slate-300 pb-1 text-sm font-extrabold uppercase tracking-normal text-slate-950">
                Technical Skills
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {allSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <section>
                <h4 className="border-b border-slate-300 pb-1 text-sm font-extrabold uppercase tracking-normal text-slate-950">
                  Certifications
                </h4>
                <div className="mt-3 space-y-3">
                  {CERTIFICATIONS.map((item) => (
                    <p key={item.title} className="text-sm leading-6 text-slate-700">
                      <strong className="text-slate-950">{item.title}</strong>
                      <br />
                      <span className="text-slate-500">{item.issuer}</span>
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="border-b border-slate-300 pb-1 text-sm font-extrabold uppercase tracking-normal text-slate-950">
                  Education
                </h4>
                <div className="mt-3 space-y-3">
                  {EDUCATION.map((item) => (
                    <p key={item.degree} className="text-sm leading-6 text-slate-700">
                      <strong className="text-slate-950">{item.degree}</strong>
                      <br />
                      <span className="text-slate-500">{item.institute}</span>
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </motion.div>
    </Section>
  );
}
