from flask import Blueprint, request, jsonify
from .db_util.user import create_user, read_user, update_user, delete_user
from .db_util.classification import retrieve_item_by_class, retrieve_items, create_classification_data
import json

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

# @routes.route('/update_user', methods=['POST'])
# def update_user_details():
#     if request.method == 'POST':
#         email = request.json['email']
#         new_org_name = request.json['new_org_name']
#         new_email = request.json['new_email']
#         new_password = request.json['new_password']
#         update_user(email, new_org_name, new_email, new_password)
#         return jsonify({'message': 'User updated'})
    

# @routes.route('/delete_user', methods=['POST'])
# def delete_user_now():
#     if request.method == 'POST':
#         email = request.json['email']
#         delete_user(email)
#         return jsonify({'message': 'User deleted'})
    

# @routes.route('/read_user', methods=['POST'])
# def read_user_now():
#     if request.method == 'POST':
#         email = request.json['email']
#         user = read_user(email)
#         return jsonify(serialize_user(user))

#as user is not serialisable on it's own, we need to create a function to serialise it
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


@routes.route('/recycled_items', methods=['GET'])
def recycled_items_now():
    #retrieve data from database if item class is "recycled"
    data = retrieve_item_by_class("recycled")
    total = retrieve_items()
    proportion = round(len(data)/len(total), 2)
    stats = [
        {"proportion": proportion, "recycled": len(data)}
    ]
    return jsonify(stats)
    

@routes.route('/update_bin_status', methods=['GET'])
def update_bin_status_now():
    # if request.method == 'POST':
    #     bin_id = request.json['bin_id']
    #     new_status = request.json['new_status']
    #     update_bin_status(bin_id, new_status)
    #     return jsonify({'message': 'Bin status updated'})
    data = [
        {"date": "15/02", "general waste": 4000, "recycled": 2400},
        {"date": "16/02", "general waste": 3000, "recycled": 1398},
        {"date": "17/02", "general waste": 2000, "recycled": 9800},
        {"date": "18/02", "general waste": 232828, "recycled": 3908},
        {"date": "19/02", "general waste": 1890, "recycled": 4800},
        {"date": "20/02", "general waste": 2390, "recycled": 3800},
        {"date": "21/02", "general waste": 99999, "recycled": 4300},
    ]
    return jsonify(data)

# @routes.route('/delete_bin', methods=['POST'])
# def delete_bin_now():
#     if request.method == 'POST':
#         bin_id = request.json['bin_id']
#         delete_bin(bin_id)
#         return jsonify({'message': 'Bin deleted'})

# @routes.route('/read_bin', methods=['POST'])
# def read_bin_now():
#     if request.method == 'POST':
#         bin_id = request.json['bin_id']
#         bin = read_bin(bin_id)
#         return jsonify(serialize_bin(bin))

# #as bin is not serialisable on it's own, we need to create a function to serialise it
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

# @routes.route('/read_classification_data', methods=['POST'])
# def read_classification_data_now():
#     if request.method == 'POST':
#         bin_id = request.json['bin_id']
#         classification_data = read_classification_data(bin_id)
#         return jsonify(classification_data)

# @routes.route('/delete_classification_data', methods=['POST'])
# def delete_classification_data_now():
#     if request.method == 'POST':
#         id = request.json['id']
#         delete_classification_data(id)
#         return jsonify({'message': 'Classification data deleted'})    

# this might be needed:
def serialize_classification_data(classification_data):
        return {
                "image_name": classification_data.image_name,
                "item_class": classification_data.item_class,
                "item_confidence": classification_data.item_confidence,
                "bin_id": classification_data.bin_id,
                }