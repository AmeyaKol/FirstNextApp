import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/favicon.ico" height={50} width={50} alt="site logo" />
      </div>
      <Link href="../">Home</Link>
      <Link href="../about">About</Link>
      <Link href="../ninjas">List of Ninjas</Link>
    </nav>
  );
};

export default Navbar;
