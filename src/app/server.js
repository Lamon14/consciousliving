//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
// create a new Express application instance
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(__dirname +'/contacts/contacts.component.html')
})

app.post('/', (req, res)=>{
        console.log(req.body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: 'laminsaidy1520@gmail.com',
                pass: '#19#Combustion79'
            }
        })

        const mailOptions = {
            from: req.body.email,
            to: 'laminsaidy1520@gmail.com',
            subject: `Message from ${req.body.email}: ${req.body.subject}`,
            text: req.body.message
        }

        transporter.sendMail(mailOptions, (error, info)=>{
            if(error){
                console.log(error);
                res.send('error');
            }else{
                console.log('Email sent: ' + info.response);
                res.send('success')
            }
        })
})

app.listen(PORT, () => {
    console.log("The server started on port 3000" );
  });