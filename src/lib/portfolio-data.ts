import resumeAsset from "@/assets/resume.pdf.asset.json";
import profileAsset from "@/assets/nithin-profile.png.asset.json";

export const RESUME_URL = resumeAsset.url;
export const PROFILE_IMG = profileAsset.url;

export const PROFILE = {
  name: "Nithin Kumar",
  fullName: "Ch Nithin Kumar",
  titles: [
    "DevSecOps Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Azure DevOps Engineer",
    "Azure Specialist",
  ],
  email: "chnithinkumar786@gmail.com",
  phone: "+91 7075016326",
  phoneRaw: "+917075016326",
  linkedin: "https://www.linkedin.com/in/chnithin",
  github: "https://github.com/chnithin-devops",
  location: "Hyderabad, Telangana, India",
  availability: "Available for Opportunities",
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_STATS = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Cloud & DevOps Tools" },
  { value: 1, suffix: "", label: "Flagship Project" },
  { value: 5, suffix: "", label: "Certifications" },
];

export const EXPERIENCE = [
  {
    company: "Zasta",
    role: "DevOps Engineer",
    duration: "November 2025 – Present",
    location: "Hyderabad",
    bullets: [
      "Designed and automated CI/CD pipelines using Azure DevOps, reducing deployment time by 60%.",
      "Implemented Infrastructure as Code using Terraform to automate cloud provisioning.",
      "Containerized applications using Docker and Kubernetes for scalable deployments.",
      "Integrated security scanning (Mend, Checkmarx, Chainguard, Semgrep, SonarQube) into CI/CD pipelines.",
      "Managed cloud infrastructure on Azure and AWS.",
    ],
  },
  {
    company: "Zasta Engineers and Consultancy",
    role: "DevOps Engineer",
    duration: "September 2023 – November 2025",
    location: "Hyderabad",
    bullets: [
      "Designed and maintained CI/CD pipelines using Azure DevOps and GitHub Actions for automated deployments.",
      "Managed cloud infrastructure across Microsoft Azure and AWS environments.",
      "Automated infrastructure provisioning using Terraform and Infrastructure as Code (IaC) practices.",
      "Deployed and managed containerized applications using Docker and Kubernetes (AKS/EKS).",
      "Implemented DevSecOps practices by integrating security scanning tools into CI/CD pipelines.",
      "Configured Azure resources including App Services, Storage Accounts, VNets and AKS clusters.",
      "Managed AWS services such as EC2, IAM, S3, VPC, CloudWatch and EKS.",
      "Automated deployment, monitoring and operational tasks using Bash, PowerShell and Python.",
      "Monitored applications and infrastructure using Prometheus, Grafana, ELK and Azure Monitor.",
      "Performed troubleshooting and root cause analysis for production incidents and deployment failures.",
      "Configured RBAC, IAM policies and secrets management for secure deployments.",
      "Supported Linux and Windows server administration in cloud and on-premises environments.",
      "Integrated SAST, DAST and open-source vulnerability scanning tools within DevSecOps pipelines.",
      "Worked in Agile/Scrum — sprint planning, deployments and release activities.",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "Microsoft Azure", level: 92 },
      { name: "AWS", level: 80 },
      { name: "Azure DevOps", level: 93 },
      { name: "Azure Key Vault", level: 82 },
      { name: "AWS EC2 / IAM / S3 / VPC", level: 80 },
    ],
  },
  {
    title: "CI/CD & Automation",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "Azure Pipelines", level: 92 },
      { name: "Maven", level: 85 },
      { name: "Shell / Bash", level: 82 },
      { name: "GitHub Actions", level: 85 },
      { name: "JFrog Artifactory", level: 78 },
    ],
  },
  {
    title: "Containers & IaC",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes (AKS / EKS)", level: 85 },
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 78 },
    ],
  },
  {
    title: "Source Control & Tracking",
    skills: [
      { name: "Git, GitHub & GitLab", level: 92 },
      { name: "SVN", level: 80 },
      { name: "Azure Boards", level: 88 },
      { name: "Redmine", level: 78 },
    ],
  },
  {
    title: "Data & Databases",
    skills: [
      { name: "Azure SQL", level: 82 },
      { name: "Azure Synapse", level: 78 },
      { name: "Azure Data Factory", level: 80 },
      { name: "Databricks", level: 75 },
      { name: "MySQL / Oracle / SQL Server", level: 80 },
      { name: "Kafka", level: 70 },
    ],
  },
  {
    title: "Quality & Security",
    skills: [
      { name: "SonarQube", level: 88 },
      { name: "Checkmarx", level: 82 },
      { name: "Mend (WhiteSource)", level: 80 },
      { name: "Trivy / Semgrep / Fortify", level: 78 },
      { name: "SAST / SCA / DAST / SBOM", level: 80 },
      { name: "Linux / Windows Admin", level: 85 },
      { name: "Python / PowerShell", level: 78 },
      { name: "JMeter", level: 70 },
    ],
  },
  {
    title: "Monitoring",
    skills: [
      { name: "Prometheus", level: 80 },
      { name: "Grafana", level: 80 },
      { name: "ELK Stack", level: 78 },
      { name: "Azure Monitor", level: 82 },
    ],
  },
];

