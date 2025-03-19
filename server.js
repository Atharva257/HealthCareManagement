const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const appointmentRoutes = require("./routes/appointmentRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/appointments", appointmentRoutes);

app.use("/api/doctors", doctorRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/users", require("./routes/userRoutes"));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
