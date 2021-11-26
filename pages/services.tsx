import { GetStaticProps } from 'next'
import React from 'react'
import { Services } from 'types/Services'

const ServicesPage: React.FC<Services> = ({ services }: Services) => {
  return <div>{JSON.stringify(services)}</div>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      services: [],
    },
    revalidate: 60,
  }
}

export default ServicesPage
