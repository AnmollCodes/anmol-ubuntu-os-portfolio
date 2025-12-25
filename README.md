# 🐧 Ubuntu-Inspired AI Portfolio OS

> **A technically evolved Ubuntu 20.04–inspired portfolio that functions as an interactive, AI-driven knowledge system rather than a static website.**

This project transforms a traditional portfolio into a **portfolio operating system**, combining **frontend engineering, AI systems, and product design** to demonstrate how I design, reason, and ship software.

It is built to answer recruiter and engineer questions **interactively**, not passively.

---

## 📌 Core Design Philosophy

Most portfolios show *what* someone built.  
This portfolio focuses on **how and why**.

Key principles:
- **Systems over pages**
- **Proof over claims**
- **Interaction over static content**
- **Intelligence over animation**

---

## 🚀 Key Technical Features

### 1️⃣ AI-Powered Terminal (Ask-Me-Anything Interface)

A fully interactive Ubuntu-style terminal that acts as a **personal knowledge agent**.

**Capabilities**
- Accepts natural language and command-style queries:
  ```bash
  who are you
  show projects
  why should we hire you
  show achievements
  ```
- **Intent detection + response routing**
- **Context-aware answers** grounded in real portfolio data
- **No generic or hallucinated responses**

**Technical Highlights**
- Retrieval-Augmented Generation (RAG) pattern
- Structured knowledge base (projects, achievements, skills)
- Deterministic fallback handling for unknown queries
- Terminal UX with typing animation, cursor blink, and command history

*Why this matters: Demonstrates applied AI engineering, not just API usage.*

### 2️⃣ Recruiter Mode (Signal-First Rendering)

A global UI toggle optimized for recruiter workflows.

**Behavior**
- Disables non-essential animations
- Switches layout to a high-signal view
- Surfaces only:
  - Top projects
  - Impact metrics
  - Skills snapshot
  - Honors & recognitions
  - Direct contact CTA

**Technical Implementation**
- State persisted via `localStorage`
- Conditional layout rendering
- Zero duplication of data sources

*Why this matters: Shows empathy for real-world users and decision-making constraints.*

### 3️⃣ Project Impact Metrics System

Every project is backed by measurable outcomes, not descriptions.

**Metrics Examples**
- **Scale** (users, rank, scope)
- **Technical depth** (models, systems, architecture)
- **Outcomes** (accuracy, deployment, adoption)
- **Recognition** (global/national selections, incubation)

**Implementation**
- Metrics defined via JSON/config
- Rendered consistently across UI
- Designed for 30-second recruiter scan

*Why this matters: Converts projects into defensible interview talking points.*

---

### 🧭 OS-Level Navigation Model
The portfolio is structured as an operating environment, not pages:
- **Apps**
- **Terminal**
- **Settings**
- **Files**
- **Modes**

All UI metaphors are intentional and functional.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js |
| **Styling** | Tailwind CSS |
| **UI Architecture** | Component-driven |
| **State Management** | Local + config-based |
| **AI Layer** | RAG-style intent & retrieval |
| **Config** | JSON-driven content |

---

## 📂 Project Structure

```bash
src/
 ├── components/          # UI components (apps, terminal, toggles)
 ├── pages/               # Next.js routing
 ├── styles/              # Global + Tailwind styles
 ├── public/              # Static assets
 ├── config/
 │    ├── projects.json
 │    ├── achievements.json
 │    ├── skills.json
 │    └── ai-knowledge.ts
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/AnmollCodes/anmol-ubuntu-os-portfolio.git
cd anmol-ubuntu-os-portfolio
npm install
```

### Development

```bash
npm run dev
```
Runs at `http://localhost:3000`

### Production Build

```bash
npm run build
```

---

## 📬 Contact Form (EmailJS Integration)

Optional email support via EmailJS.

Create `.env` file:

```env
NEXT_PUBLIC_USER_ID=your_user_id
NEXT_PUBLIC_SERVICE_ID=your_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_template_id
```

---

## 🔐 Safety & Reliability
- No write access to external profiles
- External data used in read-only, curated form
- AI responses strictly grounded in provided data
- Graceful handling of unknown or unsupported queries

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add meaningful feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

MIT License.
