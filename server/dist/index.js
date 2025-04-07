import express from 'express';
import "dotenv/config";
import path from "path";
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views")); // /views is root, not /views/emails
const PORT = process.env.PORT || 7000;
// Route
app.get('/', async (req, res) => {
    await emailQueue.add(emailQueueName, { to: "shivamkanojiya88@gmail.com", subject: "testing queue email", body: "sabji samosa" });
    //   res.render("emails/welcome", { name: "Kanoj" });
    return res.json({ msg: "Emial send successfully" }); // ✅ pass name here
});
import "./jobs/index.js";
import { emailQueue, emailQueueName } from './jobs/EmailJob.js';
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
