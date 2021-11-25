export const allCoachesSchema = `query{
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

export const allReviewsSchema = `query{
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

export const homePageSchema = `query{
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
