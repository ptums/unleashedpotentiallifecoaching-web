import React from 'react'
import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import HomeBanner from 'components/organisms/home/HomeBanner'
import FeaturedBlock from 'components/organisms/home/FeaturedBlock'
import CoachesBanner from 'components/organisms/home/CoachesBanner'
import WidgetsContainer from 'components/organisms/home/WidgetsContainer'
import { Banner, FeaturdContent, BlockWidget } from 'types/Home'
import { Seo } from 'types/SEO'
import { Coach } from 'types/Coach'
import { Review } from 'types/Review'
import FooterReview from 'components/shared/FooterReview'

interface Props {
  banner: Banner
  featuredContent: FeaturdContent
  blockWidgets: BlockWidget[]
  seo: Seo
  coaches: Coach[]
  featuredReview: Review
}

const HomePage: React.FC<Props> = ({
  banner,
  featuredContent,
  blockWidgets,
  seo,
  coaches,
  featuredReview
}: Props) => {

  return (
    <>
      <SiteHead {...seo} />
      <main>
        <HomeBanner {...banner} />
        <Container>
          <FeaturedBlock {...featuredContent} />
        </Container>
        <CoachesBanner coaches={coaches} />
        <Container>
          <WidgetsContainer widgets={blockWidgets} />
        </Container>
        <FooterReview {...featuredReview} />
      </main>
    </>
  )
}
export default HomePage
