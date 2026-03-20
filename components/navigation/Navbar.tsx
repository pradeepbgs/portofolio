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
        background: "rgba(3, 13, 24, 0.82)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        borderBottom: "1px solid rgba(74, 222, 128, 0.08)",
      }}
    >
      <div className="max-w-4xl mx-auto px-5 py-3 flex justify-between items-center">
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors duration-200"
              style={{
                color: pathname === href ? "#4ade80" : "#94a3b8",
                fontWeight: pathname === href ? 600 : 400,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link href="/">
          <Image
            src={GifIcon}
            width={42}
            height={42}
            alt="icon"
            className="rounded-full transition-opacity duration-200"
            style={{ opacity: 0.75 }}
          />
        </Link>
      </div>
    </nav>
  );
}
