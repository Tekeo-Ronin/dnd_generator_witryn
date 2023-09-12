import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import uiRoute from "./ui/ui.route";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", uiRoute);

app.use('/resources', express.static(path.join(__dirname, 'public')));
app.use('views', express.static(path.join(__dirname, 'views')));

const mongoUri = "mongodb://localhost:270117/dnd_generator_witryn";
mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if(err) throw err;
    console.log("connected to mongodb");
})

app.set("view engine", "hbs");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is up and running in port ${PORT}`);
});