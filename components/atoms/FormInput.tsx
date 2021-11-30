import React from 'react'
import styled from 'styled-components'

interface Props {
  label: string
  handleOnChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  value: string
  placeHolder?: string
  type: string
}

const FormInput: React.FC<Props> = ({ label, handleOnChange, value, placeHolder, type }: Props) => {
  return (
    <Label htmlFor={label}>
      <span className="sr-only">{placeHolder}</span>
      {type === 'input' && (
        <Input
          onChange={handleOnChange}
          value={value}
          name={label}
          id={label}
          type="text"
          placeholder={placeHolder}
        />
      )}
      {type === 'textarea' && (
        <TextArea
          onChange={handleOnChange}
          value={value}
          name={label}
          id={label}
          placeholder={placeHolder}
        ></TextArea>
      )}
    </Label>
  )
}

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

  .input-label {
    font-weight: bold;
    display: block;
    ${(props) => props.theme.fonts.xl};
    color: ${(props) => props.theme.colors.standardGreen};
    margin-bottom: 16px;
  }

`

const Input = styled.input`
  min-width: 500px;
  border-radius: 4px;
  border: 0;
  outline: 0;
  background-color: rgba(238, 232, 212, 0.6);
  ${(props) => props.theme.fonts.xl};
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
  ${(props) => props.theme.fonts.xl};
  padding: 10px 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.standardGreen};
  font-family: ${(props) => props.theme.fonts.lato};
  min-height: 300px;
`

export default FormInput
