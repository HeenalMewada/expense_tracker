# 💰 Expense Tracker

A full-stack web application to manage and track your daily expenses smartly. Built with **React** (frontend) and **PHP + MySQL** (backend).

---

## 🚀 Features

- 🔐 User Authentication (Login & Register)
- 📊 Dashboard with expense overview
- ➕ Add, edit, and delete expenses
- 📁 Category-wise expense management
- 📱 Responsive UI

---

## 🛠️ Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Frontend   | React.js, CSS     |
| Backend    | PHP               |
| Database   | MySQL             |
| Server     | Apache (XAMPP/WAMP) |
| Routing    | React Router DOM  |
| Icons      | React Icons       |

---

## 📁 Project Structure

```
expense-tracker/
├── tracker/
│   ├── backend/
│   │   ├── login.php
│   │   ├── register.php
│   │   ├── dashboard.php
│   │   └── db.php
│   └── src/
│       └── frontend/
│           ├── pages/
│           │   ├── Login.jsx
│           │   ├── Login.css
│           │   ├── Register.jsx
│           │   └── Dashboard.jsx
│           ├── App.jsx
│           └── main.jsx
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites

- [XAMPP](https://www.apachefriends.org/) or WAMP installed
- Node.js & npm installed
- Git (optional)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

---

### 2. Setup the Backend (PHP + MySQL)

1. Move the project folder to your XAMPP `htdocs` directory:
   ```
   C:/xampp/htdocs/expense-tracker/
   ```

2. Start **Apache** and **MySQL** from the XAMPP Control Panel.

3. Open [phpMyAdmin](http://localhost/phpmyadmin) and create a new database:
   ```sql
   CREATE DATABASE expense_tracker;
   ```

4. Import the SQL file (if provided):
   ```
   phpMyAdmin → expense_tracker → Import → select expense_tracker.sql
   ```

5. Update `tracker/backend/db.php` with your credentials:
   ```php
   $host = "localhost";
   $user = "root";
   $password = "";
   $database = "expense_tracker";
   ```

---

### 3. Setup the Frontend (React)

```bash
cd tracker/frontend
npm install
npm run dev
```

The app will run at: `http://localhost:5173`

---

## 🔗 API Endpoints

| Method | Endpoint                          | Description       |
|--------|-----------------------------------|-------------------|
| POST   | `/expense-tracker/tracker/backend/login.php`    | User login        |
| POST   | `/expense-tracker/tracker/backend/register.php` | User registration |
| GET    | `/expense-tracker/tracker/backend/dashboard.php`| Fetch expenses    |



### ❌ CORS Error
**Cause:** PHP backend not sending CORS headers.  
**Fix:** Add this to the top of your PHP files:
```php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
```

---

## 📸 Screenshots
<img width="1363" height="718" alt="image" src="https://github.com/user-attachments/assets/7609cc57-aeb5-4462-8dc0-a67366c46ee4" />


---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---



## 👨‍💻 Author

Made with ❤️ by Heenal Mewada  
GitHub: https://github.com/HeenalMewada/expense_tracker
