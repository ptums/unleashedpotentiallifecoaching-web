import { useForm, ValidationError } from '@formspree/react'
import Button from 'components/atoms/Button'
import React from 'react'
import styled from 'styled-components'

const Form = () => {
  const [state, handleSubmit] = useForm('xayvwvek')
  if (state.succeeded) {
    return (
      <p>
        Thank you for contacting Unleashed Potential Life Coaching! We&apos;ll get back to you soon
        😊
      </p>
    )
  }

  return (
    <FormWrapper>
      <Label htmlFor="fullName">
        <span className="sr-only">Full Name</span>
        <Input id="fullName" type="text" name="fullName" placeholder="Full name" />
        <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
      </Label>
      <Label htmlFor="email">
        <span className="sr-only">Email Address</span>
        <Input id="email" type="email" name="email" placeholder="Email address" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Label>
      <Label htmlFor="subject">
        <span className="sr-only">Subject</span>
        <Input id="subject" type="text" name="subject" placeholder="Subject" />
        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
      </Label>
      <Label htmlFor="message">
        <TextArea id="message" name="message" placeholder="Message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </Label>

      <Button handleClick={handleSubmit} btnPadding="8px 24px">
        Submit
      </Button>
    </FormWrapper>
  )
}

const Label = styled.label`
  display: block;
  margin: 16px 0;
  width: 95%;
  .sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .input-label {
    font-weight: bold;
    display: block;
    ${(props) => props.theme.fonts.xl};
    color: ${(props) => props.theme.colors.standardGreen};
    margin-bottom: 16px;
  }
`
const Input = styled.input`
  border-radius: 4px;
  border: 0;
  outline: 0;
  min-width: 100%;
  background-color: rgba(238, 232, 212, 0.6);
  ${(props) => props.theme.fonts.xl};
  padding: 10px 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.standardGreen};
`
const TextArea = styled.textarea`
  border-radius: 4px;
  border: 0;
  outline: 0;
  min-width: 100%;
  background-color: rgba(238, 232, 212, 0.6);
  ${(props) => props.theme.fonts.xl};
  padding: 10px 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.standardGreen};
  font-family: ${(props) => props.theme.fonts.lato};
  min-height: 300px;
`
const FormWrapper = styled.form`
  margin-top: 48px;
  margin: 16px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: baseline;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    max-width: 500px;
  }
`

export default Form
