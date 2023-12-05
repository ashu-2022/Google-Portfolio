import React from 'react'
import AboutCard from "./AboutCard"
import Experience from "./Experience"
const index = () => {
  return (
    <main className='w-[90%] mx-auto'>
      <div className='flex justify-between'>
        <section>
          <Experience/>
        </section>
        <aside className='max-w-[400px]'>
            <AboutCard/>
        </aside>
      </div>
    </main>
  )
}

export default index