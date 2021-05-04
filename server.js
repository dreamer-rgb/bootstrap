const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 2345

const publicDir = path.join(__dirname,"./public")
app.use(express.static(publicDir))

app.set("view engine", "hbs")

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/contact", (req,res)=>{
    res.render("contact")
})


app.listen(port, ()=>{
    console.log(` Server running at port number ${port}`)
})