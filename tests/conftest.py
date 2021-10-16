import os
import tempfile

import pytest

from meliarena import create_app, db


@pytest.fixture
def client():
    db_fd, db_path = tempfile.mkstemp()
    app = create_app()

    with app.test_client() as client:
        with app.app_context():
            db.drop_all()
            db.create_all()
        yield client

    os.close(db_fd)
    os.unlink(db_path)
