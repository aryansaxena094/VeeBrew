## VeeBrew

VeeBrew is a simple newsletter signup website built using Node.js, Express.js, and Mailchimp API to collect users' emails and sign them up for newsletters. The website consists of three pages, the homepage containing the signup form, a success page displayed when users sign up successfully, and a failure page displayed when something goes wrong.

## Technologies used

- **Node.js** - a JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js** - a minimal and flexible Node.js web application framework.
- **Mailchimp API** - a RESTful API to manage Mailchimp marketing platform's functionality and integrate it into other systems.
- **Bootstrap** - a popular front-end framework to design responsive and mobile-first websites using HTML, CSS, and JavaScript.
- **Body-parser** - a middleware to parse incoming request bodies in a middleware before your handlers.
- **HTTPS** - a module in Node.js to implement HTTPS (HTTP Secure) protocol for secure data transfer over the internet.
- **HTML** - a markup language to create web pages and other information that can be displayed in a web browser.
- **CSS** - a stylesheet language used to describe the presentation of a document written in HTML.
- **JavaScript** - a high-level programming language used to create dynamic, interactive web pages and applications.

## Installation and Usage

To use this application, you need to have Node.js installed on your local machine.

# Clone this repository on your local machine by running the following command:
`git clone https://github.com/<your_username>/VeeBrew.git`

In the project directory, run the following command to install the required dependencies:
`npm install`
Create a .env file in the root directory of the project and add the following environment variables:
`PORT=<your_port_number>
APP_KEY=<your_app_key>
LIST_ID=<your_list_id>`
Replace `<your_port_number>, <your_app_key>, and <your_list_id>` with your own values.

Run the following command to start the server:
`npm start`

Open your web browser and navigate to `http://localhost:<your_port_number>/` to view the homepage.

## Contributing
If you find any issues or bugs in this application, please feel free to submit an issue or pull request.

## License
This project is licensed under the MIT License.
