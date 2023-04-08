import { db } from "./dbConnect.js";

const coll = db.collection("beers");

export async function addNewBeer(req, res) {
  const newBeer = req.body;

  await coll.add(newBeer);
  res.status(201).send("added beer");
}

export async function getAllBeers(req, res) {
  const collection = await coll.get();

  const beers = collection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  res.send(beers);
}
