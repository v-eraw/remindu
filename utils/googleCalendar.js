const { google } = require('googleapis');
const { authenticate } = require('@google-cloud/local-auth');
const path = require('path');
const {
  SCOPES,
  CREDENTIALS_PATH,
  TOKEN_PATH,
} = require('./googleCalendarConfig');

class GoogleCalendarService {
  constructor() {
    this.auth = null;
    this.calendar = null;
  }

  async initialize() {
    try {
      this.auth = await authenticate({
        scopes: SCOPES,
        keyfilePath: path.join(process.cwd(), CREDENTIALS_PATH),
      });

      this.calendar = google.calendar({ version: 'v3', auth: this.auth });
      return true;
    } catch (error) {
      console.error('Error initializing Google Calendar:', error);
      return false;
    }
  }

  async listEvents(timeMin, timeMax) {
    try {
      const response = await this.calendar.events.list({
        calendarId: 'primary',
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      });
      return response.data.items;
    } catch (error) {
      console.error('Error listing events:', error);
      throw error;
    }
  }

  async createEvent(event) {
    try {
      const response = await this.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
      });
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  }

  async updateEvent(eventId, event) {
    try {
      const response = await this.calendar.events.update({
        calendarId: 'primary',
        eventId: eventId,
        resource: event,
      });
      return response.data;
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  }

  async deleteEvent(eventId) {
    try {
      await this.calendar.events.delete({
        calendarId: 'primary',
        eventId: eventId,
      });
      return true;
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  }
}

module.exports = new GoogleCalendarService();
