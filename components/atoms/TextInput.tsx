import React from 'react'
import styled from 'styled-components'

interface Props {
  id: string
  type: string
  name: string
  placeHolder: string
  inputType?: string
  noSr?: boolean
}

const TextInput = ({ id, type, name, placeHolder, inputType, noSr }: Props) => {
  return (
    <Label htmlFor={id}>
      <span className={!noSr ? 'sr-only' : 'input-label'}>{placeHolder}</span>
      {type === 'input' && (
        <Input
          type={inputType || 'text'}
          name={name}
          id={id}
          placeholder={placeHolder}
          aria-label={id}
        />
      )}
      {type === 'textarea' && (
        <TextArea
          name={name}
          id={id}
          aria-label={id}
          style={{ minHeight: '200px' }}
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

export default TextInput
