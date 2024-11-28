import HamburgerMenu from "./HamburgerMenu";
import Header from "./Header";
import { links } from "@/lib/data";

export default function Navbar() {
  return (
    <nav>
      <HamburgerMenu links={links} />
      <Header links={links} />
    </nav>
  );
}
