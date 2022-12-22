import React from 'react'
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails"


const index = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact mt-3 mt-md-5 p-3'>
        <h1 className='text-center text-muted'>Contact Me</h1>
        <div className='row'>
          <div className='col-12 col-sm-7'>
            <ContactForm/>
          </div>
          <div className='col-12 col-sm-5'>
            <ContactDetails/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index