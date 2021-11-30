import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import React, { useState } from 'react'
import styled from 'styled-components'

import RadioInput from '~/components/atoms/RadioInput'

const SERVICES_OPTIONS = ['Excellent', 'Good', 'Disappointing']
const RECOMMEND_OPTIONS = ['Yes', 'No']

const ReviewForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [rating, setRating] = useState('')
  const [explanation, setExplantion] = useState('')
  const [improvements, setImprovements] = useState('')
  const [recommend, setRecommend] = useState('Yes')
  const [comments, setComments] = useState('Yes')

  const handleSubmit = () => {
    const data = {
      fullName,
      email,
      phone,
      rating,
      explanation,
      improvements,
      recommend,
      comments,
    }

    console.log(data)
  }

  return (
    <Form>
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
        label="phone"
        handleOnChange={(e) => setPhone(e.target.value)}
        value={phone}
        placeHolder="Phone"
        type="input"
      />
      <RadioInput
        label="services"
        handleOnChange={(e) => setRating(e.target.value)}
        title="Rate Our Services"
        options={SERVICES_OPTIONS}
      />
      <FormInput
        label="explanation"
        handleOnChange={(e) => setExplantion(e.target.value)}
        value={explanation}
        placeHolder="What did you like best?"
        type="textarea"
      />
      <FormInput
        label="improvements"
        handleOnChange={(e) => setImprovements(e.target.value)}
        value={improvements}
        placeHolder="How can we improve?"
        type="textarea"
      />
      <RadioInput
        label="recommend"
        handleOnChange={(e) => setRecommend(e.target.value)}
        title="Would you recommend us to your friends?"
        options={RECOMMEND_OPTIONS}
      />

      <FormInput
        label="comments"
        handleOnChange={(e) => setComments(e.target.value)}
        value={comments}
        placeHolder="Anything else you would like to add?"
        type="textarea"
      />
      <Button btnPadding="16px 32px" handleClick={handleSubmit}>
        Submit Review
      </Button>
    </Form>
  )
}

const Form = styled.form`
  margin-bottom: 32px;
`

export default ReviewForm
