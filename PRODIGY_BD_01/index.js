const express = require('express');
const app = express();
const PORT = 3000;

// Request Parser
app.use(express.json());

// Users HashMap (Resource)
const users = new Map();

// Initialize users HashMap with some users
users.set(101, {
    UUID: 101, 
    name: 'Rahul',
    age: 23,
    email: 'rahul007@gmail.com'
});

users.set(102, {
    UUID: 102, 
    name: 'Rosy',
    age: 21,
    email: 'rosymeghani@gmail.com'
});

users.set(103, {
    UUID: 103, 
    name: 'Sahil',
    age: 25,
    email: 'sahildude@gmail.com'
});

users.set(104, {
    UUID: 104, 
    name: 'Abdul',
    age: 20,
    email: 'abdul@gmail.com'
});

// Count next id from 105
let nextId = 105;

// Logger Middleware 
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.originalUrl}`);
    next();
});

// Special param middleware
app.param('id', (req, res, next, value) => {

    if (users.has(Number(value))) {
        req.userId = Number(value);
        next();
    } else {
        res.status(404).json({error: 'Invalid Request, ID not found!'});
    }
})



// Validation Middleware
   const requestBodyValidationMiddleware = (req, res, next) => {
         
    if (typeof(req.body) !== 'object' || !req.body || Array.isArray(req.body)) {
        res.status(400).json({
            error: 'Sumbitted User must contain non-null object'
        })
        return;
    }
    next();
}



// Express Routes for CRUD Operations
// GET all /users
app.get('/users', (req, res) => {
    res.status(200).json(Array.from(users.values()));
});

// Route for single user /users/:id
app.get('/users/:id', (req, res) => {
    res.status(200).json(users.get(req.userId));
});

// POST (create) new user
app.post('/users', requestBodyValidationMiddleware, (req, res) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {name, age, email} = req.body;
    const requiredProperties = ['name', 'age', 'email'];
        
    if (!(typeof(age) === 'number' && age > 0 && emailRegex.test(email) && name !== '')) {
            res.status(400).json({error: 'Enter valid information!'})
            return;
    }
    
	const newUser = {
        UUID: nextId,
        name, 
        age, 
        email      
    }

    users.set(newUser.UUID, newUser)
    nextId++;

    res.status(201).json(newUser);
})

// Route for updating an existing user
app.put('/users/:id', requestBodyValidationMiddleware, (req, res) => {

    const {name, age, email} = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!(typeof(age) === 'number' && age > 0 && name !== '' && emailRegex.test(email))) {
        res.status(400).json({ error: 'Invalid Credentials, check name, age and email!'})
        return;
    } 
    
    const updatedUser = {
        UUID : req.userId, 
        name, 
        age, 
        email
    };

    users.set(req.userId, updatedUser)
    res.status(200).json(updatedUser);
    
})

// Route for deleting a User
app.delete('/users/:id', (req, res) => {
    users.delete(req.userId);
    res.status(200).json( `User with UUID:${req.userId} has been deleted successfully!`);
})
app.listen(PORT, () => {
    console.log('Server is running on PORT No.' + PORT);
})