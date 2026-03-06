// src/lib/data.ts
import { Project, Skill } from "./types";

export const siteConfig = {
  name: "Mudavath Aravind",
  title: "Embedded Systems Engineer & Developer",
  tagline: "I write firmware that powers real hardware — from bare-metal STM32 to Linux BSPs and Python automation.",
  email: "aravind.mudavath@gmail.com",
  github: "https://github.com/mudavath-aravind",
  linkedin: "https://linkedin.com/in/mudavath-aravind",
  githubUsername: "mudavath-aravind",
  location: "Hyderabad, India",
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
    id: "stm32-rtos",
    title: "STM32 RTOS Kernel",
    description: "A lightweight preemptive RTOS built from scratch for STM32F4 microcontrollers, featuring task scheduling, semaphores, and IPC.",
    tech: ["C", "STM32", "ARM Cortex-M4", "CMSIS", "GDB", "OpenOCD"],
    category: "Embedded",
    githubUrl: "https://github.com/mudavath-aravind/stm32-rtos",
    imageColor: "#00ff88",
    featured: true,
    stars: 142,
    icon: "cpu",
  },
  {
    id: "canbus-logger",
    title: "CAN Bus Data Logger",
    description: "Real-time CAN bus sniffer and logger with Python GUI, SQLite storage, and CSV export for automotive diagnostics.",
    tech: ["C", "Python", "CAN Bus", "SQLite", "Tkinter", "STM32"],
    category: "Embedded",
    githubUrl: "https://github.com/mudavath-aravind/canbus-logger",
    imageColor: "#ff6b35",
    featured: true,
    stars: 87,
    icon: "activity",
  },
  {
    id: "ci-flash-pipeline",
    title: "CI/CD Firmware Flash Pipeline",
    description: "GitHub Actions pipeline that auto-builds, tests, and flashes STM32 firmware to hardware-in-the-loop test rigs.",
    tech: ["Python", "GitHub Actions", "OpenOCD", "QEMU", "Shell", "Docker"],
    category: "Automation",
    githubUrl: "https://github.com/mudavath-aravind/ci-flash-pipeline",
    imageColor: "#6c63ff",
    featured: true,
    stars: 211,
    icon: "git-branch",
  },
  {
    id: "linux-driver",
    title: "Linux Kernel Driver — SPI Sensor",
    description: "A production-quality Linux character device driver for an SPI-based IMU sensor with DMA support and sysfs interface.",
    tech: ["C", "Linux Kernel", "SPI", "DMA", "Device Tree", "Makefile"],
    category: "Embedded",
    githubUrl: "https://github.com/mudavath-aravind/spi-imu-driver",
    imageColor: "#f7c59f",
    stars: 63,
    icon: "layers",
  },
  {
    id: "embedded-dashboard",
    title: "Embedded Telemetry Dashboard",
    description: "Real-time web dashboard for visualizing embedded device telemetry via WebSocket. Built with Next.js and Chart.js.",
    tech: ["Next.js", "TypeScript", "WebSocket", "Chart.js", "Tailwind CSS"],
    category: "Web",
    githubUrl: "https://github.com/mudavath-aravind/embedded-dashboard",
    imageColor: "#00d4ff",
    stars: 95,
    icon: "monitor",
  },
  {
    id: "pytest-firmware",
    title: "Pytest Firmware Test Framework",
    description: "Modular pytest plugin for embedded firmware testing with UART/SWD communication, fixtures, and HTML reporting.",
    tech: ["Python", "pytest", "UART", "Serial", "HTML", "Jinja2"],
    category: "Automation",
    githubUrl: "https://github.com/mudavath-aravind/pytest-firmware",
    imageColor: "#ff4757",
    stars: 178,
    icon: "terminal",
  },
];

export const skills: Skill[] = [
  { name: "C / C++", level: 95, category: "Embedded" },
  { name: "STM32 / ARM", level: 92, category: "Embedded" },
  { name: "RTOS (FreeRTOS)", level: 88, category: "Embedded" },
  { name: "Linux / Kernel", level: 80, category: "Embedded" },
  { name: "CAN / SPI / I2C", level: 90, category: "Embedded" },
  { name: "Python", level: 85, category: "Software" },
  { name: "Git / GitHub Actions", level: 88, category: "Software" },
  { name: "Docker", level: 75, category: "Software" },
  { name: "Next.js / React", level: 78, category: "Web" },
  { name: "TypeScript", level: 80, category: "Web" },
  { name: "pytest / HIL Testing", level: 87, category: "Automation" },
  { name: "OpenOCD / GDB", level: 85, category: "Embedded" },
];

export const experience = [
  {
    role: "Embedded Systems Engineer",
    company: "Your Company Name",
    period: "2022 – Present",
    location: "Hyderabad, India",
    points: [
      "Lead firmware development for ARM Cortex-M based embedded systems in C.",
      "Designed CAN/SPI/I2C communication protocols for sensor interfacing.",
      "Built CI/CD pipelines for automated firmware testing reducing release time by 40%.",
    ],
  },
  {
    role: "Embedded Software Developer",
    company: "Previous Company",
    period: "2019 – 2022",
    location: "Hyderabad, India",
    points: [
      "Developed STM32-based sensor nodes with FreeRTOS and BLE connectivity.",
      "Created Python-based automated test frameworks using pytest and UART.",
      "Maintained Linux BSP and device tree configurations for custom hardware.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    school: "Your University, Hyderabad",
    period: "2015 – 2019",
  },
];
