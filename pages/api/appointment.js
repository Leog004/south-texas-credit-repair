// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;



// export a default function for API route to work
export default async function asynchandlerMessage(req, res) {

    console.log(req);

const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  // We are creating our appointment
  const query = gql`
    mutation CreateNewAppointment($personName: String!, $monthAndDay: Date!, $time: String!, $email: String!, $phone: String!) {
        createUpcomingAppointment(data: {personName: $personName, monthAndDay: $monthAndDay, time: $time, email:$email, phone:$phone}) {
            id
        }
    }
  `;

// we are setting our appointment with a publish status
  const toPublish = gql`
    mutation($id: ID!) {
        publishUpcomingAppointment(where: {id: $id}, to: PUBLISHED) {
         id
        }
    }
  `;

  // passing in the query and data
  const result = await graphQLClient.request(query, {
    personName: req.body.name,
    monthAndDay: req.body.date,
    time: req.body.appointment,
    email: req.body.email,
    phone: req.body.phone
  });

// passing in the query and data
  const publishResult = await graphQLClient.request(toPublish, {
      id: result.createUpcomingAppointment.id
  });
  

 // returining the results
  return res.status(200).send(result, publishResult);
}