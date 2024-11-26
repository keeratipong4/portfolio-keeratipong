import HamburgerMenu from "./HamburgerMenu";
import Header from "./header";
import { links } from "@/app/_lib/data";

export default function Navbar() {
  return (
    <nav>
      <HamburgerMenu links={links} />
      <Header links={links} />
    </nav>
  );
}
