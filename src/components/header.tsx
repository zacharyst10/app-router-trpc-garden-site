import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Navbar } from "./navbar";
import Image from "next/image";

import Logo from "../../public/icons/logo.png";

export default function Header() {
  return (
    <header className="container flex items-center justify-between py-5">
      <Link href="/">
        <Image
          src={Logo}
          alt="logo"
          width={50}
          height={50}
          placeholder="blur"
        />
      </Link>
      <Navbar />
      <ModeToggle />
    </header>
  );
}
