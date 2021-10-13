import requests
from flask import jsonify, request, Blueprint

bp = Blueprint("api", __name__)

BASE_API_URL = "https://api.mercadolibre.com"
ITEMS_SEARCH_API_URL = f"{BASE_API_URL}/sites/MLB/search"


@bp.route("/meli-items/search")
def api_meli_items_search():
    params = {"q": request.args.get("q")}

    response = requests.get(ITEMS_SEARCH_API_URL, params)
    results = response.json().get("results", [])

    return jsonify(results)
