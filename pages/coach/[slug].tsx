import CoachPage from 'components/pages/CoachPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import React from 'react'
import { Coach } from 'types/Coach'
import { Review } from 'types/Review'
import { coachesQuery, reviewsQuery } from 'utils/api'
import { urlify } from 'utils/helpers'
import { formatReview } from 'utils/helpers'

interface Props {
  coach: Coach
  slug: string
  featuredReview: Review
}

const CoachProfile: React.FC<Props> = ({ coach, slug, featuredReview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return <CoachPage coach={coach} featuredReview={featuredReview} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const request = await coachesQuery()
  const reviews = await reviewsQuery()
  const coach = request.filter((coach) => urlify(coach.node.name[0].text) === params.slug)[0]

  const coachData = {
    seo: {
      title: coach.node.seo_title[0].text,
      metaDescription: coach.node.seo_meta_description[0].text,
    },
    name: coach.node.name[0].text,
    image: {
      src: coach.node.profile_image.url,
      width: coach.node.profile_image.dimensions.width,
      height: coach.node.profile_image.dimensions.height,
      alt: coach.node.name[0].text,
    },
    bookTimeImage: coach.node.book_time_photo
      ? {
          src: coach.node.book_time_photo.url,
          width: coach.node.book_time_photo.dimensions.width,
          height: coach.node.book_time_photo.dimensions.height,
          alt: coach.node.name[0].text + ' Life Coach',
        }
      : {
          src: coach.node.profile_image.url,
          width: coach.node.profile_image.dimensions.width,
          height: coach.node.profile_image.dimensions.height,
          alt: coach.node.name[0].text + ' Life Coach',
        },
    welcomeMessage: coach.node.welcome_message,
    biography: coach.node.biography,
  }

  const featuredReview = formatReview(reviews)

  return {
    props: {
      coach: coachData,
      slug: params.slug,
      featuredReview,
    },
    revalidate: 60 * 3,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await coachesQuery()
  const coachUrls = request.map((coach) => ({
    params: {
      slug: urlify(coach.node.name[0].text),
    },
  }))

  return {
    paths: coachUrls,
    fallback: 'blocking',
  }
}

export default CoachProfile
