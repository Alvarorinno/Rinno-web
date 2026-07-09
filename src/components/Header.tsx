import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  { name: "Youtube", href: "" },
  { name: "Instagram", href: "" },
  { name: "Facebook", href: "" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-rinno-dark/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Rinno" width={110} height={53} priority />
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
                {icon.name.charAt(0)}
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
