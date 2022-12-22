import React, {useState} from 'react'
import {sendIcon} from "../../assets"

const ContactForm = () => {
    const blankForm = {
        name: "",
        email: "",
        subject: "",
        message:""
    }
    const [formData, setFormData] = useState(blankForm)

    const inputHandleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }


    const formSubmitHandler = (e) => {
        e.preventDefault()
        setFormData(blankForm)
    }

  return (
      <div className='contact-form p-4'>
            <form onSubmit={formSubmitHandler}>
              <div className='form-group'>
                  <input
                      className='form-control'
                      type="text"
                      name="name"
                      placeholder='Name *'
                      required
                      value={formData.name}
                      onChange={inputHandleChange}
                  />
              </div>
              <div className='form-group'>
                  <input
                      className='form-control'
                      type="text"
                      name="email"
                      placeholder='Email *'
                      required
                      value={formData.email}
                      onChange={inputHandleChange}
                  />
              </div>
              <div className='form-group'>
                  <input
                      className='form-control'
                      type="text"
                      name="subject"
                      placeholder='Subject *'
                      required
                      value={formData.subject}
                      onChange={inputHandleChange}
                  />
              </div>
              <textarea
                  className='form-control'
                  placeholder='Message...'
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={inputHandleChange}
              />
              <div className='mt-4'>
                  <button type='submit'>
                      Message me
                      <span>
                          <img className='ms-2' src={sendIcon} alt="send message" width="26px"/>
                      </span>
                  </button>
            </div>

            </form>
    </div>
  )
}

export default ContactForm