export const PROJECT = {
  name: "IPOS",
  tagline: "Integrated Port Operating System",
  overview:
    "IPOS integrates the core functions of terminal and vessel operations — registration, berthing, pilotage, cargo load/discharge, tracking, stuffing/de-stuffing and invoicing. It powers warehouse management, cargo inventory control, accurate cargo accounting, automatic invoice generation, and EIS/EDI reporting for modern ports.",
  responsibilities: [
    "Build and maintain CI/CD pipelines integrated with SonarQube quality gates.",
    "Author build, deployment and maintenance scripts using Jenkins, Azure DevOps, Docker and Maven.",
    "Own Production and Staging deployments with zero-downtime release windows.",
    "Implement Docker-based pipelines and AKS-based container orchestration.",
    "Set up Continuous Deployment processes and advise teams on best practices.",
    "Target release items with the Dev team and maintain DB scripts for every release.",
    "Manage SVN/Git code control and release management end-to-end.",
  ],
  architecture: [
    "Microservices packaged as Docker images, orchestrated on Azure Kubernetes Service (AKS).",
    "Infrastructure provisioned as code via Terraform across Dev, Test, Stage and Prod.",
    "Secrets and connection strings centralized in Azure Key Vault.",
    "Data plane on Azure SQL, Synapse Analytics, ADF and Databricks with ADLS Gen2 storage.",
  ],
  stack: [
    "Azure DevOps",
    "Jenkins",
    "Docker",
    "AKS",
    "Terraform",
    "Ansible",
    "SonarQube",
    "Checkmarx",
    "Mend",
    "Maven",
    "Azure SQL",
    "Azure Synapse",
    "ADF",
    "Databricks",
    "Key Vault",
  ],
  pipeline: [
    "Commit → Git / SVN",
    "Build & Test → Maven + Jenkins / Azure Pipelines",
    "Quality & Security → SonarQube, Checkmarx, Mend",
    "Package → Docker image + push to registry",
    "Provision → Terraform + Ansible",
    "Deploy → AKS across Dev / Test / Stage / Prod",
    "Monitor & Release → Azure Boards + Redmine",
  ],
  impact: [
    "Faster, repeatable releases across four environments with automated gates.",
    "Reduced manual deployment effort through end-to-end pipeline automation.",
    "Improved code quality and security posture with SonarQube, Checkmarx and Mend.",
    "Centralized secrets and IaC-driven infrastructure for auditable operations.",
  ],
};

export const SERVICES = [
  { title: "CI/CD Pipeline Development", desc: "End-to-end pipelines on Azure DevOps and Jenkins with quality and security gates." },
  { title: "Cloud Infrastructure", desc: "Azure and AWS environments designed for scale, resilience and cost efficiency." },
  { title: "Infrastructure as Code", desc: "Terraform + Ansible for reproducible, versioned infrastructure across environments." },
  { title: "Azure Administration", desc: "VMs, Web Apps, Function Apps, Key Vault, Front Door, NSGs and monitoring." },
  { title: "AWS Administration", desc: "Core AWS services, IAM, and integration with hybrid CI/CD pipelines." },
  { title: "Docker & Kubernetes", desc: "Containerization, image hardening, and AKS-based orchestration." },
  { title: "Release Management", desc: "Coordinated releases, DB script control, and rollback strategies." },
  { title: "DevOps Automation", desc: "Shell, Bash, Python and PowerShell automation across build, test and deploy." },
];

export const CERTIFICATIONS = [
  {
    title: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    category: "Professional Certification",
    // Paste the Credly / Microsoft Learn share URL here to activate the button.
    certificateUrl: "",
  },
  {
    title: "Full Stack Developer",
    issuer: "JSpiders",
    category: "Completed Professional Training",
    certificateUrl: "",
  },
  { title: "AI Tools Workshop", issuer: "LinkedIn Profile", category: "AI & Professional Learning", certificateUrl: "" },
  { title: "Generative AI Mastermind", issuer: "LinkedIn Profile", category: "AI & Professional Learning", certificateUrl: "" },
  { title: "AI Bootcamp", issuer: "LinkedIn Profile", category: "AI & Professional Learning", certificateUrl: "" },
];

export const ACHIEVEMENTS = [
  { title: "Internal Award", desc: "Recognized internally at Zasta Enterprise Pvt Ltd for outstanding contribution." },
  { title: "Hackathon Participation", desc: "Awarded certificate for active participation in company hackathon." },
  { title: "National Science Olympiad", desc: "Certificate of Participation in the National Science Olympiad." },
  { title: "Blood Donation Camp", desc: "Certificate of Participation in Blood Donation Camp — community initiative." },
];

export const EDUCATION = [
  { degree: "Bachelor of Science (MECS), Computer Science", institute: "Gauthami Degree College, Kukatpally — Osmania University" },
  { degree: "Intermediate (MPC)", institute: "Sri Gayatri Junior College (2016 – 2018)" },
  { degree: "SSC", institute: "SPR School of Excellence (2015 – 2016)" },
];
