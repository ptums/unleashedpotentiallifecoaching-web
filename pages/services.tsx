import ServicesPage from 'components/pages/ServicesPage'
import { GetStaticProps } from 'next'
import React from 'react'
import { Coach } from 'types/Coach'
import { Review } from 'types/Review'
import { TServices } from 'types/Services'
import { coachesQuery, reviewsQuery, servicesQuery } from 'utils/api'

interface Props {
  service: TServices
  featuredReview: Review
  coaches: Coach[]
}
const Services: React.FC<Props> = ({ service, featuredReview, coaches }: Props) => {
  const { page_blocks, seo } = service

  return (
    <ServicesPage
      page_blocks={page_blocks}
      seo={seo}
      coaches={coaches}
      featuredReview={featuredReview}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const services = await servicesQuery()
  const reviews = await reviewsQuery()
  const coachesRequest = await coachesQuery()

  const page = services.map(({ node }) => ({
    seo: {
      title: node.seo_title[0].text,
      metaDescription: node.seo_title[0].text,
    },
    page_blocks: node.page_blocks,
  }))

  const featuredReview = reviews
    .filter((review) => review.node.featured === true)
    .map(({ node }) => ({
      featured: node.featured,
      name: node.name,
      quote: node.quote,
    }))[0]

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

  return {
    props: {
      service: page[0],
      featuredReview,
      coaches,
    },
    revalidate: 60,
  }
}

export default Services
