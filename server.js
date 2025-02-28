const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Sumedh! 🚀 Your Express server is running!");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
