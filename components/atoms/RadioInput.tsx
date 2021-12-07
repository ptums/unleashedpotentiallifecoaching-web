import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  label: string
  options: string[]
}

const RadioInput = ({ title, label, options }: Props) => {
  return (
    <RadioWrapper>
      <p>{title}</p>
      {options.map((option) => (
        <Label htmlFor={option} key={option}>
          <Input aria-label={option} value={option} name={label} id={label} type="radio" />
          <span>{option}</span>
        </Label>
      ))}
    </RadioWrapper>
  )
}

const RadioWrapper = styled.div`
  margin: 24px;
  p {
    font-weight: bold;
    display: block;
    ${(props) => props.theme.fonts.xl};
    color: ${(props) => props.theme.colors.standardGreen};
    margin-bottom: 16px;
  }
`
const Label = styled.label`
  display: block;
  margin: 24px 0;

  span {
    margin-left: 8px;
    ${(props) => props.theme.fonts.lg};
    color: ${(props) => props.theme.colors.standardGreen};
  }
`

const Input = styled.input`
  // min-width: 500px;
  // border-radius: 4px;
  // border: 0;
  // outline: 0;
  // background-color: rgba(238, 232, 212, 0.6);
  // ${(props) => props.theme.fonts.xl};
  // padding: 10px 16px;
  // font-weight: bold;
  // color: ${(props) => props.theme.colors.standardGreen};
`

export default RadioInput
