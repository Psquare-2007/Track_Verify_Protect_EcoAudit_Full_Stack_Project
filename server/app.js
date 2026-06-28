import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import wasteRoutes from "./routes/wasteRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api/waste", wasteRoutes);

app.get("/", (req, res) => {
    res.send("EcoAudit Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});