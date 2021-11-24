import React from 'react'
import { GetStaticProps } from 'next'
import HomePage from 'components/pages/HomePage'
import { homePageQuery, coachesQuery } from 'utils/api'
import { Banner, FeaturdContent, BlockWidget } from 'types/Home'
import { Seo } from 'types/SEO'
import { Coach } from 'types/Coach'

interface Props {
  banner: Banner
  featuredContent: FeaturdContent
  blockWidgets: BlockWidget[]
  seo: Seo,
  coaches: Coach[]
}

const Home: React.FC<Props> = ({ banner, featuredContent, blockWidgets, seo, coaches }: Props) => {  
  const HomePageProps = {
    banner,
    featuredContent,
    blockWidgets,
    seo,
    coaches
  }
  return <HomePage {...HomePageProps} />
}

export const getStaticProps: GetStaticProps = async () => {
  const page = await homePageQuery()
  const coachesRequest = await coachesQuery()
  const blockWidgets = page.block_widgets.map((block, index) => ({
    id: index,
    description: block.widget_description[0].text,
    title: block.widget_title[0].text,
    imageUrl: block.widget_image,
  }));

  const coaches = coachesRequest.map((coach, index) => ({
    id: index,
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
  }));

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
        header: page.featured_message_header[0].text,
        body: page.featured_mesage_body.map((body) => ({
          text: body.text,
        })),
      },
      blockWidgets,
      coaches
    },
  }
}

export default Home
