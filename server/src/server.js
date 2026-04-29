require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");

const seedUsers = require("./utils/seedUsers");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await seedUsers();

  } catch (error) {
    console.error("DB Error:", error);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});