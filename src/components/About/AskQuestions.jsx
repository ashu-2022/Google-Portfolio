import React, { useState } from 'react'
import { upArrow, downArrow, threeDots} from "../../assets"

const question_answer_list = [
    {
        id: 1,
        ques: "What skills does Ashutosh have?",
        ans: "React.js, Angular, Next.js, Node.js, Flask, Djnago, FastAPI, MondoDB, Firebase, Python, C++, JavaScript, TypeScript, Bash Scripting, HTML, CSS"
    },
    {
        id: 2,
        ques: "Is Ashutosh frontend or backend developer?",
        ans: "Ashutosh is a fullStack web developer, experienced in developing apllications."
    },
    {
        id: 3,
        ques: "How much experience does Ashutosh have?",
        ans: "Ashutosh has 2 Years +  of experience in software industry."
    },
]

const AskQuestions = () => {
    return (
        <div className='mt-3'>
            <h4 className='text-xl sm:text-2xl font-semibold'>People also ask <img src={threeDots} alt="Triple Dots" className='inline w-6' /></h4>
            <hr className='mt-3'/>
            {
                question_answer_list.map((item) => <QuestionAns key={item.id} ques={item.ques} ans={item.ans} />)
            }
        </div>
    )
}

export default AskQuestions


export const QuestionAns = ({ ques, ans }) => {
    const [ansToggle, setAnsToggle] = useState(false)
    const toggleHandler = () => {
        setAnsToggle((prev) => !prev)
    }
    return (
        <>
            <div onClick={toggleHandler} className='flex my-3 cursor-pointer'>
                <p className='font-bold text-md'>{ques}</p>
                <img src={ansToggle ? upArrow : downArrow} alt='toggle text' className='inline w-6' />
            </div>
            <p className={ansToggle?'block pb-3':'hidden'}>{ans}</p>
            <hr />
        </>
    )
}