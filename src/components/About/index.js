import React from 'react'
import AboutCard from "./AboutCard"
import Experience from "./Experience"
const index = () => {
  return (
    <main className='about-wrapper'>
      <div className='row'>
        <section className='aboutLeft col-8 '>
          <Experience/>
        </section>
        <aside className='aboutRight col-4'>
            <AboutCard/>
        </aside>
      </div>
    </main>
  )
}

export default index