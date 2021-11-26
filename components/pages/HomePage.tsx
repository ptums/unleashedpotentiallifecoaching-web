import CoachesBanner from 'components/organisms/home/CoachesBanner'
import FeaturedBlock from 'components/organisms/home/FeaturedBlock'
import HomeBanner from 'components/organisms/home/HomeBanner'
import WidgetsContainer from 'components/organisms/home/WidgetsContainer'
import FooterReview from 'components/shared/FooterReview'
import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import React from 'react'
import { Coach } from 'types/Coach'
import { Banner, BlockWidget, FeaturdContent } from 'types/Home'
import { Review } from 'types/Review'
import { Seo } from 'types/SEO'

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
  featuredReview,
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
