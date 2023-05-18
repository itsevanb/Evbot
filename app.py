from flask import Flask, render_template, request
import openai
from config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # This is the HTML file we'll create for the chatbot interface

@app.route('/get')
def get_bot_response():
    user_input = request.args.get('msg')  # Get the user input from the frontend
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_input}
        ]
    )
    bot_response = response['choices'][0]['message']['content']
    return bot_response

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)  # Run the app on your local machine on port 8080
