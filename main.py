from flask import Flask, render_template, request, redirect, url_for, jsonify

app = Flask(__name__)

@app.route('/')
def mainPage():
    return render_template("login.html")

@app.route('/userpage',methods=['POST'])
def customUserPage():
    if request.method=='POST':
        user = request.form["username"]
        return render_template("userPage.html", username=user, num="0")
    else:
        return redirect("/")
    
@app.route('/update_on_up_key_press', methods=['POST'])
def update_on_up_key_press():
    current_number = app.config.setdefault('counter', 0) + 1
    app.config['counter'] = current_number
    return jsonify({'number': current_number})
        
@app.route('/update_on_down_key_press', methods=['POST'])
def update_on_down_key_press():
    current_number = app.config.setdefault('counter', 0) - 1
    if current_number < 0:
        current_number = 0
    app.config['counter'] = current_number
    return jsonify({'number': current_number})

@app.route('/reset_number', methods=['POST'])
def reset_number():
    # Reset the counter to 0
    current_number = app.config.setdefault(0,0)
    app.config['counter'] = current_number
    return jsonify({'number': current_number})

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8701,debug=True)