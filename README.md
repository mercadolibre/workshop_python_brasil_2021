MeliArena
======

This is a basic app built to demo how to consume Meli public APIs at [PYTHON BRASIL
2021](https://2021.pythonbrasil.org.br/).


Install
-------

::

    # clone the repository
    $ git clone https://github.com/mercadolibre/workshop_python_brasil_2021.git
    $ cd workshop_python_brasil_2021

Install MeliArena

    $ poetry install --no-dev


Run
---

::

    $ export FLASK_APP=meliarena
    $ export FLASK_ENV=development
    $ poetry run flask db reset
    $ poetry run flask run --reload

Or on Windows cmd::

    > set FLASK_APP=meliarena
    > set FLASK_ENV=development
    > poetry run flask db reset // it's not necessary execute db init
    > poetry run flask run --reload

Open http://127.0.0.1:5000 in a browser.