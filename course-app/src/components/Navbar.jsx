export default function Navbar(){
    return(
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a className="text-2xl font-bold font-serif leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white" href="/Hunter_CS135_Summer23/">
                        Software Analysis and Design I
                    </a>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-sm uppercase font-bold font-serif leading-snug text-white hover:opacity-75" href="http://proto007.pythonanywhere.com/" target="_blank">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-sm uppercase font-bold font-serif leading-snug text-white hover:opacity-75" href="/Hunter_CS135_Summer23/CSCI135_Syllabus.pdf" target="_blank">
                                Syllabus
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-sm uppercase font-bold font-serif leading-snug text-white hover:opacity-75" href="https://www.gradescope.com/courses/545129" target="_blank">
                                Gradescope
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
