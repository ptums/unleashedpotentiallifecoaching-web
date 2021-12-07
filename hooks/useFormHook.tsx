import React, { useState } from 'react'
import { ContactForm } from 'types/Contact'
import { ReviewForm } from 'types/Review'
import { contactTemplate, reviewTemplate } from 'utils/email/templates'

type Form = ReviewForm & ContactForm

interface Email {
  subject: string
  body: string
}
const useFormHook = (formName) => {
  const [form, setForm] = useState<unknown | Form>()
  const [emailMessage, setEmailMessage] = useState<unknown | Email>()

  const onChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const event = e.target as HTMLFormElement
    const value = event.value
    const name = event.name
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const details = form as Form

    if (formName === 'review') {
      const rTemplate = reviewTemplate(details)
      setEmailMessage(rTemplate)
    }

    if (formName === 'contact') {
      const cTemplate = contactTemplate(details)
      setEmailMessage(cTemplate)
    }

    // const request = await sendClientEmail({ subject, body })

    // if (request.status === 200) {
    //   message = successEmailMessage('career')

    //   setResponse(message)
    //   setConfirm(true)
    // }

    // if (request.status === 500) {
    //   message = FAILED_EMAIL_MESSAGE

    //   setResponse(message)
    //   setConfirm(true)
    // }
  }

  return [onChangeHandler, onSubmitHandler] as const
}

export default useFormHook
