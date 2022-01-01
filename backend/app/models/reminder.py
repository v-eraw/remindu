from app.extensions import db
from app.services.github import GitHub

class Reminder(db.Model):
    __tablename__ = 'reminder'

    reminder_id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    # TODO check that when you create a new reminder, it has a unique name
    color = db.Column(db.String(80), nullable=True)
     = db.Column(db.Integer(), nullable=True)

    def __init__(self, reminder_id, name, color, ):
        self.username = username
        self.avatar_url = avatar_url
        self.github_id = github_id

    @staticmethod
    def find_or_create_from_token(access_token):
        data = GitHub.get_user_from_token(access_token)

        """Find existing user or create new User instance"""
        instance = User.query.filter_by(username=data['login']).first()

        if not instance:
            instance = User(data['login'], data['avatar_url'], data['id'])
            db.session.add(instance)
            db.session.commit()

        return instance

    def __repr__(self):
        return "<User: {}>".format(self.username)
