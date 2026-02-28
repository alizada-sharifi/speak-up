"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { User } from "lucide-react";

import { Navbars } from "@/constants/layout";
import { ROUTES } from "@/constants/route";
import LnaguageSwitcher from "./LnaguageSwitcher";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

function Header() {
  const t = useTranslations("navigation");
  const pathname = usePathname();

  return (
    <header className="containers flex items-center justify-between gap-3 py-3">
      <MobileNav />

      <Link href={ROUTES.HOME}>
        <Image alt="SpeakUp" src="/images/logo.svg" width={140} height={40} />
      </Link>

      <nav className="flex items-center gap-4 max-md:hidden">
        {Navbars.map((item) => {
          const isActive =
            pathname === item.value || pathname.startsWith(`${item.value}/`);

          return (
            <Link
              href={item.value}
              key={item.label}
              className={cn(
                " transition-all duration-200 py-2 px-4 rounded-full text-neutral-300",
                isActive
                  ? "text-primary-400 font-semibold"
                  : "hover:bg-neutral-50/30",
              )}
            >
              {t(item.label)}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <Link href={"/"}>
          <User />
        </Link>

        <LnaguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
