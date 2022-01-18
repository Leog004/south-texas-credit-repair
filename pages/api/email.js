// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sendInBlue from "../../Email/sendInBlueAPI";

/*
  South Texas Credit Repair
  Leo Garza

  Goal: API request that will recieve the user contact information as well 
  as its question and will send that information to MyEquibrand

  Parameters: name, email, subject, msg
  results: array of images, folders
*/


export default async function emailApi(req, res) {

    const {email, name, subject} = req.body;
    const {Username, Useremail, Userphone, Userdate, UserAppointment} = req.body.body || 'Empty user'

    var sendSmtpEmail = {
        to: [{
            email,
            name,
            subject
        }],
        templateId: 1,
        params: {
            date: Userdate,
            name: Username,
            email: Useremail,
            phone: Userphone,
            appointment: UserAppointment
        },
        headers: {
            'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        }
    };

    sendInBlue(sendSmtpEmail);

    console.log('Passed Send In Blue');

    await res.send(req.body)
}
