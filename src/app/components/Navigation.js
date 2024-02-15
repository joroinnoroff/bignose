import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [activeLink, setActiveLink] = useState(0);
  const navLinks = [
    { id: 1, title: "Produkter", href: "/" },
    { id: 2, title: "Produsenter", href: "#Produsenter" },
    { id: 3, title: "Kontakt", href: "#Kontakt" },
 
  ];

  return(
    <nav>
      <ul className="list-none flex gap-2 text-white">
        {
          navLinks.map((nav, index) => (
            <li key={nav.id} className="uppercase">
              <Link href={nav.href} className={`${activeLink === index ? "border-b" : "text-gray-500"}`}>{nav.title}</Link>
            </li>
          ))
        }
      </ul>

  
    </nav>
  )
}