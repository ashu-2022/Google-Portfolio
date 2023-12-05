import React from 'react'
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails"


const index = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact mt-3 mt-md-5 p-3'>
        <h1 className='text-center text-muted mb-3'>Get In Touch</h1>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <ContactForm/>
          </div>
          <div className='col-12 col-md-6'>
            <ContactDetails/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index