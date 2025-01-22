import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
// import logo1 from "../../assets/logo1.webp";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-90 items-center">
            {/* <img src={logo1} alt="logo" className="w-20 h-15"/> */}
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
            <FaInstagram />

        </div>
    </nav>
  )
}

export default Navbar