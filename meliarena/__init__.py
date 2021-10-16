from flask import Flask
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def create_app(config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SQLALCHEMY_DATABASE_URI="sqlite:////tmp/meliarena.db",
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )

    db.init_app(app)

    from meliarena.views import Home

    app.add_url_rule("/", view_func=Home.as_view("home"))

    from meliarena.api import items_api_bp

    app.register_blueprint(items_api_bp, url_prefix="/api")

    return app
