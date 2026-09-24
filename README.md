# Kim Joshua Español — Developer Portfolio

Personal portfolio website for **Kim Joshua Español**, a Software Developer with 6+ years of professional experience building enterprise and full-stack applications.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Responsive Web Design

## Portfolio Sections

- About
- Technical Skills
- Professional Experience
- Personal Projects
- Contact
- Resume

## Personal Projects

The portfolio includes a dedicated section for independent projects and experiments, including:

- **KimSamOPTCG** — Personal TCG business/project
- **KimSam OPTCG Binder** — Personal TCG project
- **Vaeloria TCG** — Product/game concept
- **Inventory System** — Full-stack side project

Each project can include a live project URL and GitHub repository URL.

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Resume

The portfolio resume is stored in:

```text
public/resume.pdf
```

It can be accessed from the portfolio through the **View Resume** link.

## Deployment

This project is suitable for deployment on **Vercel**.

Recommended Vercel settings for a standard Vite project:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

For automatic deployments, connect the GitHub repository to Vercel. Every push to the configured branch can trigger a new deployment.

## Updating Personal Project Links

Personal project URLs are defined in `src/main.jsx`. Update the `projectUrl` and `githubUrl` values when a project has a live website or public repository.

Example:

```jsx
projectUrl: "https://your-project.vercel.app",
githubUrl: "https://github.com/yourusername/your-project",
```

Use `#` when a project does not currently have a public link. The corresponding button is hidden automatically.

## Author

**Kim Joshua Español**

- LinkedIn: https://linkedin.com/in/kim-joshua-espanol-a63610197/
- GitHub: https://github.com/kimsamapp

---

Built as a personal developer portfolio and continuously updated as new projects and experiments are completed.
