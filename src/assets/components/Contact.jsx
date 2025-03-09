import { FaLinkedin, FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CONTACT } from "../../constants"

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-4" id="contact">
        <h2 className="my-20 text-center text-3xl lg:text-4xl">
            Let's Connect
        </h2>
    <div className="text-center text-2xl">
        <p className="my-4 ">
            {CONTACT.phoneNo}
        </p>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email} </a>
    </div>
    {/* CONTACT ICONS */}
        <div className="m-8 flex items-center justify-center gap-4 text-4xl">
          <a href={CONTACT.linkedin} target="_blank">
            <FaLinkedin />
          </a>
          <a href={CONTACT.github} target="_blank">
            <FaGithub />            
          </a>
          <a href={CONTACT.X} target="_blank">
            <FaSquareXTwitter />
          </a>
          <a href={CONTACT.instagram} target="_blank">
            <FaInstagram />
          </a>

        </div>

        </section>
  )
}

export default Contact