import ServicesPage from 'components/pages/ServicesPage'
import { GetStaticProps } from 'next'
import React from 'react'
import { TServices } from 'types/Services'
import { servicesQuery } from 'utils/api'

const Services: React.FC<TServices> = ({ page_blocks, seo }: TServices) => (
  <ServicesPage page_blocks={page_blocks} seo={seo} />
)

export const getStaticProps: GetStaticProps = async () => {
  const services = await servicesQuery()
  const page = services.map(({ node }) => ({
    seo: {
      title: node.seo_title[0].text,
      metaDescription: node.seo_title[0].text,
    },
    page_blocks: node.page_blocks,
  }))

  return {
    props: {
      ...page[0],
    },
    revalidate: 60,
  }
}

export default Services
