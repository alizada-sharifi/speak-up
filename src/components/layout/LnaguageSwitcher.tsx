"use client";

import { useLocale } from "next-intl";
import { lnaguages } from "@/constants/layout";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function LnaguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = lnaguages.find((l) => l.value === locale);

  // ================ function for handling language changes ========
  const handleLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath as `/${string}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-0.5">
        {currentLang && (
          <>
            <span className="uppercase text-neutral-300 font-medium">
              {currentLang.value}
            </span>
            <ChevronDown size={17} />
          </>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {lnaguages.map((lang) => (
          <DropdownMenuRadioItem
            key={lang.value}
            value={lang.value}
            onClick={() => handleLanguage(lang.value)}
            className="flex items-center gap-2"
          >
            <Image src={lang.flag} alt={lang.label} width={20} height={20} />
            <span>{lang.label}</span>
          </DropdownMenuRadioItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LnaguageSwitcher;
