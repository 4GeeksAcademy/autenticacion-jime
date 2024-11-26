"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# estoy creando la ruta y el metodo que es guardar (post)
@api.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get ('password')

# voy a buscar si existe el usuario
    exist_user = User.query.filter_by(email=email).first()
    if exist_user:
        return jsonify ({"message":"User exist"}), 400
    
    # si no existe el usuario, lo creo
    new_user = User(
        name = name,
        email = email,
        password = password,
        is_active = True
    ) 

# agregar el nuevo usuario. add agrega, commit lo graba.
    db.session.add(new_user)        
    db.session.commit()

    return jsonify ({"message":"User creted succesfully"}), 201