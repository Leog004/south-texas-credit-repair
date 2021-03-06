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


export const getLocationPageData = async () => {
    

  const query = gql`query GetLocationPageData {
      contactPage(stage: PUBLISHED, where: {id: "ckyi5q8rcf35d0b846lvbyby9"}) {
        id
        profileName
        profileDescription
        sectionDescription
        profileImage {
          fileName
          url
        }
        bigImage {
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

    return result.contactPage; // return data

}


export const getCreditRepairPageData = async () => {
    

  const query = gql`query GetCreditRepairPageData {
      creditRepairPage(stage: PUBLISHED, where: {id: "ckyi5aylsf4rp0c82r89k64pc"}) {
        id
        sectionTitle
        stepComponents {
          title
          description
        }
        stepImage {
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

    return result.creditRepairPage; // return data

}


export const getTaxPageData = async () => {
    

  const query = gql`query GetTaxPageData {
      taxReturnPage(stage: PUBLISHED, where: {id: "ckyi5skv4fgbo0a29czpcm2yb"}) {
        id
        sectionSubtitle
        sectionTitle
        description
        checkmarks
        images{
          fileName
          url
        }
        featureCardComponents{
          title
          text
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

    return result.taxReturnPage; // return data

}




export const getAppointmentsByData = async (date) => {
    
    const query = gql`
        query GetAppoint ($date: Date!) {
        upcomingAppointments(where: {monthAndDay: $date}) {
          id
          monthAndDay
          time
          personName
        }
      }
      `;

      const result = await request(graphqlAPI, query, {date}); // get our response from api call

      return result.upcomingAppointments; // return data

}



export const submitAppointment = async (obj) => {
  const result = await fetch('/api/appointment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

  