from flask import Flask,request,jsonify

app=Flask(__name__)

a=50

@app.route('/items',methods=['GET'])
def get_items():
    return jsonify({'a':a})
if __name__=='__main__':
        app.run(debug=True,port=5000)
