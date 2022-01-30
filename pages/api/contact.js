// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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


export default async function sendGridEmailAPI(req, res){

    
    const {email, name, subject} = req.body;
    const {Username, Useremail, UserMessage} = req.body.body || 'Empty user'
    
  try{
        const data = {
            to: process.env.EMAILTO,
            from: {
                email: process.env.EMAILPROVIDER,
                name: process.env.EMAILPROVIDER
            },
            // subject: subject,
            // text: message,
            // html: message.replace(/\r\n/g, '<br>'),
            templateId: 'd-575add060ce242eb902d8f47190700ad',
            dynamic_template_data:{
                name: Username,
                email: Useremail,
                message: UserMessage
            }
        };
        
       const result = await mail.send(data);

       if(result){ 
           //console.log(result);
           return res.status(200).send(result);
       }

    }catch(error){
        return res.status(400).send(error);
    }
}
