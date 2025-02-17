import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { RiNodejsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { RiJavaFill } from "react-icons/ri";

const Technologies = () => {
  return  <div className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-4xl">
      Technologies
    </h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiJavaFill className="text-7xl text-white"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiNodejsFill className="text-7xl text-green-400"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiTailwindCssFill className="text-7xl text-cyan-400"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb className="text-7xl text-green-400"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaHtml5 className="text-7xl text-red-500"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaGithubSquare className="text-7xl text-sky-700"/>
      </div>
    </div>
  </div>

}

export default Technologies