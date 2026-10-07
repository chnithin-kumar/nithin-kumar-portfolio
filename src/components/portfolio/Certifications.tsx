import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { CERTIFICATIONS } from "@/lib/portfolio-data";

export function Certifications() {
  const categories = [
    "Professional Certification",
    "Completed Professional Training",
    "AI & Professional Learning",
  ];

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified expertise"
      subtitle="Professional certification, completed training, and AI learning."
    >
      <div className="space-y-8">
        {categories.map((category) => {
          const credentials = CERTIFICATIONS.filter((c) => c.category === category);
          if (credentials.length === 0) return null;

          return (
            <section key={category}>
              <h3 className="mb-4 text-sm font-semibold text-muted-foreground">{category}</h3>
              <div className="grid gap-5 md:grid-cols-2">
                {credentials.map((c, i) => {
                  const hasUrl = c.certificateUrl.trim() !== "";
                  return (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="glass-strong rounded-2xl p-6 hover-glow"
                    >
                      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 items-start">
                        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
                          <Award size={24} className="text-white" />
                        </span>
                        <div className="min-w-0">
                          <h4 className="font-display font-semibold text-lg truncate">{c.title}</h4>
                          <p className="text-sm text-muted-foreground">{c.issuer}</p>
                          <p className="mt-2 text-xs font-medium text-accent">{c.category}</p>
                          {hasUrl && (
                            <a
                              href={c.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                            >
                              Verify Credential <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
