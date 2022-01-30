// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sendInBlue from "../../Email/sendInBlueAPI";
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID)

/*
  South Texas Credit Repair
  Leo Garza

  Goal: API request that will recieve the user contact information as well 
  as its question and will send that information to MyEquibrand

  Parameters: name, email, subject, msg
  results: array of images, folders
*/


// export default async function emailApi(req, res) {

//     const {email, name, subject} = req.body;
//     const {Username, Useremail, Userphone, Userdate, UserAppointment} = req.body.body || 'Empty user'

//     var sendSmtpEmail = {
//         to: [{
//             email,
//             email,
//             subject
//         }],
//         templateId: 1,
//         params: {
//             date: Userdate,
//             name: Username,
//             email: Useremail,
//             phone: Userphone,
//             appointment: UserAppointment
//         },
//         headers: {
//             'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
//         }
//     };

//     try{
//         sendInBlue(sendSmtpEmail);
//     }catch(err){
//         console.log(err);
//     }
    

//     console.log('Passed Send In Blue');

//     await res.send(req.body)
// }


export default async function sendGridEmailAPI(req, res){

    
    const {email, name, subject} = req.body;
    const {Username, Useremail, Userphone, Userdate, UserAppointment} = req.body.body || 'Empty user'
    
  try{
        const data = {
            to: process.env.EMAILTO,
            from: {
                email: process.env.EMAILPROVIDER,
                name: process.env.EMAILPROVIDER
            },
            templateId: 'd-f64f21db5cab4fa9ba309095c870c399',
            dynamic_template_data:{
                name: Username,
                email: Useremail,
                phone: Userphone,
                date: Userdate,
                appointment: UserAppointment
            }
        };
        
       const result = await mail.send(data);

       if(result){ 
           console.log(result);
           return res.status(200).send(result);
       }

    }catch(error){
        return res.status(400).send(error);
    }
}
