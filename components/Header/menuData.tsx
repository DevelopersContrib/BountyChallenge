import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/about"
  },
  {
    id: 3,
    title: "Docs",
    newTab: true,
    path: "https://docs.bountychallenge.com"
  }  
];

export default menuData;
