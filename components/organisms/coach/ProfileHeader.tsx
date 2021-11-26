import Button from 'components/atoms/Button'
import ImageWrapper from 'components/atoms/ImageWrapper'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import React, { MouseEvent } from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  image: {
    src: string
    width: string | number
    height: string | number
    alt: string
  }
  welcomeMessage?: RichTextBlock[]
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const ProfileHeader: React.FC<Props> = ({ name, image, welcomeMessage, handleClick }: Props) => {
  const firstName = name.split(' ')[0]

  return (
    <Container>
      <ImageWrapper {...image} />
      <Details>
        <h1>Hi, I&apos;m {firstName}</h1>
        <RichText render={welcomeMessage} />
        <BtnWrapper>
          <Button btnPadding="16px 64px" handleClick={handleClick}>
            Book
          </Button>
        </BtnWrapper>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: flex-start;
    margin: 32px 0;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 0 80px;
    max-width: 450px;
  }

  h1 {
    color: ${(props) => props.theme.colors.standardGreen};
    ${(props) => props.theme.fonts.xxxxxxxl};
    margin-top: 0;
  }

  p {
    color: ${(props) => props.theme.colors.standardGreen};
    ${(props) => props.theme.fonts.xxxxl};
    margin-top: 0;
  }
`

const BtnWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-left: -24px;
  }
`

export default ProfileHeader
