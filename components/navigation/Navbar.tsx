"use client";
import Link from "next/link";
import GifIcon from "../../public/icon.gif";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(10, 10, 10, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={GifIcon}
            width={32}
            height={32}
            alt="icon"
            className="rounded-lg transition-opacity duration-200 hover:opacity-100"
            style={{ opacity: 0.7 }}
          />
        </Link>

        {/* Pill nav */}
        <div
          className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-xl"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-lg text-sm transition-all duration-200"
              style={{
                color: pathname === href ? "#4ade80" : "#888",
                background:
                  pathname === href
                    ? "rgba(74, 222, 128, 0.1)"
                    : "transparent",
                fontWeight: pathname === href ? 500 : 400,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
