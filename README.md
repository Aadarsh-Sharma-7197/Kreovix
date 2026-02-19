# Kreovix - Digital Agency Portfolio

**Kreovix** is our take on a premium agency portfolio. We built it with React 19 and Tailwind v4 to feature a custom "Midnight" dark theme, zero-latency cursor, and momentum scrolling—stripping out the heavy animations to keep it buttery smooth and responsive.

## 🚀 Features

*   **Premium "Midnight" Aesthetic**: A deep, immersive dark theme (`#050505`) with curated Neon Purple and Teal accents.
*   **Smooth Scrolling**: Integrated **Lenis JS** for a weighted, momentum-based scrolling experience.
*   **Immersive Animations**: Powered by **Framer Motion**, featuring scroll-triggered reveals, parallax effects, and smooth transitions.
*   **Custom Cursor**: A unique, zero-latency custom cursor that reacts to interactive elements.
*   **High-Performance Portfolio**: An optimized masonry grid layout that handles media efficiently without lag.
*   **Responsive Design**: Fully responsive layout that looks great on stunning 4K monitors down to mobile devices.
*   **Glassmorphism Utility**: Custom utility classes for modern, frosted-glass UI elements.

## 🛠️ Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Smooth Scroll**: [Lenis](https://lenis.studio/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Aadarsh-Sharma-7197/Kreovix.git
    cd Kreovix
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🎨 Design Tokens

The project uses a custom design system defined in `src/index.css`.

| Variable | Value | Description |
| :--- | :--- | :--- |
| `--color-background` | `#050505` | Deep Midnight Black |
| `--color-neon-purple` | `#9D4EDD` | Primary Accent |
| `--color-neon-teal` | `#00F5D4` | Secondary Accent |
| `--font-family-poppins` | `Poppins` | Headings |
| `--font-family-inter` | `Inter` | Body Text |

## 📂 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page views (Home, About, Portfolio, etc.)
│   ├── App.jsx          # diverse routing and layout logic
│   ├── index.css        # Global styles and Tailwind configuration
│   └── main.jsx         # Entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Designed & Built with ❤️ by **Kreovix Team**
