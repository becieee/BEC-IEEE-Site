const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter =require("./routes/auth-routes")

require("dotenv").config(); // Load environment variables from .env file

mongoose
  .connect("mongodb+srv://webmasterbecieee1994:mKbiCNVpGUTb8etu@cluster0.9zi2g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));
  // process.env.MONGO_URI
const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.json("hello");
});

app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRouter);
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));