import openai

openai.api_key = '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#'

def get_responses(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response['choices'][0]['message']['content']

def chat():
    print('Hello! You are chatting with a BOT. Type "quit" to exit')
    while True:
        user_input = input("Human: ")
        if user_input.lower() == 'quit':
            break
        bot_response = get_responses(user_input)
        print("BOT: " + bot_response)

if __name__ == '__main__':
    chat()
