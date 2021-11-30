import OurStoryPage from 'components/pages/OurStoryPage'
import { GetStaticProps } from 'next'
import React from 'react'
import { TOurStory } from 'types/OurStory'
import { Review } from 'types/Review'
import { ourStoryQuery, reviewsQuery } from 'utils/api'
import { formatReview } from 'utils/helpers'

interface Props {
  featuredReview: Review
  page: TOurStory
}
const OurStory = ({ featuredReview, page }: Props) => {
  return <OurStoryPage {...page} featuredReview={featuredReview} />
}

export const getStaticProps: GetStaticProps = async () => {
  const reviews = await reviewsQuery()
  const request = await ourStoryQuery()
  const featuredReview = formatReview(reviews)

  const formatPage = request.map(({ node }) => ({
    seo: {
      title: node.seo_title[0].text,
      metaDescription: node.seo_meta_description[0].text,
    },
    title: node.title[0].text,
    pageContent: node.page_content,
  }))

  return {
    props: {
      featuredReview,
      page: formatPage[0],
    },
  }
}
export default OurStory
