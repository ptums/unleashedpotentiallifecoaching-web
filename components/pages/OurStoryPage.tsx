import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import { Review } from 'types/Review'
import { Seo } from 'types/SEO'

import FooterReview from '../shared/FooterReview'
import PageBanner from '../shared/PageBanner'

interface Props {
  seo: Seo
  title: string
  pageContent: RichTextBlock[]
  featuredReview: Review
}

const OurStoryPage = ({ seo, title, pageContent, featuredReview }: Props) => {
  return (
    <>
      <SiteHead {...seo} />
      <PageBanner title={title} />
      <main>
        <Container>
          <ContentWrapper>
            <RichText render={pageContent} />
          </ContentWrapper>
        </Container>
      </main>
      <FooterReview {...featuredReview} />
    </>
  )
}

const ContentWrapper = styled.div`
  ${(props) => props.theme.fonts.xl};
  color: ${(props) => props.theme.colors.darkGreen};
  margin-bottom: 64px;

  h2 {
    text-align: center;
    ${(props) => props.theme.fonts.xxxxl};
  }

  .block-img {
    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      float: right;
      margin-top: 8px;
      margin-left: 24px;
    }
  }
`
export default OurStoryPage
