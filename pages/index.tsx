import React from "react";
import SiteHead from "components/SiteHead"
import Main from "layouts/Main"

const SEO = {
  title: 'Unleashed Potential: Life Coaching',
  metaDescription:
    'Unleashed Potential: Life Coaching helps you uncover your purpose by identifying negative behaviors and giving a plan to achieve your goals.',
}
const Home = () => (
  <>
    <SiteHead {...SEO} />
    <Main>
      Meat and potatoes
    </Main>
  </>
)

export default Home;