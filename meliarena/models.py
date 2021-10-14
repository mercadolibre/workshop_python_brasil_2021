from meliarena import db


class Item(db.Model):
    __tablename__ = "items"

    id = db.Column(db.String(12), primary_key=True)  # pylint: disable=C0103
    title = db.Column(db.String(255))
    is_favourite = db.Column(db.Boolean())

    def __init__(self, id, title, is_favourite=False):
        self.id = id
        self.title = title
        self.is_favourite = is_favourite

    def __repr__(self):
        return f"<Item: {self.title!r}>"

    def save(self, commit=True):
        db.session.add(self)
        if commit:
            try:
                db.session.commit()
            except Exception as e:
                db.session.rollback()
                raise e

    def to_dict(self):
        _dict = {"id": self.id, "title": self.title, "is_favourite": self.is_favourite}

        return _dict
