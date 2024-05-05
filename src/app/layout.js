"use client";

import { Jost } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./globals.css";

const jost = Jost({
  weight: "400",
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <body>
        <header>
          <nav className={jost.className}>
            <Link className={`link ${pathname === "/projects" ? "active" : ""}`} href="projects">
              Proyectos
            </Link>
            <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
              Principal
            </Link>
            <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/about">
              Sobre mí
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
