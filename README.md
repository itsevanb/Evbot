# Smarter-Chatbot
 ChatGPT API4 will be used 
pushed to replit feel to try at: https://evbot.itsevanb26.repl.co/
My ChatBot
This project is a web-based chatbot powered by OpenAI's GPT-4 model. It's built using Flask for the backend and uses JavaScript/jQuery for handling the frontend and AJAX requests.

Getting Started
These instructions will guide you on how to run this project both locally and on a server like AWS.

Prerequisites
You will need the following installed:

Python 3.7 or later
Flask
OpenAI Python library
Local Installation
Clone the repository to your local machine:
bash
git clone https://github.com/yourusername/mychatbot.git
cd mychatbot
Install the required Python libraries:
bash
pip install -r requirements.txt
Create a config.py file to store your OpenAI API key:
python
OPENAI_API_KEY = 'your-api-key-here'
Make sure to replace 'your-api-key-here' with your actual OpenAI API key. This file should not be added to version control.

Run the Flask app:
bash
python app.py
Open your web browser and go to http://localhost:8080/ to interact with the chatbot.
Deployment to AWS
The process for deploying to AWS may vary depending on the specifics of your AWS setup, but here are the general steps:

Create an AWS EC2 instance with a Python environment.
Clone the repository into the EC2 instance.
Install the required Python libraries.
Set the OpenAI API key as an environment variable.
Run the Flask app.
Please refer to the official AWS documentation or other specific guides for detailed instructions.

Project Structure
app.py - The main Flask application file. It handles incoming requests and communicates with the OpenAI API.
templates/ - This directory contains the HTML templates for the application.
static/ - This directory contains the CSS and JavaScript files for the application.
Contributing
If you have suggestions for how MyChatBot could be improved, or want to report a bug, open an issue! Contributions of all kinds are welcomed!

For more, check out the Contributing Guide.

License
MIT © Evan Betley
