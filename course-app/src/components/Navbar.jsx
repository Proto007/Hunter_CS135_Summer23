import { useState } from "react"
import Homeworks from "./Homeworks"
import Projects from "./Projects"

export default function Navbar(homeworks){
    const [showNav, toggle] = useState(false);

    return(
        <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 sticky top-0 z-50">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a className="sm:text-md md:text-2xl font-bold font-serif leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white" href="/Hunter_CS135_Summer23/">
                        Software Analysis and Design I
                    </a>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" 
                            type="button" 
                            onClick={() => toggle(!showNav)}
                    >
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                </div>
                <div className="flex-grow"></div>
                <div className={"lg:flex justify-center "+(showNav ? "flex" : "hidden")}>
                    <ul className="flex flex-col justify-center items-center lg:flex-row list-none ml-auto w-full">
                        <li className="nav-item border-b-2 lg:border-0">
                            <Projects/>
                        </li>
                        <li className="nav-item border-b-2 lg:border-0">
                            <a className="px-3 py-2 flex items-center text-sm uppercase font-bold font-serif leading-snug text-white hover:opacity-75" href="/Hunter_CS135_Summer23/CSCI135_Syllabus.pdf" target="_blank">
                                Syllabus
                            </a>
                        </li>
                        <li className="nav-item border-b-2 lg:border-0">
                            <a className="px-3 py-2 flex items-center text-sm uppercase font-bold font-serif leading-snug text-white hover:opacity-75" href="https://www.gradescope.com/courses/545354" target="_blank">
                                Gradescope
                            </a>
                        </li>
                        <li className="nav-item border-b-2 lg:border-0 pl-0 pr-3">
                            <Homeworks homeworks={ homeworks.homeworks }/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
