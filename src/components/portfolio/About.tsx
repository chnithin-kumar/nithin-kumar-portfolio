import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { ABOUT_STATS } from "@/lib/portfolio-data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);
  const isInt = Number.isInteger(value);
  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-display font-bold text-gradient">
      {isInt ? Math.round(display) : display.toFixed(1)}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building reliable cloud delivery"
      subtitle="DevOps / DevSecOps Engineer with 3+ years of experience designing and automating CI/CD pipelines and cloud infrastructure."
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed"
        >
          <p>
            Experienced in Azure DevOps, Kubernetes, Docker, Terraform and AWS,
            with strong expertise in infrastructure automation, monitoring and
            security integration. Proven ability to improve deployment speed,
            reliability and system scalability using modern DevOps practices.
          </p>
          <p>
            Skilled in CI/CD pipelines (Azure DevOps, GitHub Actions),
            Infrastructure as Code (Terraform), containerization (Docker,
            Kubernetes), monitoring and logging (Prometheus, Grafana, ELK) and
            DevSecOps security tools (Checkmarx, Mend, SonarQube, Trivy).
            Passionate about building secure, scalable and automated cloud platforms.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Azure", "AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "IaC", "Security"].map((t) => (
              <span key={t} className="rounded-full glass px-3 py-1 text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {ABOUT_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover-glow"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
