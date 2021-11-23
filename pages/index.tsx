import React from "react";
import { GetStaticProps } from 'next'
import SiteHead from "components/SiteHead"
import Main from "layouts/Main"
import { homePageQuery } from "utils/api"
const SEO = {
  title: 'Unleashed Potential: Life Coaching',
  metaDescription:
    'Unleashed Potential: Life Coaching helps you uncover your purpose by identifying negative behaviors and giving a plan to achieve your goals.',
}
const Home = ({ banner, featuredContent, blockWidgets }) => {
  console.log({
    banner,
    featuredContent,
    blockWidgets
  })
  return (
    <>
      <SiteHead {...SEO} />
      <Main>
        Meat and potatoes
      </Main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const page = await homePageQuery()
  const blockWidgets = page.block_widgets.map((block, index) => ({
    id: index,
    description: block.widget_description[0].text,
    title: block.widget_title[0].text,
    imageUrl: block.widget_image
  }))

  return {
    props: {
      banner: {
        imageUrl: page.banner_background_image.url,
        lineOne: page.banner_line_one[0].text,
        lineTwo: page.banner_line_two[0].text
      },
      featuredContent: {
        imageUrl: page.featured_image.url,
        header: page.featured_message_header[0].text,
        body: page.featured_mesage_body[0].text
      },
      blockWidgets
    }
  }
}

export default Home;