// Define app configuration in a single location, but pull in values from
// system environment variables (so we don't check them in to source control!)
module.exports = {
    // Twilio Account SID - found on your dashboard
    accountSid: process.env.TWILIO_ACCOUNT_SID || 'ACc08bf7f44baa618fa4f861e215a1f54d',

    // Twilio Auth Token - found on your dashboard
    authToken: process.env.TWILIO_AUTH_TOKEN || '34d3336bc44f0b1bd371478bc98026f7',

    // A Twilio number that you have purchased through the twilio.com web
    // interface or API
    twilioNumber: process.env.TWILIO_NUMBER || '+15129572842',

    // The port your web application will run on
    port: process.env.PORT || 3000,
};
