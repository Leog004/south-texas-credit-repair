import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;



export const getHomePageData = async () => {
    

    const query = gql`query GetHomePageData {
        homePage(stage: PUBLISHED, where: {id: "ckyca55hcp4v50e837i8hm4lm"}) {
          id
          bodySubtitle
          bodyText
          bodyTitle
          buttonRowComponents {
            buttonText
            buttonUrl
            buttonColor
          }
          featureCardComponents {
            text
            title
          }
          images {
            fileName
            url
          }
          header {
            backgroundImage {
              fileName
              url
            }
            subtitle
            title
          }
        }
      }
      `;

      const result = await request(graphqlAPI, query); // get our response from api call

      return result.homePage; // return data

}