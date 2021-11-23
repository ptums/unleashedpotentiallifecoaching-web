import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.cdn.prismic.io/graphql`
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

const fetchAPI = async (query, { previewData, variables } = {}) => {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

/** Page Query */
export const homePageQuery = async () => {
  const query = `query{
    allHome_pages {
      edges{
        node {
          banner_line_one
          banner_line_two
          banner_background_image
          featured_image
          featured_mesage_body
          featured_message_header
          block_widgets {
            widget_description
            widget_image
            widget_title
          }          
        }
      }
    }
  }`

  const data = await fetchAPI(query);

  return data.allHome_pages?.edges[0]?.node;
}

/** Coach Query */