import SiteHead from 'components/shared/SiteHead'
import Container from 'layouts/Container'
import React from 'react'
import styled from 'styled-components'
const Disclaimer = () => (
  <Container>
    <SiteHead
      title="Disclaimer"
      metaDescription="Disclaimer notice for user of unleashedpotentiallifecoaching.com"
    />
    <DislcaimerWrapper>
      <h1>Disclaimer</h1>
      <p>Last Updated December 01, 2021</p>
      <h3>Website Disclaimer</h3>
      <p>
        The information provided by Unleashed Potential: Life Coaching (“we,” “us”, or “our”) on{' '}
        <a
          href="https://www.unleashedpotentiallifecoaching.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.unleashedpotentiallifecoaching.com/
        </a>{' '}
        (the “Site”) is for general informational purposes only. All information on the Site is
        provided in good faith, however we make no representation or warranty of any kind, express
        or implied, regarding the accuracy, adequacy, validity, reliability, availability or
        completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY
        LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE
        SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR
        RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
      </p>
      <h3>Professional Disclaimer</h3>

      <p>
        The Site cannot and does not contain life coaching advice. The life coaching information is
        provided for general informational and educational purposes only and is not a substitute for
        professional advice. Accordingly, before taking any actions based upon such information, we
        encourage you to consult with the appropriate professionals. We do not provide any kind of
        life coaching advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY
        AT YOUR OWN RISK.
      </p>

      <h3>Testimonial Disclaimer</h3>
      <p>
        The Site may contain testimonials by users of our products and/or services. These
        testimonials reflect the real-life experiences and opinions of such users. However, the
        experiences are personal to those particular users, and may not necessarily be
        representative of all users of our products and/or services. We do not claim, and you should
        not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY
        VARY. 
      </p>
      <p>
        The testimonials on the Site are submitted in various forms such as text, audio and/or
        video, and are reviewed by us before being posted. They appear on the Site verbatim as given
        by the users, except for the correction of grammar or typing errors. Some testimonials may
        have been shortened for the sake of brevity where the full testimonial contained extraneous
        information not relevant to the general public.
      </p>
      <p>
        The views and opinions contained in the testimonials belong solely to the individual user
        and do not reflect our views and opinions.We are not affiliated with users who provide
        testimonials, and users are not paid or otherwise compensated for their testimonials.
      </p>
    </DislcaimerWrapper>
  </Container>
)

const DislcaimerWrapper = styled.main`
  h1 {
    ${(props) => props.theme.fonts.xxxxl};
  }

  h3 {
    ${(props) => props.theme.fonts.xxl};
  }
  p {
    ${(props) => props.theme.fonts.lg};
    line-height: 1.3;
  }
`

export default Disclaimer
