const mongoose = require("mongoose");

const dburl = "mongodb+srv://dinuk:12345@cluster0.w04hd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true);

const connection = async () => {
    try {
        await mongoose.connect(dburl); // No extra options needed for v4+
        console.log("MongoDB connected~");
    } catch (e) {
        console.error("Database connection error:", e.message);
        process.exit(1);
    }
};

module.exports = connection;
