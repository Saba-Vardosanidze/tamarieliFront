import { FooterDataProps } from "feature/type";
import georgiaFlag from "../../../public/Images/headerImages/svg/georgia-flag-icon.svg";
import UnitedKingdomFlag from "../../../public/Images/headerImages/svg/United Kingdom.svg";

export const HeaderData = [
  {
    id: "1",
    title: "Home",
    href: "/",
  },
  {
    id: "2",
    title: "About",
    href: "/aboutUs",
  },
  {
    id: "3",
    title: "Guide",
    href: "/",
  },
];
export const options = [
  { id: 1, label: "ქართული", img: georgiaFlag },
  { id: 2, label: "ინგლისური", img: UnitedKingdomFlag },
];
export const projects = [
  {
    id: 1,
    title: "Tamarieli",
    image: "/images/headerImages/png/projectsBg.jpg",
    href: "/tamarieli",
  },
  {
    id: 2,
    title: "Ciblus",
    image: "/images/headerImages/png/projectsBg.jpg",
    href: "/ciblus",
  },
  {
    id: 3,
    title: "Earthoba",
    image: "/images/headerImages/png/projectsBg.jpg",
    href: "/earthoba",
  },
  {
    id: 4,
    title: "Think.Create.Ispire",
    image: "/images/headerImages/png/projectsBg.jpg",
    href: "/thinsCreateInspire",
  },
];
export const portfolioData = [
  {
    id: 1,
    title: "Portfolio Project 1",
    image: "/images/portfolio/project1.jpg",
  },
  {
    id: 2,
    title: "Portfolio Project 2",
    image: "/images/portfolio/project2.jpg",
  },
  {
    id: 3,
    title: "Portfolio Project 3",
    image: "/images/portfolio/project3.jpg",
  },
  {
    id: 4,
    title: "Portfolio Project 4",
    image: "/images/portfolio/project4.jpg",
  },
];

export const FootData: FooterDataProps[] = [
  {
    socmediaLinks: [
      {
        id: 1,
        href: "/",
        img: "/images/headerImages/svg/Facebook.svg",
        alt: "Facebook",
        width: 9,
        height: 16,
      },
      {
        id: 2,
        href: "/",
        img: "/images/headerImages/svg/instagram.svg",
        alt: "Instagram",
        width: 16,
        height: 16,
      },
    ],
  },
];
export const FooterItems = [
  {
    contactUs: "კონტაქტი",
    links: [
      { tel: "+33 7 52 75 56 63" },
      { mailto: "tamarielitamarieli@gmail.com" },
      {
        address: "1A Rue de Lattre de Tassigny, 67300 Schiltigheim",
      },
    ],
  },
];
