import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function SendMeMail() {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    if (!form.current) {
      return
    }

    emailjs
      .sendForm(
        'service_jmocyqi',
        'template_781kv9e',
        form.current,
        'yveSA6FqcEOfzesg3'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          required
        />
        <input
          type="email"
          placeholder="exemple@email.com"
          name="user_email"
          required
        />
        <input
          type="Text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea name="message"></textarea>
        <button type="submit">Send Mail</button>{' '}
      </form>
    </div>
  )
}

export default SendMeMail
