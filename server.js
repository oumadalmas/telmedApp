const express = require("express");
const db = require(`./database`);
const cookieParser = require(`cookie-parser`);
const { isAuthenticated } = require(`./middlewares/auth`);
const { isAuthenticateddoctororadmin } = require(`./middlewares/authdoctor`);
const router = require(`./routes/pages`);
const path = require(`path`);

const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.get(``, (req, res)=>{
    res.render(`index`)
});

app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(`/`, require(`./routes/pages`));
app.use(`/auth`, require(`./routes/auth`));

app.use(express.static(`./public`));
app.use(express.static(`./public/images`));

app.set(`view engine`, `hbs`);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})