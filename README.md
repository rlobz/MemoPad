# MemoPad

## Description

This application, called MemoPad, is designed for writing, saving, and managing notes efficiently. It uses an Express.js backend to store and retrieve note data from a JSON file. The front end of the application is already developed, and the task was to build the backend, connect it with the front end, and deploy the application to Heroku.

![Gif demo of MemoPad](./Assets/11-express-homework-demo.gif)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [License](#license)
- [Credits](#credits)

## Installation

To install the necessary dependencies, run the following command:

    ```bash
    npm install
    ```
This will install Express.js and any other dependencies required for the project.

## Usage

After installation, run the server using:

    ```bash
    node server.js
    ```
Then, access the application in a web browser at `localhost:3000`.

## Features

- **Create Notes**: Users can enter a new note title and the note’s text in the right-hand column.
- **Save Notes**: A "Save Note" button allows users to save their notes, which then appear in the left-hand column.
- **Review Notes**: Clicking on an existing note displays it in the right-hand column for review.
- **Delete Notes**: Users can delete notes (Bonus feature).
- **Persistent Storage**: Notes are saved in a `db.json` file, allowing them to persist between server restarts.

## Deployment

This application is deployed on Heroku. [Click here for the live application](<https://memo-pad-369a08babb24.herokuapp.com/>).

## License

This project have no licence

## Credits

**Rafal Lobzowski**
- Github: [@rlobz](https://github.com/rlobz)
