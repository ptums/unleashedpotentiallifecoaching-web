import Button from 'components/atoms/Button'
import TextInput from 'components/atoms/TextInput'
import React from 'react'
import styled from 'styled-components'

import useFormHook from '~/hooks/useFormHook'

const Form = () => {
  const [onChangeHandler, onSubmitHandler] = useFormHook('contact')

  return (
    <FormWrapper onChange={onChangeHandler}>
      <TextInput id="full-name" name="fullName" placeHolder="Full name" type="input" />
      <TextInput id="email" name="email" placeHolder="Email" type="input" inputType="email" />
      <TextInput id="subject" name="subject" placeHolder="Subject" type="input" />
      <TextInput id="message" name="message" placeHolder="Message" type="textarea" />
      <Button handleClick={onSubmitHandler} btnPadding="8px 24px">
        Submit
      </Button>
    </FormWrapper>
  )
}

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
