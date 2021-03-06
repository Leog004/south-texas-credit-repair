import axios from "axios";


export async function SendEmailContact_Message_Dealer(body) {
  try {
    let request = await axios
      .post("/api/email", {
        name: "South Texas Credit Repair",
        email: "leog4za@gmail.com",
        subject: `New Appointment`,
        body: body
      })
      
      .then((res) => {
        return res;
      });

    return request.status === 200 ? true : false;

  } catch (err) {

    console.error('Error Found Here: ', err);

  }

};


export async function SendEmailContact_Message(body) {
  try {
    let request = await axios
      .post("/api/contact", {
        name: "South Texas Credit Repair",
        email: "leog4za@gmail.com",
        subject: `New Appointment`,
        body: body
      })
      
      .then((res) => {
        return res;
      });

    return request.status === 200 ? true : false;

  } catch (err) {

    console.error('Error Found Here: ', err);

  }

};