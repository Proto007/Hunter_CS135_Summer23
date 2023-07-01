import Navbar from './Navbar'
import Schedule from './Schedule'
import Faq from './Faq'
import Info from './Info'
import { faqData } from '../faqData'
import { deadlinesData } from '../deadlinesData'
import { homeworksData } from '../homeworksData'
import { useState } from 'react'

export default function Homepage(){
    const [before, setBefore] = useState(true);
    return (
        <div>
            <Navbar homeworks={homeworksData}/>
            <div className=" flex flex-col justify-center items-center">
                <Info assignments={ deadlinesData }/>
                <div className="relative border-solid border border-black mt-5 p-5 w-10/12 text-xl font-mono text-center font-bold">
                    <p>Class Schedule</p>
                    <label className='lg:absolute lg:top-1/2 lg:right-5 transform lg-translate-x-1/2 lg:-translate-y-1/2'>
                        {!before && <p className='inline'>Before</p>}
                        {before && <p className='inline'>After</p>}
                        <input id="midterm" type="checkbox" className="ml-2 checked:bg-black bg-white ring-black focus:ring-black focus:checked:bg-black color-black" onChange={() => setBefore(!before)}/>
                    </label>
                </div>
                
                <Schedule midterm={before}/>


                <div className="border-solid border-2 border-black bg-black w-10/12 mt-10 p-5 text-xl text-white font-mono font-bold">Frequently Asked Questions</div>
                <div className="w-10/12">
                {faqData.map((section, index) => (
                    <Faq key={index} section={section}/>
                ))}
                </div>
            </div>
            <footer className='bg-gray-700 text-white text-center w-full font-mono p-5 mt-10'>
                This website was made using  and <a className="text-blue-400" href="https://react.dev/">ReactJS</a> and <a className="text-blue-400" href='https://tailwindcss.com/'>Tailwind-CSS</a>.
            </footer>
        </div>
    )
}
