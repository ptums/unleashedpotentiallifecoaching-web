import Button from 'components/atoms/Button'
import RadioInput from 'components/atoms/RadioInput'
import TextInput from 'components/atoms/TextInput'
import useFormHook from 'hooks/useFormHook'
import React from 'react'
import styled from 'styled-components'

interface Form {
  fullName: string
  email: string
  phone: string
  rating: string
  explanation: string
  improvements: string
  recommend: string
  comments: string
}

const SERVICES_OPTIONS = ['Excellent', 'Good', 'Disappointing']
const RECOMMEND_OPTIONS = ['Yes', 'No']

const ReviewForm = () => {
  const [onChangeHandler, onSubmitHandler] = useFormHook('review')

  return (
    <Form onChange={onChangeHandler}>
      <TextInput id="review-full-name" name="fullName" placeHolder="Full name" type="input" />
      <TextInput
        id="review-email"
        name="email"
        placeHolder="Email"
        type="input"
        inputType="email"
      />
      <TextInput id="review-phone" name="phone" placeHolder="Phone" type="phone" />
      <RadioInput label="ratings" title="Rate Our Services" options={SERVICES_OPTIONS} />
      <TextInput
        id="explanation"
        name="explanation"
        placeHolder="What did you like best?"
        type="textarea"
      />
      <TextInput
        id="improvements"
        name="improvements"
        placeHolder="How can we improve?"
        type="textarea"
      />
      <RadioInput
        label="recommend"
        title="Would you recommend us to your friends?"
        options={RECOMMEND_OPTIONS}
      />
      <TextInput
        id="comments"
        name="comments"
        placeHolder="Anything else you would like to add?"
        type="textarea"
      />

      <ButtonPostion>
        <Button btnPadding="16px 32px" handleClick={onSubmitHandler}>
          Submit Review
        </Button>
      </ButtonPostion>
    </Form>
  )
}

const ButtonPostion = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 0 32px;
  }
`
const Form = styled.form`
  margin-bottom: 32px;
`

export default ReviewForm
