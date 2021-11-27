export const allCoachesSchema: string = `query{
  allCoachs{
    edges{
      node{
        seo_title
        seo_meta_description
        name
        profile_image
        welcome_message
        biography
        book_time_photo
        appearance_order
      }
    }
  }
}`

export const allReviewsSchema: string = `query{
  allReviewss{
    edges{
      node{
        featured
        name
        quote
      }
    }
  }
}`

export const homePageSchema: string = `query{
  allHome_pages {
    edges{
      node {
        seo_title
        seo_meta_description
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

export const allServicesQuery: string = `query{
  allServicess{
    edges {
      node{
        seo_title
        seo_meta_description
        page_blocks {
          title
          content
        }
      }
    }
  }
}`

export const ourStorySchema: string = `query{
  allOur_storys{
    edges{
      node {
        seo_title
        seo_meta_description
        title
        page_content
      }
    }
  }
}`
