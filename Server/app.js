import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(path.resolve(), "./build")));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(path.resolve(), "./build", "index.html"));
    console.log(req.url);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
