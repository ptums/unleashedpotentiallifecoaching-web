import React, { useState } from 'react'
import styled from 'styled-components'

const Form = () => {
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (e) => {e
    e.preventDefault()
    
    const data = {
      fullName,
      email,
      subject,
      message,
    }

    console.log(data);
  }

  return (
    <FormWrapper>
      <Label htmlFor="fullName">
        <span className="sr-only">Full Name</span>
        <Input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          name="fullName"
          id="fullName"
          type="text"
          placeholder="Full name"
        />
      </Label>
      <Label htmlFor="email">
        <span className="sr-only">Email</span>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          id="email"
          type="email"
          placeholder="Email"
        />
      </Label>
      <Label htmlFor="subject">
        <span className="sr-only">Subject</span>
        <Input
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          name="subject"
          id="subject"
          type="text"
          placeholder="Subject"
        />
      </Label>
      <Label htmlFor="Message">
        <span className="sr-only">Message</span>
        <TextArea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          id="message"
          placeholder="Message"
        ></TextArea>
      </Label>
      <Button onClick={(e) => handleSubmit(e)}>Send</Button>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  margin-top: 48px;
`

const Label = styled.label`
   display: block;
   margin: 24px; 0;
  .sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`

const Input = styled.input`
  min-width: 500px;
  border-radius: 4px;
  border: 0;
  outline: 0;
  background-color: rgba(238, 232, 212, 0.6);
  ${(props) => props.theme.fonts.xxxxxl};
  padding: 10px 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.standardGreen};
`

const TextArea = styled.textarea`
  min-width: 500px;
  border-radius: 4px;
  border: 0;
  outline: 0;
  background-color: rgba(238, 232, 212, 0.6);
  ${(props) => props.theme.fonts.xxxxxl};
  padding: 10px 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.standardGreen};
  font-family: ${(props) => props.theme.fonts.lato};
  min-height: 300px;
`

const Button = styled.button`
  margin: 8px 24px;
  border: 0;
  outline: 0;
  padding: 8px 24px;
  ${(props) => props.theme.fonts.xxxxxl};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.darkGreen};
  transition: all 0.2s;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.standardGreen};
    cursor: pointer;
    box-shadow: ${(props) => props.theme.colors.shadowLight};
  }
`

export default Form
