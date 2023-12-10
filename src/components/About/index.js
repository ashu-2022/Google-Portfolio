import React from 'react'
import AboutCard from "./AboutCard"
import Experience from "./Experience"
const index = () => {
  return (
    <main className='mx-auto px-5'>
      <div className='flex flex-col-reverse md:flex-row justify-between gap-5'>
        <section className='mx-3 lg:ms-[150px]'>
          <Experience/>
        </section>
        <aside className='max-w-full mx-auto xs:max-w-[90%] sm:max-w-[75%] md:max-w-[400px]'>
            <AboutCard/>
        </aside>
      </div>
    </main>
  )
}

export default index