"use client";

import {
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MailIcon,
  PhoneCall,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Platform", href: "/platform" },
    { name: "Process", href: "/process" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ================= TOP BAR (NOT STICKY) ================= */}
      <div className="bg-bg-divider sticky top-0 z-50 right-0 py-2 text-sm">
        <section className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6 text-text-secondary">
            <div className="flex items-center gap-2 hover:text-text-primary transition">
              <MailIcon size={16} />
              <span className="cursor-pointer">
                amar47kumar47@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall size={16} />
              <span>+91 9608553167</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-text-secondary">
            <Link href="/" className="hover:text-text-primary hover:scale-110 transition"><Facebook size={18} /></Link>
            <Link href="/" className="hover:text-text-primary hover:scale-110 transition"><Instagram size={18} /></Link>
            <Link href="/" className="hover:text-text-primary hover:scale-110 transition"><Youtube size={18} /></Link>
            <Link href="/" className="hover:text-text-primary hover:scale-110 transition"><Linkedin size={18} /></Link>
            <Link href="/" className="hover:text-text-primary hover:scale-110 transition"><Github size={18} /></Link>
          </div>
        </section>
      </div>

      {/* ================= STICKY NAVBAR (THIS WILL WORK) ================= */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-bg-surface/95 backdrop-blur-lg shadow-xl border-b border-bg-divider"
            : "bg-bg-surface/85 backdrop-blur-md"
        }
        `}
      >
        <div className="h-[84px] w-[90%] mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Kraviona Logo"
              className="w-[200px] object-contain"
            />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative transition
                    ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }
                    after:absolute after:-bottom-2 after:left-0 after:h-[2px]
                    after:bg-accent-primary after:transition-all
                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
            bg-accent-primary text-white text-sm font-semibold
            hover:bg-accent-hover transition
            shadow-lg shadow-accent-primary/30"
          >
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
