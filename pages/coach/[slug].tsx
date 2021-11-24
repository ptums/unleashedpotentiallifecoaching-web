import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { coachesQuery } from 'utils/api'
import { Coach } from 'types/Coach'
import { urlify } from 'utils/helpers'
interface Props {
  coach: Coach;
  slug: string;
}

const CoachProfile: React.FC<Props> = ({ coach, slug }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return <>Coach will go here..</>
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const request = await coachesQuery()

  const coach = request.filter((coach) => urlify(coach.node.name[0].text) === params.slug)[0];

  const coachData = {
    seo: {
      title: coach.node.seo_title[0].text,
      metaDescription: coach.node.seo_meta_description[0].text,
    },
    name: coach.node.name[0].text,
    image: {
      url: coach.node.profile_image.url,
      width: coach.node.profile_image.dimensions.width,
      height: coach.node.profile_image.dimensions.height,
    },
    welcomeMessage: coach.node.welcome_message.map(({ text }) => text),
    biography: coach.node.biography.map(({ text }) => text),
  }


  return {
    props: {
      coach: coachData,
      slug: params.slug
    },
    revalidate: 60*3
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await coachesQuery()
  const coachUrls =  request.map((coach) => ({
    params: {
      slug: urlify(coach.node.name[0].text)
    },
  }));

  return {
    paths: coachUrls,
    fallback: false,
  }
}

export default CoachProfile
