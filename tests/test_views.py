from http import HTTPStatus


def test_index_page_exist(client):
    rv = client.get("/")
    assert rv.status_code == HTTPStatus.OK
