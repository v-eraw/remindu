from app.extensions import db
from app.services.github import GitHub

class Reminder(db.Model):
    __tablename__ = 'reminder'

    reminder_id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    # TODO check that when you create a new reminder, it has a unique name
    color = db.Column(db.String(80), nullable=True)
    notes = db.Column(db.String(360)), nullable=True)

    def __init__(self, reminder_id, name, color, notes):
        self.reminder_id = reminder_id
        self.name = name
        self.color = color
        self.notes = notes

    @staticmethod
    def find_reminder(reminder_id):
        instance = Reminder.query.filter_by(reminder_id=reminder_id).first()
        return instance

    def __repr__(self):
        return "<Reminder: {}>".format(self.reminder_id)
