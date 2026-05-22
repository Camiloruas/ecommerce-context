import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Camiloruas",
    icon: <FaGithub size={20} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/camilo-ruas-3a2a6425/",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5579998448030",
    icon: <FaWhatsapp size={20} />,
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/80 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 text-center md:flex-row md:text-left">
        <p className="text-sm text-slate-600">
          Lume Store &copy; {currentYear} | Desenvolvido por{" "}
          <a
            className="font-bold text-slate-900 transition-colors hover:text-sky-700"
            href="https://www.camiloruas.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Camilo Ruas
          </a>
        </p>

        <nav className="flex items-center gap-3" aria-label="Redes sociais">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              title={link.name}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 hover:shadow"
            >
              {link.icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
