import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import React, { useState } from 'react'
import styled from 'styled-components'

const Form = () => {
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      fullName,
      email,
      subject,
      message,
    }

    console.log(data)
  }

  return (
    <FormWrapper>
      <FormInput
        label="fullName"
        handleOnChange={(e) => setFullName(e.target.value)}
        value={fullName}
        placeHolder="Full name"
        type="input"
      />
      <FormInput
        label="email"
        handleOnChange={(e) => setEmail(e.target.value)}
        value={email}
        placeHolder="Email"
        type="input"
      />
      <FormInput
        label="subject"
        handleOnChange={(e) => setSubject(e.target.value)}
        value={subject}
        placeHolder="Subject"
        type="input"
      />
      <FormInput
        label="message"
        handleOnChange={(e) => {
          setMessage(e.target.value)
        }}
        value={message}
        placeHolder="Message"
        type="textarea"
      />
      <Button btnPadding="8px 24px" handleClick={handleSubmit}>
        Send
      </Button>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  margin-top: 48px;
`

export default Form
