import functions from "firebase-functions";
import express from "express";
import cors from "cors"
import {addNewBeer, getAllBeers} from "./src/beer.js"


const app = express();
app.use(cors())
app.use(express.json())

app.post("/beers", addNewBeer)
app.get("/beers", getAllBeers)

export const api = functions.https.onRequest(app)




