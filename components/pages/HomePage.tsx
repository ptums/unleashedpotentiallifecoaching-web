import React from "react";
import SiteHead from "components/shared/SiteHead"
import Main from "layouts/Main"
import HomeBanner from "components/organisms/home/HomeBanner"
import FeaturedBlock from "components/organisms/home/FeaturedBlock";
import { Banner, FeaturdContent, BlockWidget } from "types/Home";
import { Seo } from "types/SEO";

interface Props {
  banner: Banner,
  featuredContent: FeaturdContent,
  blockWidgets: BlockWidget[],
  seo: Seo
}

const HomePage: React.FC<Props> = ({ banner, featuredContent, blockWidgets, seo }: Props) => {
  return (
    <>
      <SiteHead {...seo} />
      <HomeBanner {...banner} /> 
      <Main>
        <FeaturedBlock {...featuredContent} />
      </Main>
    </>
  )
}
export default HomePage;