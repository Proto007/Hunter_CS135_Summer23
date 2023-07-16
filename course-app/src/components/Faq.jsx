import React from "react"
import expandController from "../expandController"

export const Faq = ({section}) => {
    const { isOpen, toggle } = expandController(false);

    return (
        <div>
            <Question question={section.question} isOpen={isOpen} toggle={toggle}/>
            { isOpen && <Answer answer={ section.answer }/>}
        </div>
    )
}

export const Question = ({ question, isOpen, toggle }) => {
    return (
        <div className="cursor-pointer flex flex-row font-mono border-solid border border-black p-5 text-blue-700 font-bold" onClick={toggle}>
            <div>Q: { question }</div>
            <div className="grow w-max"></div>
            <button className="expand-button">
            <span className="material-symbols-outlined"
                style={{
                    transform: `rotate(${isOpen ? 180 : 0}deg)`,
                    transition: "all 0.25s",
                }}
            >
                expand_more
            </span>
            </button>
        </div>
    )
}

export const Answer = ({ answer }) => {
    return <div className="flex flex-row font-mono border-solid border border-black p-5"><div className="font-bold">A:&nbsp;</div>{ answer }</div>
}

export default Faq;
