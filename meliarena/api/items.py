import requests
from flask import jsonify, request, Blueprint, abort, Response
from meliarena.api.utils import is_comparable, filter_comparable_attributes


BASE_API_URL = "https://api.mercadolibre.com"
ITEMS_SEARCH_API_URL = f"{BASE_API_URL}/sites/MLB/search"
ITEMS_API_URL = f"{BASE_API_URL}/items"


bp = Blueprint("api", __name__)

@bp.route("/items/search/")
def items_search():
    params = {"q": request.args.get("q")}

    response = requests.get(ITEMS_SEARCH_API_URL, params)
    results = response.json().get("results", [])

    return jsonify(results)

@bp.route("/items/compare/")
def items_compare():
    params = {"ids": request.args.get("ids")}

    response = requests.get(f"{ITEMS_API_URL}", params)
    results = response.json()

    items = [result.get("body") for result in results if result.get("code") == 200]

    print(items)

    if is_comparable(items):
        items = filter_comparable_attributes(items)
    else:
        abort(Response("Non comparable items!", status=400, mimetype='application/json'))

    return jsonify(items)