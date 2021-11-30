import CoachesBanner from 'components/organisms/home/CoachesBanner'
import FeaturedBlock from 'components/organisms/home/FeaturedBlock'
import HomeBanner from 'components/organisms/home/HomeBanner'
import WidgetsContainer from 'components/organisms/home/WidgetsContainer'
import FooterReview from 'components/shared/FooterReview'
import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import React from 'react'
import styled from 'styled-components'
import { Coach } from 'types/Coach'
import { Banner, BlockWidget, FeaturedContent } from 'types/Home'
import { Review } from 'types/Review'
import { Seo } from 'types/SEO'

interface Props {
  banner: Banner
  featuredContent: FeaturedContent
  blockWidgets: BlockWidget[]
  seo: Seo
  coaches: Coach[]
  featuredReview: Review
}

const HomePage = ({
  banner,
  featuredContent,
  blockWidgets,
  seo,
  coaches,
  featuredReview,
}: Props) => {
  return (
    <>
      <SiteHead {...seo} />
      <Page>
        <HomeBanner {...banner} />
        <Container>
          <FeaturedBlock {...featuredContent} />
        </Container>
        <CoachesBanner coaches={coaches} />
        <Container>
          <WidgetsContainer widgets={blockWidgets} />
        </Container>
        <FooterReview {...featuredReview} />
      </Page>
    </>
  )
}

const Page = styled.main`
  position: relative;
  top: -8px;
`
export default HomePage
