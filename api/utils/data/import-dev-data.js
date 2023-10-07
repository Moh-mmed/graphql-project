import { readFileSync } from "fs";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import { connect } from "mongoose";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

dotenv.config({ path: "./../../config.env"});
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connecting To The DB
connect(DB)
  .then(() => {
    console.log("Connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
    console.log("Connection Failed");
  });

// READ JSON FILE
const products = JSON.parse(
  readFileSync(`${__dirname}/products.json`, "utf-8")
);
const users = JSON.parse(readFileSync(`${__dirname}/users.json`, "utf-8"));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await User.create(users);
    await Product.create(products);
    console.log("Data Successfully Loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// Delete All Data In DB
const deleteData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data Successfully Deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === "--delete") {
  deleteData();
} else if (process.argv[2] === "--import") {
  importData();
}