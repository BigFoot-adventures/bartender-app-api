import express from "express";
import cors from "cors";

import { Cocktail } from "./models/cocktail";

let port = 3000;

let cocktails: Cocktail[] = [
    {
        "name": "Margarita",
        "ingredients": [
            "2 oz Tequila",
            "1 oz Lime juice",
            "1 oz Triple sec",
            "Salt"
        ],
        "instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."
    },
    {
        "name": "Cosmopolitan",
        "ingredients": [
            "1.5 oz Vodka",
            "1 oz Cranberry juice",
            "0.5 oz Lime juice",
            "0.5 oz Triple sec"
        ],
        "instructions": "Shake all ingredients with ice and strain into a cocktail glass."
    },
    {
        "name": "Old Fashioned",
        "ingredients": [
            "2 oz Bourbon or Rye whiskey",
            "2 dashes Angostura bitters",
            "1 Sugar cube",
            "Few dashes plain water"
        ],
        "instructions": "Muddle the sugar cube and bitters with a few drops of water in an Old Fashioned glass. Fill the glass with ice cubes and add the whiskey. Stir."
    },
    {
        "name": "Mojito",
        "ingredients": [
            "2 oz White rum",
            "1 oz Lime juice",
            "2 tsp Sugar",
            "6-8 Fresh mint leaves",
            "Soda water"
        ],
        "instructions": "Muddle the mint leaves and sugar with a splash of soda water in a glass. Squeeze the lime juice into the glass, add the rum, and fill the glass with ice. Top off with soda water and stir gently."
    },
    {
        "name": "Piña Colada",
        "ingredients": [
            "2 oz White rum",
            "2 oz Coconut cream",
            "4 oz Pineapple juice"
        ],
        "instructions": "Blend all the ingredients with ice until smooth. Pour into a chilled glass and garnish with a pineapple slice and a cherry."
    }
]
let orders: Cocktail[] = [
    {
        "name": "Margarita",
        "ingredients": [
            "2 oz Tequila",
            "1 oz Lime juice",
            "1 oz Triple sec",
            "Salt"
        ],
        "instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."
    }
];

let app = express();
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.json());

// get menu
app.get("/menu", (req, res) => {
    res.json(cocktails);
});

// get order queue
app.get("/orders", (req, res) => {
    res.send(orders);
});

// create new order
app.post("/orders", (req, res) => {
    let order = req.body;
    orders.push(order);
    res.send({message: "Order received"});
});

// remove completed order
app.get("/orders/completed", (req, res) => {
    res.send(orders.shift());
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});