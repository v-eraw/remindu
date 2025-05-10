import googleCalendar from '../../utils/googleCalendar';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { timeMin, timeMax } = req.query;
      const events = await googleCalendar.listEvents(
        new Date(timeMin),
        new Date(timeMax)
      );
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    try {
      const event = await googleCalendar.createEvent(req.body);
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'PUT') {
    try {
      const { eventId } = req.query;
      const event = await googleCalendar.updateEvent(eventId, req.body);
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { eventId } = req.query;
      await googleCalendar.deleteEvent(eventId);
      res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
