from flask import Flask
from meliarena.views import Home


def create_app(config=None):
    app = Flask(__name__, instance_relative_config=True)

    app.add_url_rule("/", view_func=Home.as_view("home"))

    from meliarena.api import items_api_bp

    app.register_blueprint(items_api_bp, url_prefix="/api")

    return app
