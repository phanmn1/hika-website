import nodemailer from "nodemailer"

const sendEmail = async () => {

  const { USER: user, PASS: pass } = process.env

  const transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io", 
    port: 587,
    secure: false, 
    auth: {
      user, 
      pass
    }
  })

  // send email with transport object
  try {
    let info = await transporter.sendMail({
      from: 'test@demomailtrap.com',
      to: 'mpflamingmarshmallow@gmail.com',
      subject: "Test Email",
      text: "Check this out"
    })
  
    console.log("Message sent: %s", info.messageId)
  } catch (error) {
    console.log("Error", error)
  }
  
}

export { sendEmail }