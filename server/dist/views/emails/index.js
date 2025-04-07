import express from 'express';
import "dotenv/config";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
const PORT = process.env.PORT || 7000;
app.get('/', (req, res) => {
    return res.render("welcome");
});
app.listen(PORT, () => {
    console.log('Server is running on Port');
});
