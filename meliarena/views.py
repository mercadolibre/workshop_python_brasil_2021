from flask import render_template
from flask.views import View


class Home(View):

    methods = ["GET"]
    template_name = "index.html"

    def dispatch_request(self):
        return render_template(self.template_name)
