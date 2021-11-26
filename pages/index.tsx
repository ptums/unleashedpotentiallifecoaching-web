import HomePage from 'components/pages/HomePage'
import { GetStaticProps } from 'next'
import React from 'react'
import { Coach } from 'types/Coach'
import { Banner, BlockWidget, FeaturdContent } from 'types/Home'
import { Review } from 'types/Review'
import { Seo } from 'types/SEO'
import { coachesQuery, homePageQuery, reviewsQuery } from 'utils/api'

interface Props {
  banner: Banner
  featuredContent: FeaturdContent
  blockWidgets: BlockWidget[]
  seo: Seo
  coaches: Coach[]
  featuredReview: Review
}

const Home: React.FC<Props> = ({
  banner,
  featuredContent,
  blockWidgets,
  seo,
  coaches,
  featuredReview,
}: Props) => {
  const HomePageProps = {
    banner,
    featuredContent,
    blockWidgets,
    seo,
    coaches,
    featuredReview,
  }
  return <HomePage {...HomePageProps} />
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await homePageQuery()
  const coachesRequest = await coachesQuery()
  const reviews = await reviewsQuery()
  const blockWidgets = page.block_widgets.map((block, index) => ({
    id: index,
    description: block.widget_description[0].text,
    title: block.widget_title,
    imageUrl: block.widget_image.url,
  }))

  const coaches = coachesRequest
    .map(({ node }) => ({
      id: node.appearance_order,
      name: node.name[0].text,
      image: node.book_time_photo
        ? {
            src: node.book_time_photo.url,
            width: node.book_time_photo.dimensions.width,
            height: node.book_time_photo.dimensions.height,
            alt: node.name[0].text,
          }
        : {
            src: node.profile_image.url,
            width: node.profile_image.dimensions.width,
            height: node.profile_image.dimensions.height,
            alt: node.name[0].text,
          },
    }))
    .sort((a, b) => (a.id > b.id ? 1 : -1))

  const featuredReview = reviews
    .filter((review) => review.node.featured === true)
    .map(({ node }) => ({
      featured: node.featured,
      name: node.name,
      quote: node.quote,
    }))[0]

  return {
    props: {
      seo: {
        title: page.seo_title[0].text,
        metaDescription: page.seo_meta_description[0].text,
      },
      banner: {
        imageUrl: page.banner_background_image.url,
        lineOne: page.banner_line_one[0].text,
        lineTwo: page.banner_line_two[0].text,
      },
      featuredContent: {
        imageUrl: page.featured_image.url,
        header: page.featured_message_header,
        body: page.featured_mesage_body,
      },
      blockWidgets,
      coaches,
      featuredReview,
    },
  }
}

export default Home
