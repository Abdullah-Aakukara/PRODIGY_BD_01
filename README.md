# Prodigy InfoTech Internship - Task 01: CRUD REST API

## Project Overview

This project is a simple but complete CRUD (Create, Read, Update, Delete) REST API for managing a collection of users. It was developed as Task 01 for the Prodigy InfoTech Backend Developer Internship (October 2025).

The API is built with **Node.js** and the **Express.js** framework and uses an in-memory `Map` as a temporary database to store user data. It features full input validation and proper HTTP status codes for responses.

---

## Technologies Used

-   **Backend:** Node.js, Express.js
-   **Language:** JavaScript (ES6+)
-   **Package Manager:** npm

---

## API Endpoints

The following endpoints are available:

| Method | Endpoint      | Description                                |
| :----- | :------------ | :----------------------------------------- |
| `GET`  | `/users`      | Fetches a list of all users.               |
| `GET`  | `/users/:id`  | Fetches a single user by their unique ID.  |
| `POST` | `/users`      | Creates a new user with the provided data. |
| `PUT`  | `/users/:id`  | Updates an existing user's information.    |
| `DELETE`| `/users/:id`  | Deletes a user by their unique ID.         |

---

## Features

-   **Full CRUD Functionality:** Create, read, update, and delete user resources.
-   **Request Logging:** A custom middleware logs the method and URL of every incoming request to the console.
-   **Input Validation:** Robust validation for creating and updating users, ensuring required fields (`name`, `email`, `age`) are present and correctly formatted.
-   **Error Handling:** The API provides clear JSON error messages with appropriate HTTP status codes (e.g., `404 Not Found`, `400 Bad Request`).

---

## How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have Node.js and npm installed on your machine.
-   [Node.js](https://nodejs.org/)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Abdullah-Aakukara/PRODIGY_BD_01.git](https://github.com/Abdullah-Aakukara/PRODIGY_BD_01.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd PRODIGY_BD_01
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```
4.  **Start the server:**
    ```sh
    node index.js
    ```
The server will start running on `http://localhost:3000`.

---

This project was completed as part of my internship at **Prodigy InfoTech**.
