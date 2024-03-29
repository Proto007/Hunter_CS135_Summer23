import { useState } from 'react'
import { SlGraduation, SlLink, SlClock } from 'react-icons/sl'
import { ImLab } from 'react-icons/im'
import { LuSchool } from 'react-icons/lu'
import { AiOutlineFundProjectionScreen, AiTwotoneCalendar } from 'react-icons/ai'

export const Info = ( assignments ) => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="w-10/12 py-5">
            <div className="flex lg:flex-row flex-col">
                <button 
                    className={"basis-1/3 font-mono font-semibold flex flex-row justify-center items-center uppercase py-5 rounded-tl-lg shadow-md shadow-black " + ((selected == 1 ? "bg-black text-white" : "bg-white border-2 border-black hover:bg-black hover:text-white"))}
                    onClick={() => {setSelected(1)}}
                    title="Course Information"
                >
                    <SlGraduation/>
                    <div className='pl-5'>Course Information</div>
                </button>
                <button 
                    className={"basis-1/3 font-mono font-semibold flex flex-row justify-center items-center uppercase py-5 rounded-none shadow-md shadow-black " + ((selected == 2 ? "bg-black text-white" : "bg-white border-2 border-black border-x-0 hover:bg-black hover:text-white"))}
                    onClick={()=> {setSelected(2)}}
                    title="Upcoming Deadlines"
                >
                    <SlClock/>
                    <div className='pl-5'>Upcoming Deadlines</div>
                </button>
                <button 
                    className={"basis-1/3 font-mono font-semibold flex flex-row justify-center items-center uppercase py-5 rounded-tr-lg shadow-md shadow-black " + ((selected == 3 ? "bg-black text-white" : "bg-white border-2 border-black hover:bg-black hover:text-white"))}
                    onClick={()=> {setSelected(3)}}
                    title="Useful Links"
                >
                    <SlLink/>
                    <div className='pl-5'>Useful Links</div>
                </button>
            </div>
            {selected == 1 && <CourseInfo/>}
            {selected == 2 && <Deadlines assignments={assignments}/>}
            {selected == 3 && <Links/>}
        </div>
    )
}

export function CourseInfo() {
    return (
        <div className="p-5 border border-black">
            <div className="px-4 sm:px-0">
                <h3 className="text-md font-mono font-semibold leading-7 text-black">CSCI-13500 SUMMER 2023</h3>
                <p className="mt-1  text-sm font-mono leading-4 text-gray-900">
                    This course is an intensive introduction to problem-solving and programming. It is not specifically a course in
                    the C++ programming language. It uses C++ to implement the concepts presented in class since one cannot learn
                    how to program without learning a programming language! The details of C++ will sometimes be a distraction
                    from learning essential concepts, but the only way to learn to program is to program. The main objective of
                    this course is to learn how to analyze problems, develop, and implement their solutions using a programming
                    language.
                </p>
            </div>
            <div className="mt-6 border-t border-gray-200">
                <dl className="divide-y divide-gray-200">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-mono font-semibold leading-6 text-black">Instructor</dt>
                        <dd className="mt-1 text-sm font-mono leading-6 text-gray-900 sm:col-span-2 sm:mt-0">Sadab Hafiz</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-mono font-semibold leading-6 text-black">Location</dt>
                        <dd className="mt-1 text-sm font-mono leading-6 text-gray-900 sm:col-span-2 sm:mt-0">Hunter College North 1001C</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-mono font-semibold leading-6 text-black">Email</dt>
                        <dd className="mt-1 text-sm font-mono leading-6 text-gray-900 sm:col-span-2 sm:mt-0">sadab.hafiz52@myhunter.cuny.edu</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-mono font-semibold leading-6 text-black">Lecture hours</dt>
                        <dd className="mt-1 text-sm font-mono leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                            Monday 11:40 am - 2:00 pm<br/>
                            Wednesday 11:40 am - 2:00 pm
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-mono font-semibold leading-6 text-black">Recitation hours</dt>
                        <dd className="mt-1 text-sm font-mono leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                            Monday 2:30 pm - 4:00 pm<br/>
                            Wednesday 2:30 pm - 4:00 pm
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-mono font-semibold leading-6 text-black">UTA</dt>
                        <dd className="mt-1 text-sm font-mono leading-6 text-gray-900 sm:col-span-2 sm:mt-0">Ryan Vaz</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-mono font-semibold leading-6 text-black">Tutoring hours</dt>
                        <dd className="mt-1 text-sm font-mono leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                            In-Person (HN1001C):<br/>
                            <p className='indent-10'>Monday 4:00 pm - 5:00 pm</p>
                            <p className='indent-10'>Wednesday 4:00 pm - 5:00 pm</p>
                            Online (<a className="text-blue-700 font-bold" target="_blank" href="http://proto007.pythonanywhere.com/">Zoom</a>):<br/>
                            <p className='indent-10'>Friday 2:00 pm - 4:00 pm</p>
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-mono font-semibold leading-6 text-black">Office hours</dt>
                        <dd className="mt-1 text-sm font-mono leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                            All questions will be answered in-person during recitation. Additional office hours are offered as needed via appointment. Please don't email UTAs outside of their work hours. Email me instead if you have any questions that haven't been answered during class. 
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export function Deadlines({ assignments }){
    return (
        <div className='p-5 border border-black'>
            <div className='grid lg:grid-cols-3 gap-4'>
                {
                    assignments.assignments.map((assignment,index) => {
                        return (
                            <div key={index} className='py-5 border-2 border-red-500 font-mono text-red-700 flex flex-col justify-center items-center text-center'>
                                {assignment.type == "lab" && <ImLab size={70}/>}
                                {assignment.type == "classwork/homework" && <LuSchool size={70}/>}
                                {assignment.type == "project" && <AiOutlineFundProjectionScreen size={70}/>}
                                {assignment.type == "exam" && <AiTwotoneCalendar size={70}/>}
                                <br/>
                                {assignment.name}<br/>
                                {assignment.deadline}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export function Links(){
    return (
        <div className='p-5 border font-mono font-semibold text-blue-700 border-black flex flex-col justify-center items-center text-center divide-y divide-gray-100'>
            <a href="https://hunter.cuny.edu/students/registration/academic-calendar/" target="_blank">Academic Calander</a>
            <a href="https://a-nikolaev.github.io/cs136/linux/" target="_blank">Basic Unix Terminal Commands</a>
            <a href="https://okunhardt.github.io/documents/Installing_WSL.pdf" target="_blank">Linux Terminal on Windows</a>
            <a href="https://code.visualstudio.com/docs/cpp/config-mingw" target="_blank">Windows minGW compiler setup with VSCode</a>
            <a href="https://maryash.github.io/135/worked_examples/style_guide.html" target="_blank">Coding Style Guide</a>
            <a href="https://a-nikolaev.github.io/cs136/vim/" target="_blank">Setting up Vim text-editor</a>
        </div>
    )
}

export default Info;
