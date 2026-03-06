// src/lib/data.ts
import { Project, Skill } from "./types";

export const siteConfig = {
  name: "M Aravind",
  title: "Embedded Systems Engineer",
  tagline: "Entry-level embedded systems engineer passionate about building reliable firmware — from bare-metal STM32 to RTOS and Wi-Fi integrated systems.",
  email: "madhu.aravind@gmail.com",
  github: "https://github.com/Madhu-Aravind",
  linkedin: "https://www.linkedin.com/in/m-aravind-m230759ee",
  githubUsername: "Madhu-Aravind",
  location: "Hyderabad, Telangana, India",
  available: true,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const projects: Project[] = [
  {
    id: "env-data-acquisition",
    title: "Real-Time Environmental Data Acquisition",
    description: "Weather monitoring system on STM32F401RBT6 with multi-channel ADC sampling, 16x2 LCD display, and ESP8266 Wi-Fi for remote TCP/IP data transmission.",
    tech: ["C", "STM32", "ARM Cortex-M4", "ADC", "UART", "ESP8266", "Wi-Fi", "GPIO"],
    category: "Embedded",
    githubUrl: "https://github.com/Madhu-Aravind",
    imageColor: "#00ff88",
    featured: true,
    icon: "monitor",
  },
  {
    id: "ultrasonic-detection",
    title: "Ultrasonic Object Detection System",
    description: "Real-time object distance measurement using STM32 timer input-capture mode with interrupt-driven echo processing, LCD output, and proximity alert logic.",
    tech: ["C", "STM32", "Timers", "Interrupts", "LCD", "Bare-Metal", "SWD"],
    category: "Embedded",
    githubUrl: "https://github.com/Madhu-Aravind",
    imageColor: "#ff6b35",
    featured: true,
    icon: "activity",
  },
  {
    id: "multi-agent-smc",
    title: "Sliding Mode Control for Multi-Agent Systems",
    description: "Master's thesis — designed FOSMC and Super-Twisting SMC for second-order leader-follower multi-agent systems with Lyapunov-based stability analysis.",
    tech: ["MATLAB", "Simulink", "PID", "Sliding Mode Control", "Lyapunov", "Control Systems"],
    category: "Automation",
    githubUrl: "https://github.com/Madhu-Aravind",
    imageColor: "#6c63ff",
    featured: true,
    icon: "git-branch",
  },
  {
    id: "vscode-automation",
    title: "VS Code Extension Test Automation",
    description: "Cross-platform automation framework for VS Code extensions using TypeScript, Mocha, and DOM-based UI selectors integrated into CI/CD pipelines.",
    tech: ["TypeScript", "Mocha", "CI/CD", "Selenium", "vscode-extension-tester", "Angular"],
    category: "Automation",
    githubUrl: "https://github.com/Madhu-Aravind",
    imageColor: "#00d4ff",
    icon: "terminal",
  },
  {
    id: "stm32-peripherals",
    title: "STM32 Peripheral Integration Library",
    description: "Bare-metal and HAL-based firmware for GPIO, ADC, timers, UART, SPI, I2C on STM32F401. Includes ESP8266 and 16x2 LCD drivers with interrupt handling.",
    tech: ["C", "Embedded C", "STM32CubeIDE", "Keil µVision", "ST-Link V2", "GDB"],
    category: "Embedded",
    githubUrl: "https://github.com/Madhu-Aravind",
    imageColor: "#f7c59f",
    icon: "cpu",
  },
  {
    id: "linux-automation",
    title: "Linux System Automation Scripts",
    description: "Bash scripting suite for automating setup, package installation, Python module management, and system optimization on Linux environments.",
    tech: ["Bash", "Python", "Linux", "Shell Scripting", "System Administration"],
    category: "Automation",
    githubUrl: "https://github.com/Madhu-Aravind",
    imageColor: "#ff4757",
    icon: "layers",
  },
];

export const skills: Skill[] = [
  { name: "C / Embedded C", level: 90, category: "Embedded" },
  { name: "STM32 / ARM Cortex-M4", level: 88, category: "Embedded" },
  { name: "Bare-Metal & HAL Programming", level: 85, category: "Embedded" },
  { name: "UART / SPI / I2C", level: 85, category: "Embedded" },
  { name: "RTOS Fundamentals", level: 75, category: "Embedded" },
  { name: "Python", level: 78, category: "Software" },
  { name: "Shell / Bash Scripting", level: 75, category: "Software" },
  { name: "TypeScript / Angular", level: 70, category: "Web" },
  { name: "Linux System Programming", level: 72, category: "Software" },
  { name: "Git / CI/CD", level: 80, category: "Software" },
  { name: "MATLAB / Simulink", level: 78, category: "Automation" },
  { name: "GDB / ST-Link V2 Debugging", level: 82, category: "Embedded" },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Tata Elxsi",
    period: "May 2024 – July 2025",
    location: "Thiruvananthapuram, Kerala",
    points: [
      "Developed cross-platform automation framework for VS Code extensions using TypeScript, Mocha, and DOM-based UI interaction, replacing image/coordinate-based testing with reliable selectors.",
      "Integrated automated tests into CI/CD pipelines for streamlined releases.",
      "Contributed to front-end development using Angular, TypeScript, HTML, and CSS — implemented Picture-in-Picture mode and Dark/Light theme toggle.",
      "Automated Linux system setup using Bash scripting for package installation and system optimization.",
    ],
  },
  {
    role: "Embedded Systems Trainee",
    company: "Kernel Masters",
    period: "Sept 2025 – Present",
    location: "Hyderabad, Telangana",
    points: [
      "Developed embedded firmware on STM32F401RBT6 (ARM Cortex-M4) using Bare-Metal and HAL programming in Keil µVision and STM32CubeIDE.",
      "Configured GPIO, ADC, timers, and interrupt controllers; performed real-time sensor interfacing.",
      "Integrated ESP8266 Wi-Fi and 16x2 LCD via UART/SPI/I2C with interrupt-driven communication stacks.",
      "Applied RTOS fundamentals including task scheduling, semaphores, mutexes, and inter-task communication.",
      "Debugged firmware using ST-Link V2, GDB, and STM32CubeIDE with systematic register-level analysis.",
    ],
  },
];

export const education = [
  {
    degree: "M.Tech — Instrumentation and Control Systems (CGPA: 7.65)",
    school: "National Institute of Technology Calicut",
    period: "2023 – 2025",
  },
  {
    degree: "B.Tech — Electrical and Electronics Engineering (CGPA: 7.64)",
    school: "National Institute of Technology Nagaland",
    period: "2016 – 2020",
  },
  {
    degree: "Diploma — German Language (A1 & A2)",
    school: "Osmania University, Hyderabad",
    period: "2021 – 2022",
  },
];
