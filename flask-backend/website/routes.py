from flask import Blueprint, request, jsonify
from .db_util.user import create_user, read_user, update_user, delete_user
from .db_util.classification import retrieve_item_by_class, retrieve_items, create_classification_data, delete_classification_data
import json
import datetime

routes = Blueprint('routes', __name__)

#User routes
@routes.route('/register_user', methods=['POST'])
def register_user():
    if request.method == 'POST':
        email = request.json['email']
        password = request.json['password']
        org_name = request.json['org_name']
        user = create_user(email, password, org_name)
        return jsonify(serialize_user(user))
    
@routes.route('/login_user', methods=['POST'])
def login_user_now():
    if request.method == 'POST':
        email = request.json['email']
        password = request.json['password']
        user = read_user(email)
        if user and user.password == password:
            return jsonify(serialize_user(user))
        else:
            return jsonify({'user': None}), 401

@routes.route('/update_user', methods=['POST'])
def update_user_details():
    if request.method == 'POST':
        email = request.json['email']
        new_org_name = request.json['new_org_name']
        new_email = request.json['new_email']
        new_password = request.json['new_password']
        update_user(email, new_org_name, new_email, new_password)
        return jsonify({'message': 'User updated'})
    

@routes.route('/delete_user', methods=['POST'])
def delete_user_now():
    if request.method == 'POST':
        email = request.json['email']
        delete_user(email)
        return jsonify({'message': 'User deleted'})
    

@routes.route('/read_user', methods=['POST'])
def read_user_now():
    if request.method == 'POST':
        email = request.json['email']
        user = read_user(email)
        return jsonify(serialize_user(user))
    
def serialize_user(user):
        return {"id": user.id,
                "email": user.email,
                "org_name": user.org_name,
                }

#Bin routes
from .db_util.bin import create_bin, update_bin_status, delete_bin, read_bin
@routes.route('/register_bin', methods=['POST'])
def register_bin():
    if request.method == 'POST':
        user_id = request.json['user_id']
        bin = create_bin(user_id)
        return jsonify(serialize_bin(bin))

@routes.route('/delete_bin', methods=['POST'])
def delete_bin_now():
    if request.method == 'POST':
        bin_id = request.json['bin_id']
        delete_bin(bin_id)
        return jsonify({'message': 'Bin deleted'})

@routes.route('/read_bin', methods=['POST'])
def read_bin_now():
    if request.method == 'POST':
        bin_id = request.json['bin_id']
        bin = read_bin(bin_id)
        return jsonify(serialize_bin(bin))

def serialize_bin(bin):        
        return {"bin_id": bin.bin_id,
                "bin_status": json.dumps(bin.bin_status.value),
                "user_id": bin.user_id,
                }

# #Classification Data routes
# from .db_util.bin import create_classification_data, read_classification_data, delete_classification_data
@routes.route('/register_classification_data', methods=['POST'])
def register_classification_data():
    if request.method == 'POST':
        image_name = request.json['image_name']
        item_class = request.json['item_class']
        item_confidence = request.json['item_confidence']
        bin_id = request.json['bin_id']
        classification_data = create_classification_data(image_name, item_class, item_confidence, bin_id)
        return jsonify(serialize_classification_data(classification_data))

@routes.route('/delete_classification_data', methods=['POST'])
def delete_classification_data_now():
    if request.method == 'POST':
        id = request.json['id']
        delete_classification_data(id)
        return jsonify({'message': 'Classification data deleted'})    

def serialize_classification_data(classification_data):
        return {
                "image_name": classification_data.image_name,
                "item_class": classification_data.item_class,
                "item_confidence": classification_data.item_confidence,
                "bin_id": classification_data.bin_id,
                }


#chart & statistics endpoints
@routes.route('/pi_chart_data')
def pi_chart_data():
    data = retrieve_items()
    recycled = 0
    general = 0
    for data_point in data:
        if data_point.item_class == "recycled":
            recycled += 1
        elif data_point.item_class == "general waste":
            general += 1

    return jsonify([{"name": "recycled", "value": recycled}, {"name": "general waste", "value": general}])

@routes.route('/area_chart_data', methods=['GET'])
def get_area_chart_data():
    dates = []
    #retrieve the previous 7 dates    
    for i in range(7):
        date = datetime.date.today() - datetime.timedelta(days=i)
        date = date.strftime("%Y-%m-%d")
        dates.append(date)

    #for these 7 dates I want to now check if there are any items in the database that have been created on these dates
    data = retrieve_items()
    date_map_recycled = {}
    date_map_general = {}
    for date in dates:
        date_map_recycled[date] = 0
        date_map_general[date] = 0
        for data_point in data:
            if str(date) in str(data_point.time_created):
                if data_point.item_class == "recycled":
                    date_map_recycled[date] += 1
                elif data_point.item_class == "general waste":
                    date_map_general[date] += 1
                    
    data_final = []
    for date in dates[::-1]:
        #i need to make a list of json data points now for the area chart, and the date needs to be in dd/mm format
        date_formatted = datetime.datetime.strptime(date, "%Y-%m-%d").strftime("%d/%m")
        data_final.append({"date": date_formatted, "general waste": date_map_general[date], "recycled": date_map_recycled[date]})
    
    return jsonify(data_final)

@routes.route('/recycled_items', methods=['GET'])
def recycled_items_now():
    data = retrieve_item_by_class("recycled")
    total = retrieve_items()
    proportion = round(len(data)/len(total), 2)
    stats = [
        {"proportion": proportion, "recycled": len(data)}
    ]
    return jsonify(stats)
        