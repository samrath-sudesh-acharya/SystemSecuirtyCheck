const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/react-email")
  .then(() => {
    console.log("Mongo Db connectecd");
  })
  .catch((error) => {
    console.log("failed", error);
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);
module.exports = collection;
