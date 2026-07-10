const githubRoutes = require("./routes/githubRoutes");
const leetcodeRoutes = require("./routes/leetcodeRoutes");
const analysisRoutes = require("./routes/analysisRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/github", githubRoutes);
app.use("/leetcode", leetcodeRoutes);
app.use("/analyze-profile", analysisRoutes);

app.get("/", (req, res) => {
    res.send("🚀 LearnMate Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});