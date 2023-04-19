from flask import Flask, request, jsonify
import test.py


app = Flask(__name__)

@app.route('/get_sustainability_info', methods=['POST'])
def get_sustainability_info():
    item_name = request.json['item_name']
    sustainability_info = test.generate_text(item_name, "How sustainable is" + item_name)
    food_score = test.getCurrScore(item_name)
    return jsonify({"sustainability_info": sustainability_info, "food_score": food_score})

if __name__ == '__main__':
    app.run(debug=True)
