from flask import Flask


def create_app(config=None):
    app = Flask(__name__, instance_relative_config=True)

    from meliarena.home import bp as home_bp
    from meliarena.api import bp as api_bp

    app.register_blueprint(home_bp, url_prefix="/")
    app.register_blueprint(api_bp, url_prefix="/api")

    return app
