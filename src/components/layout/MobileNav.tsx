"use client";

import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";
import { ROUTES } from "@/constants/route";
import Image from "next/image";
import logo from "@/../public/images/logo.svg";
import { Navbars } from "@/constants/layout";
import { useTranslations } from "next-intl";

function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navigation");
  const pathname = usePathname();

  return (
    <>
      <Button
        className="md:hidden"
        aria-label="Toggle mobile menu"
        onClick={() => setOpen(!open)}
        variant="ghost"
      >
        <Menu />
      </Button>

      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300",
          open ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      />

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-80 px-2 py-3 shadow-md transition-transform duration-300 bg-white overflow-y-auto md:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="mb-10 flex items-center justify-between">
          <Link href={ROUTES.HOME} className="flex items-center gap-1">
            <Image src={logo} width={100} height={100} alt="Logo" />
          </Link>

          <Button variant="ghost" size="icon-lg" onClick={() => setOpen(false)}>
            <X />
          </Button>
        </div>
        {/* ============== nav section ======= */}

        <nav className="flex flex-col gap-2">
          {Navbars.map((item) => {
            const isActive =
              pathname === item.value || pathname.startsWith(`${item.value}/`);

            return (
              <Link
                onClick={() => setOpen(false)}
                className={cn(
                  "w-full rounded-sm  px-3 py-2 text-neutral-300 duration-200 transition-all",
                  isActive
                    ? "bg-primary-400 text-white font-semibold"
                    : "hover:bg-neutral-50/30",
                )}
                key={item.value}
                href={item.value}
              >
                {t(item.label)}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default MobileNav;
