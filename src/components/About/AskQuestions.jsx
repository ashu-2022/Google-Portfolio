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
        ans: "Ashutosh has 1 Year 4 Months+  of experience in software industry."
    },
]

const AskQuestions = () => {
    return (
        <div className='mt-3'>
            <h4>People also ask <img src={ threeDots} alt="Triple Dots" height="20px" /></h4>
            <div className='horizontal'></div>
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
            <div onClick={toggleHandler} className='flex-horz quest-item'>
                <p><strong>{ques}</strong></p>
                <span ><img src={ansToggle ? upArrow : downArrow} alt='toggle text' /></span>
            </div>
            <p className={ansToggle?'d-block pt-2 ansShow':'d-none'}>{ans}</p>
            <hr />
        </>
    )
}