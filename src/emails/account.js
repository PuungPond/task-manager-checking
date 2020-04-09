const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
            to: email,
            from: 'puung.wat@gmail.com',
            subject: 'Thanks for joining in!',
            text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
        })
        .then(() => {})
        .catch(error => {
            console.log(error)
            console.log(error.response)
        })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
            to: email,
            from: 'puung.wat@gmail.com',
            subject: "Cancelation",
            text: `Goodbye, ${name}.`
        })
        .then(() => {})
        .catch(error => {
            console.log(error)
            console.log(error.response)
        })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}