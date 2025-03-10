import { FaBars, FaTimes } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../../constants";
import { useState } from "react";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }
  const handleLinkClick = (e, href) =>{
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if(targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setMobileMenuOpen(false);
  }
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden lg:flex max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/80 py-3 backdrop-blur-lg:flex gap-8">
          <div className="flex justify-between">
            <a href="#">
              <img src={logo} width={50} alt="logo" />
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a className="text-sm hover:text-yellow-400" href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} alt="logo" width={90} className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" /> ) :
                  (<FaBars className="m-2 h-6 w-5"/>
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
          <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="block w-full" onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
            </li>
          ))} 
          </ul>
          )}
        </div>
      </nav>

    </div>
    
  )
}

export default Navbar