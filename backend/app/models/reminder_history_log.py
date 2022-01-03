from app.extensions import db
from app.services.github import GitHub

class ReminderHistoryLog(db.Model):
    __tablename__ = 'user'

    log_id = db.Column(db.Integer(), primary_key=True)
    reminder_id = db.Column(db.String, primary_key=False)
    user_id = db.Columnt(db.String, primary_key=False)
    datetime = db.Column(db.datetime, nullable=False)

    def __init__(self, log_id, reminder_id, user_id, datetime):
        self.log_id = log_id
        self.reminder_id = reminder_id
        self.user_id = user_id
        self.datetime = datetime

    def __repr__(self):
        return "<Reminder History Log: {}>".format(self.log_id)
