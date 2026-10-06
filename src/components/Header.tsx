import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    name: "Youtube",
    href: "",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21z" />
      </svg>
    ),
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-rinno-dark/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Rinno" width={140} height={38} priority />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-2 sm:flex">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href || "#"}
                aria-label={icon.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-rinno-cloud/70 transition hover:border-rinno-blue hover:text-rinno-blue"
              >
                {icon.icon}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className="rounded-full bg-rinno-blue px-5 py-2 text-sm font-semibold tracking-wide text-white transition hover:bg-rinno-navy"
          >
            HABLEMOS
          </a>
        </div>
      </div>
    </header>
  );
}
