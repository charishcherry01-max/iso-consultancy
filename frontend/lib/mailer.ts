import nodemailer from 'nodemailer';

// Create a reusable transporter object using SMTP transport
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendRegistrationEmail = async (data: any) => {
  const companyEmail = process.env.COMPANY_EMAIL;
  
  if (!companyEmail || !process.env.SMTP_USER) {
    console.error("Missing email configuration variables.");
    return false;
  }

  const mailOptions = {
    from: `"Sri Management System" <${process.env.SMTP_USER}>`,
    to: companyEmail,
    subject: `New Client Registration / Inquiry: ${data.name}`,
    text: `A new registration has been received.\n\nType: ${data.userType === 'company' ? 'Company' : 'Individual Trainee'}\nName: ${data.name}\nEmail: ${data.email}\nPhone: +91 ${data.phone}\n${data.userType === 'company' ? `Company: ${data.company}\nService Type: ${data.serviceType}\n` : ''}Standard: ${data.standard}\nMessage: ${data.message || 'No message provided'}\n\nPlease review their registration in the dashboard.`,
    html: `
      <h2>New Registration / Inquiry</h2>
      <p>A new registration has been submitted on the platform.</p>
      <ul>
        <li><strong>Registration Type:</strong> ${data.userType === 'company' ? 'Company' : 'Individual Trainee'}</li>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> +91 ${data.phone}</li>
        ${data.userType === 'company' ? `<li><strong>Company:</strong> ${data.company}</li>` : ''}
        <li><strong>Requested Standard:</strong> ${data.standard}</li>
        ${data.userType === 'company' ? `<li><strong>Requested Service:</strong> ${data.serviceType}</li>` : ''}
      </ul>
      ${data.message ? `<p><strong>Additional Details:</strong><br/>${data.message}</p>` : ''}
      <p>Please review their registration in the dashboard.</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Registration email sent: %s', info.messageId);
    return true;
  } catch (error: any) {
    console.error('Error sending email:', error.message);
    return false;
  }
};
