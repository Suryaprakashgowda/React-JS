# Axios Notes (React.js)

## What is Axios?

**Axios** is a popular JavaScript library used to make HTTP requests (API calls) from the browser or Node.js. It is commonly used in React applications to communicate with backend servers.

---

# Features of Axios

- Easy to use
- Automatically converts JSON data
- Supports GET, POST, PUT, PATCH, DELETE requests
- Better error handling
- Supports request & response interceptors
- Supports request cancellation
- Supports async/await

---

# Installation

```bash
npm install axios
```

---

# Import Axios

```javascript
import axios from "axios";
```

---

# HTTP Methods

| Method | Purpose |
|---------|----------|
| GET | Retrieve data |
| POST | Insert new data |
| PUT | Update entire data |
| PATCH | Update partial data |
| DELETE | Delete data |

---

# GET Request

```javascript
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </>
  );
}
```

---

# POST Request

```javascript
const data = {
  name: "Surya",
  email: "surya@gmail.com"
};

axios
  .post("http://localhost:3000/users", data)
  .then(() => {
    console.log("Data Added Successfully");
  })
  .catch((err) => {
    console.log(err);
  });
```

---

# PUT Request

```javascript
const updatedUser = {
  name: "Surya",
  email: "new@gmail.com"
};

axios.put(
  "http://localhost:3000/users/1",
  updatedUser
);
```

---

# PATCH Request

```javascript
axios.patch(
  "http://localhost:3000/users/1",
  {
    email: "new@gmail.com"
  }
);
```

---

# DELETE Request

```javascript
axios.delete("http://localhost:3000/users/1");
```

---

# Async/Await Example

```javascript
import axios from "axios";

async function getUsers() {
  try {
    const response = await axios.get(
      "http://localhost:3000/users"
    );

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}
```

---

# Axios Response Object

```javascript
axios.get(url)
.then((response) => {
    console.log(response);
});
```

Important Properties

```javascript
response.data
response.status
response.statusText
response.headers
response.config
```

Example

```javascript
axios.get("http://localhost:3000/users")
.then((res)=>{
    console.log(res.data);
});
```

---

# Error Handling

```javascript
axios.get(url)
.then((res)=>{
    console.log(res.data);
})
.catch((err)=>{
    console.log(err);
});
```

---

# Axios vs Fetch

| Axios | Fetch |
|--------|--------|
| External Library | Built-in Browser API |
| Requires Installation | No Installation |
| Auto JSON Parsing | Need res.json() |
| Better Error Handling | Manual Error Handling |
| Cleaner Syntax | More Code |
| Supports Interceptors | No |

---

# Advantages

- Easy syntax
- Automatic JSON conversion
- Supports CRUD operations
- Better error handling
- Works with async/await
- Supports interceptors
- Supports request cancellation

---

# Disadvantages

- External library
- Must install separately
- Slightly increases project size

---

# Interview Questions

### What is Axios?

Axios is a promise-based JavaScript library used to make HTTP requests from the browser or Node.js.

---

### Why Axios over Fetch?

- Automatic JSON parsing
- Better error handling
- Cleaner syntax
- Supports interceptors
- Supports request cancellation

---

### How do you install Axios?

```bash
npm install axios
```

---

### How to import Axios?

```javascript
import axios from "axios";
```

---

### What is `response.data`?

It contains the actual data returned by the API.

---

### Which HTTP methods are supported by Axios?

- GET
- POST
- PUT
- PATCH
- DELETE

---

# Easy Memory Trick

GET    → Read Data 📖

POST   → Create Data ➕

PUT    → Replace Data ✏️

PATCH  → Update Specific Field 🔄

DELETE → Remove Data ❌