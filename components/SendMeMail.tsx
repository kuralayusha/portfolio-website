import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import closeLight from '@/public/icons/close-light.svg'
import closeDark from '@/public/icons/close-dark.svg'
import Image from 'next/image'

type SendMeMailProps = {
  setShowMail: React.Dispatch<React.SetStateAction<boolean>>
  darkMode: boolean
}

function SendMeMail({ setShowMail, darkMode }: SendMeMailProps) {
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
          // console.log(result.text)
        },
        (error) => {
          // console.log(error.text)
        }
      )
    e.target.reset()
  }

  function handleGoBack() {
    setShowMail(false)
  }
  return (
    <div className="send--email--container">
      <button className="go--back" onClick={handleGoBack}>
        <Image
          className="close--icon"
          src={darkMode ? closeDark : closeLight}
          alt="close"
        />
      </button>
      <form ref={form} onSubmit={sendEmail}>
        <div className="inputs--area">
          <input
            className="mail--inputs"
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
            autoComplete="off"
          />
          <input
            className="mail--inputs"
            type="email"
            placeholder="exemple@email.com"
            name="user_email"
            required
            autoComplete="off"
          />
          <input
            className="mail--inputs"
            type="Text"
            placeholder="Subject"
            name="subject"
            required
            autoComplete="off"
          />
          <textarea
            className="mail--inputs message"
            placeholder="Your message"
            name="message"
            aria-setsize={50}
            required
            autoComplete="off"
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default SendMeMail
