const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jmliquors"
);

const itemSeed = [
  {
    name: "Tester",
    type: "Beer",
    description:
      "Its beer what did you expect?",
    price: 12
  }
];

db.Item
.remove({})
  .then(() => db.Item.collection.insertOne(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
