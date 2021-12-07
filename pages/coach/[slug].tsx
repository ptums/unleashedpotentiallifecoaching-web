import CoachPage from 'components/pages/CoachPage'
import { CoachesContext } from 'contexts/CoachesContext'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { Coach } from 'types/Coach'
import { Review } from 'types/Review'
import { coachesQuery, reviewsQuery } from 'utils/api'
import { urlify } from 'utils/helpers'
import { formatReview } from 'utils/helpers'

interface Props {
  coach: Coach
  coaches: Coach[]
  slug: string
  featuredReview: Review
}

const CoachProfile = ({ coach, coaches, slug, featuredReview }: Props) => {
  const router = useRouter()
  const { coaches: contextCoaches, setCoaches } = useContext(CoachesContext)
  useEffect(() => {
    if (!contextCoaches) {
      setCoaches(coaches)
    }
  }, [coaches])

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return <CoachPage coach={coach} featuredReview={featuredReview} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const request = await coachesQuery()
  const reviews = await reviewsQuery()
  const coach = request.filter((coach) => urlify(coach.node.name[0].text) === params.slug)[0]

  const coaches = request
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
      coaches,
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
