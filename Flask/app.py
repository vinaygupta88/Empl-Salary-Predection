from flask import Flask, render_template, request
import pickle

app = Flask(__name__)

# Load the model (ensure it's in the right path)
model = pickle.load(open('model.pkl', 'rb'))

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/predict")
def predict_form():
    return render_template('predict.html')

@app.route("/submit", methods=['POST'])

def submit_page():

    # Retrieve the form data
    age = request.form['age']
    gender = request.form['gender']
    education_level = request.form['education_level']
    job_title = request.form['job_title']
    experience = request.form['experience']

    # Collect data into a list that the model can process
    result = [[float(age), int(gender), int(education_level),int(job_title), float(experience),]]
    
    # Use the model to predict
    prediction = round(model.predict(result)[0],3)

    # Return the result to the user
    return render_template('submit.html', prediction=prediction)


if __name__ == "__main__":
    app.run(debug=True)
