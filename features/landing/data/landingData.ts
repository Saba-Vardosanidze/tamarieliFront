import { FooterDataProps } from "features/type";
import georgiaFlag from "../../../public/Images/headerImages/svg/georgia-flag-icon.svg";
import UnitedKingdomFlag from "../../../public/Images/headerImages/svg/United Kingdom.svg";
// import x from "../../../public/Images/headerImages/svg/xicon.png";
// import facebook from "../../../public/Images/headerImages/svg/facebook-logo-facebook-icon-transparent-free-png.webp";
// import instagram from "../../../public/Images/headerImages/svg/instagram.png";

export const HeaderData = [
  {
    id: "1",
    title: "Home",
    href: "/",
  },
  {
    id: "2",
    title: "About",
    href: `/aboutUs`,
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
        href: "https://www.facebook.com/profile.php?id=61568525640571&rdid=1L6nsYDTo2r9ayqn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HDW1R92EL%2F#",
        img: "/Images/headerImages/svg/newFacebook.svg",
        alt: "Facebook",
        width: 20,
        height: 20,
      },
      {
        id: 2,
        href: "https://www.instagram.com/tamarielitamarieli/",
        img: "/Images/headerImages/svg/newInstagram.svg",
        alt: "Instagram",
        width: 20,
        height: 20,
      },
      {
        id: 3,
        href: "https://www.youtube.com/@KekelaMaro",
        img: "/Images/headerImages/svg/newYoutube.svg",
        alt: "YouTube",
        width: 20,
        height: 20,
      },

      {
        id: 4,
        href: "https://x.com/TAMARIELI169247",
        img: "/Images/headerImages/svg/xicon.png",
        alt: "X",
        width: 20,
        height: 20,
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
