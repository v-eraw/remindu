// Google Calendar API configuration
const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events',
];

const CREDENTIALS_PATH = 'credentials.json';
const TOKEN_PATH = 'token.json';

module.exports = {
  SCOPES,
  CREDENTIALS_PATH,
  TOKEN_PATH,
};
