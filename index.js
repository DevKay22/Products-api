const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.status(201).send({msg: "Welcome Kay!"})
})

const mockUsers = [
    { id: 1, name: "john", username: "john123" },
    { id: 2, name: "ben", username: "ben123" },
    { id: 3, name: "hope", username: "hope123" },
    { id: 4, name: "kay", username: "kay234" },
]
app.get('/api/users', (req, res) => {
    res.send(mockUsers)
})

app.get('/api/users/:id', (req, res) => {
    console.log(req.params);

    const parsedID = parseInt(req.params.id);
    if (isNaN(parsedID)) 
        return res.status(400).send({ msg: "Bad request. Invalid ID!!!"})

    const findUser = mockUsers.find((user) => 
        user.id === parsedID)
    if (!findUser)
        return res.sendStatus(404);
    return res.send(findUser);
    } 

    

);

app.get("/api/v1/products", (req, res) => {
    res.status(202).send([
        { id: 1, product: "Gucci Bag", price: "$100"},
        { id: 2, product: "Nike Shoes", price: "$150"},
        { id: 3, product: "Adidas Shoes", price: "$120"},
        { id: 4, product: "Puma Shoes", price: "$180"},
        { id: 5, product: "Reebok Shoes", price: "$160"},
    ])
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})