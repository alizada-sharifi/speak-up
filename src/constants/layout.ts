import { ROUTES } from "./route";

export const Navbars: { label: string; value: string }[] = [
  { label: "home", value: ROUTES.HOME },
  { label: "courses", value: ROUTES.COURSES },
  { label: "contact", value: ROUTES.CONTACT },
  { label: "about", value: ROUTES.ABOUT },
];

export const lnaguages: { flag: string; label: string; value: string }[] = [
  { flag: "/images/US.svg", label: "English", value: "en" },
  { flag: "/images/DE.svg", label: "German", value: "de" },
  { flag: "/images/GP.svg", label: "France", value: "fr" },
  { flag: "/images/TR.svg", label: "Turkiye", value: "tr" },
];

export const footerData = [
  {
    title: "footer.courses",
    values: [
      { label: "footer.learnEnglish", value: "/" },
      { label: "footer.learnFrench", value: "/" },
      { label: "footer.learnTurkey", value: "/" },
      { label: "footer.learnGerman", value: "/" },
    ],
  },

  {
    title: "footer.products",
    values: [
      { label: "navigation.landingPage", value: "/" },
      { label: "navigation.about", value: "/" },
      { label: "navigation.contact", value: "/" },
      { label: "navigation.courses", value: "/" },
    ],
  },
];
