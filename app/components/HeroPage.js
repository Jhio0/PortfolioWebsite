/* This example requires Tailwind CSS v2.0+ */
import Skills from "./Skills"
import { FiBatteryCharging, FiWifi } from 'react-icons/fi';
import Joke from "./joke";

export default function Example() {
  return (
    <div className="ms-3 relative bg-gray-100">
      <main>
        <div className="mx-auto max-w-7xl w-full pt-10 pb-20 text-center">
          <div className="px-4 px-10">
            <h4 className="tracking-tight font-extrabold text-gray-900 text-5xl">
              <span className="block text-indigo-600">About Me:</span>
            </h4>
            <HeaderBar/>
            <h3 className="mt-3 max-w-md mx-auto text-lg text-black-1000 text-xl">
              Recent graduate from the Southern Alberta Institute of Technology (SAIT) 
              with a degree in Software Development, equipped with robust problem-solving 
              abilities, a client-centric approach, and an insatiable thirst for knowledge. 
              Driven by the desire to excel in the field, I am enthusiastically seeking 
              opportunities to immerse myself in real-world projects, honing my skills, and 
              evolving into a proficient software developer.
            </h3>
            <Joke url={'https://icanhazdadjoke.com/slack'}/>
          </div>
        </div>
      </main>
    </div>
  )
}
const HeaderBar = () => {
  return (
    <>
      <div className=""></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi size={20} className="text-neutral-600" />
        <FiBatteryCharging  size={20} className="text-neutral-600" />
      </div>
    </>
  );
};
