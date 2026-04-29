const User = require("../models/User");
const bcrypt = require("bcryptjs");

const seedUsers = async () => {
  try {
    const users = [
      {
        name: "Admin User",
        email: "admin@test.com",
        password: await bcrypt.hash("123456", 10),
        role: "admin",
      },
      {
        name: "Manager User",
        email: "manager@test.com",
        password: await bcrypt.hash("123456", 10),
        role: "manager",
      },
    ];

    for (let user of users) {
      const exists = await User.findOne({ email: user.email });

      if (!exists) {
        await User.create(user);
        console.log(`${user.role} created`);
      } else {
        console.log(`${user.role} already exists`);
      }
    }

    console.log("Seeding done");
  } catch (error) {
    console.error(error);
  }
};

module.exports = seedUsers;