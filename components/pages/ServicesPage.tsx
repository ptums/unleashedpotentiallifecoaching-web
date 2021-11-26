import PageBanner from 'components/shared/PageBanner'
import Container from 'layouts/Container'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import { TServices } from 'types/Services'

import SiteHead from '../shared/SiteHead'

const CoachPage: React.FC<TServices> = ({ page_blocks, seo }: TServices) => {
  const handleBooking = (e) => {
    e.preventDefault()

    console.log('well get there!')
  }

  return (
    <>
      <SiteHead {...seo} />
      <PageBanner title="Services" />
      <Container>
        <ContentWrapper>
          {page_blocks.map((block) => (
            <div key={block.title[0].text}>
              <RichText render={block.title} />
              <RichText render={block.content} />
            </div>
          ))}
        </ContentWrapper>
      </Container>
    </>
  )
}

const ContentWrapper = styled.div`
  ${(props) => props.theme.fonts.xxxxl};
  color: ${(props) => props.theme.colors.standardGreen};
  margin: 64px 0;

  div {
    margin-bottom: 64px;
  }
`

export default CoachPage
