from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def reverse_string():
    reversed_string = ""
    if request.method == "POST":
        user_input = request.form.get("input_string")
        reversed_string = user_input[::-1]
    rendered_template = render_template("index.html", reversed_string=reversed_string)
    with open("docs/index.html", "w") as file:
        file.write(rendered_template)
    return "Static files generated successfully!"

if __name__ == "__main__":
    app.run()
