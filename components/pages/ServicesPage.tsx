import ServiceCard from 'components/molecules/ServiceCard'
import FooterReview from 'components/shared/FooterReview'
import PageBanner from 'components/shared/PageBanner'
import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import FadeInContainer from 'layouts/FadeInContainer'
import PopModalContainer from 'layouts/PopModalContainer'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import { Coach } from 'types/Coach'
import { Review } from 'types/Review'
import { Seo } from 'types/SEO'

interface Props {
  seo: Seo
  page_blocks: {
    content: RichTextBlock[]
    title: RichTextBlock[]
  }[]
  featuredReview: Review
  coaches: Coach[]
}

const CoachPage = ({ page_blocks, seo, coaches, featuredReview }: Props) => {
  return (
    <PopModalContainer>
      <FadeInContainer>
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
          {coaches.map(({ name, image, calendarUrl }) => (
            <ServiceCard name={name} calendarUrl={calendarUrl} image={image} key={name} />
          ))}
        </Container>
        <FooterReview {...featuredReview} />
      </FadeInContainer>
    </PopModalContainer>
  )
}

const ContentWrapper = styled.div`
  ${(props) => props.theme.fonts.lg};
  color: ${(props) => props.theme.colors.standardGreen};
  margin: 64px 0;

  div {
    margin-bottom: 40px;
  }
`

export default CoachPage
