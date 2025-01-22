import { ABOUT_TEXT } from "../../constants";

const AboutMe = () => {
  return (
  <div className="border-b border-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">About Me</h2>
    <div className="flex flex-wrap">
      <div className="w-full lg:p-8 justify-center items-center">
        <p className="my-2 maxw-xl py-6">
          {ABOUT_TEXT}
        </p>
      </div>
    </div>
  </div>
  )
}

export default AboutMe;