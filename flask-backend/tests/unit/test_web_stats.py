from website.models import ClassificationData
import pytest
from website.routes import serialize_bin
from website import create_app
import random
from flask_sqlalchemy import SQLAlchemy

@pytest.fixture()
def app():
    DB_NAME = "fake.db"
    app = create_app()
    app.config.update({
        "TESTING": True,
        # "SQLALCHEMY_DATABASE_URI": f'sqlite:///{DB_NAME}'
    })

    yield app

@pytest.fixture()
def client(app):
    with app.test_client() as client:
        client.app_context = app.app_context()
        client.app_context.push()
        yield client

@pytest.fixture()
def app_context(app):
    with app.app_context():
        yield


def test_pi_chart_data(client, mocker):
    
    recycled_data_example = ClassificationData(image_name="test.jpg", item_class="recycled", item_confidence=0.9, bin_id=1)
    general_waste_example = ClassificationData(image_name="test.jpg", item_class="general waste", item_confidence=0.9, bin_id=1)
    waste_arr = []
    for i in range(10):
        waste_arr.append(recycled_data_example)
        waste_arr.append(general_waste_example)    
    mocker.patch("website.routes.retrieve_items", return_value=waste_arr)

    response = client.get("api/pi_chart_data") 
    assert response.status_code == 200
    assert response.json == [{"name": "recycled", "value": 10}, {"name": "general waste", "value": 10}]


def test_pi_chart_data_empty(client, mocker):
    waste_arr = []
    mocker.patch("website.routes.retrieve_items", return_value=waste_arr)

    response = client.get("api/pi_chart_data")
    assert response.status_code == 200
    assert response.json == [{"name": "recycled", "value": 0}, {"name": "general waste", "value": 0}]


def test_pi_chart_data_random(client, mocker):
    recycled_data_example = ClassificationData(image_name="test.jpg", item_class="recycled", item_confidence=0.9, bin_id=1)
    general_waste_example = ClassificationData(image_name="test.jpg", item_class="general waste", item_confidence=0.9, bin_id=1)
    num_of_recycled = random.randint(0, 20)
    num_of_general = random.randint(0, 20)
    waste_arr = []
    for i in range(num_of_general):
        waste_arr.append(general_waste_example)
    for i in range(num_of_recycled):
        waste_arr.append(recycled_data_example)
    mocker.patch("website.routes.retrieve_items", return_value=waste_arr)

    response = client.get("api/pi_chart_data")
    assert response.status_code == 200
    assert response.json == [{"name": "recycled", "value": num_of_recycled}, {"name": "general waste", "value": num_of_general}]

