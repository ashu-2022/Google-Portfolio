import React,{useState} from 'react'

const Technical = () => {
    const [skillType, setSkillType] = useState("All");
    const skillHandler = (skill) => {
        setSkillType(skill);
    }

  return (
      <div>
          <h2 className='text-center mt-4 headingTitle'>My Technical Skill's</h2>
          <div className='skill-banner my-2'>
              <button onClick={() => skillHandler('all')}>All</button>
              <button onClick={() => skillHandler('frontend')}>Frontend</button>
              <button onClick={() => skillHandler('backedn')}>Backend</button>
          </div>  
          <p>{skillType}</p>
    </div>
  )
}

export default Technical