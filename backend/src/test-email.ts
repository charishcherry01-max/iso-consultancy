import { sendRegistrationEmail } from './lib/mailer';

const testData = {
  userType: 'individual',
  name: 'Test Agent',
  email: 'test@example.com',
  phone: '0000000000',
  standard: 'ISO 9001 (Quality Management)',
  message: 'This is a test email.'
};

async function runTest() {
  console.log("Attempting to send test email...");
  const success = await sendRegistrationEmail(testData);
  if (success) {
    console.log("SUCCESS! Email was sent without errors.");
  } else {
    console.log("FAILED! Check the errors above.");
  }
}

runTest();
