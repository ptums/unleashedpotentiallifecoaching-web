import Button from 'components/atoms/Button'
import RadioInput from 'components/atoms/RadioInput'
import TextInput from 'components/atoms/TextInput'
import { CoachesContext } from 'contexts/CoachesContext'
import useFormHook from 'hooks/useFormHook'
import React, { useContext, useEffect, useState } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import styled from 'styled-components'
import Modal from 'styled-react-modal'
import { Coach } from 'types/Coach'

interface Props {
  isOpen: boolean
  beforeClose: () => void
  afterOpen: () => void
  toggleModal: () => void
  opacity: number
}

const HAVE_BEEN_COACHED = ['Yes', 'No']

const BookTimePopup = ({ isOpen, beforeClose, afterOpen, toggleModal, opacity }: Props) => {
  const [onChangeHandler, onSubmitHandler] = useFormHook('review')
  const [coachOptions, setCoachOptions] = useState<string[]>([])
  const { coaches } = useContext(CoachesContext)

  useEffect(() => {
    if (coachOptions.length <= 0 && coaches) {
      setCoachOptions(coaches.map(({ name }) => name))
    }
  }, [coaches])

  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      opacity={opacity}
      backgroundProps={{ opacity }}
    >
      <CloseButton onClick={toggleModal}>
        <HiOutlineX />
      </CloseButton>
      <Form onChange={onChangeHandler}>
        <TextInput id="book-time-full-name" name="fullName" placeHolder="Full name" type="input" />
        <TextInput
          id="book-time-email"
          name="email"
          placeHolder="Email"
          type="input"
          inputType="email"
        />
        <TextInput
          id="book-time-phone"
          name="phone"
          placeHolder="Phone"
          type="input"
          inputType="email"
        />
        <RadioInput
          label="previous-coached"
          title="Have you been coached before?"
          options={HAVE_BEEN_COACHED}
        />
        <RadioInput label="coaches" title="Select a coach" options={coachOptions} />
        <TextInput
          id="date"
          name="date"
          placeHolder="Pick a date"
          type="input"
          inputType="date"
          noSr={true}
        />
        <TextInput
          id="time"
          name="time"
          placeHolder="Select time"
          type="input"
          inputType="time"
          noSr={true}
        />
        <TextInput
          id="brief-message"
          name="briefMessage"
          placeHolder="Brief Message"
          type="input"
        />
        <ButtonPosition>
          <Button btnPadding="8px 24px" handleClick={onSubmitHandler}>
            Book Time
          </Button>
        </ButtonPosition>
      </Form>
    </StyledModal>
  )
}

const ButtonPosition = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 32px;
  }
`

const CloseButton = styled.button`
  outline: 0;
  border: 0;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  top: 8px;
  float: right;
  margin-right: 8px;
  svg {
    font-size: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`
const StyledModal = Modal.styled`
  min-width: 92rem;
  min-height: 92rem;  
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`

const Form = styled.form`
  max-width: 100%;
  margin: 16px;
`

export default BookTimePopup
