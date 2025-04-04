import express from 'express'

const router = express.Router();

let users = [
    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
]

router.get('/', (req, res)=>{
    res.send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const forUser = users.find((user) => user.id == id);
    res.send(forUser);
});

router.post('/users', (req, res)=>{
    const user = req.body;
    users.push(user);
    res.send(users);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    const foundUser = users.find((user) => user.id == id);
    Object.assign(foundUser, newUser);
    res.send(users);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, email, last_name, avatar } = req.body;
    const found = users.find((user) => user.id == id);
    if(first_name){
        found.first_name = first_name;
    } else {
        console.error("Error");
    }
    if(email){
        found.email = email;
    } else {
        console.error("Error");
    }
    if(last_name){
        found.last_name = last_name;
    } else {
        console.error("Error");
    }
    if(avatar){
        found.avatar = avatar;
    } else {
        console.error("Error");
    }
    res.send(users);
});

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    const foundUser = users.findIndex((user) => user.id == id);
    users.splice(foundUser, 1);
    res.send(users);
})

export default router;
