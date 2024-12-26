
# CRUD Application

A simple CRUD (Create, Read, Update, Delete) application built using **Node.js**, **Express**, **MongoDB**, **HTML**, **CSS**, and **JavaScript**. This app demonstrates how to manage data using a RESTful API and display it on a user interface.

---

## Features
- **Create**: Add new entries.
- **Read**: View all entries.
- **Update**: Edit existing entries directly on the UI.
- **Delete**: Remove entries.

---

## Technologies Used
- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
- **Backend**:
  - Node.js
  - Express
- **Database**:
  - MongoDB
- **Tools**:
  - Nodemon
  - Postman (for testing APIs)

---

## Project Structure
```
crud-app/
├── backend/
│   ├── controllers/
│   │   └── entryController.js
│   ├── models/
│   │   └── entryModel.js
│   ├── routes/
│   │   └── entryRoutes.js
│   ├── server.js
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   ├── index.html
├── package.json
├── README.md
```

---

## Installation and Setup
### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or Atlas)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crud-app.git
   cd crud-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB:
   - If using a local MongoDB server, ensure it is running on `mongodb://127.0.0.1:27017/`.

4. Run the backend server:
   ```bash
   cd backend
   nodemon server.js
   ```

5. Open the frontend:
   - Open `frontend/index.html` in a web browser.

---

## API Endpoints
| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| GET    | `/entries`      | Fetch all entries.   |
| POST   | `/entries`      | Add a new entry.     |
| PUT    | `/entries/:id`  | Update an entry.     |
| DELETE | `/entries/:id`  | Delete an entry.     |

---

## Contributing
Contributions are welcome! Fork the repository, make changes, and submit a pull request.

---

## License
This project is licensed under the MIT License.

---

## Contact
For inquiries or support, email **taimoorulhassansiddique.13@example.com**.
