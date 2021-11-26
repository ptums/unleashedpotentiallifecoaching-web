import { GetStaticProps } from 'next'
import React from 'react'
import { Services } from 'types/Services'
import { servicesQuery } from 'utils/api'

const ServicesPage: React.FC<Services> = ({ services }: Services) => {
  return <div>{JSON.stringify(services)}</div>
}

export const getStaticProps: GetStaticProps = async () => {
  const services = await servicesQuery()

  return {
    props: {
      services,
    },
    revalidate: 60,
  }
}

export default ServicesPage
