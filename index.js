const express = require("express")
const app = express()
const port = 5000
const cors = require('cors')
const category = require("./category.json")
const courses = require("./courses.json")

app.use(cors())


app.get("/category/:id", (req, res) => {
    res.send(category)
})

app.get("/courses", (req, res) => {
    res.send(courses)
})

app.get("/courses/:id", (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.find(cource => cource.id == id)
    res.send(selectedCourse)
})

app.get("/courses/category/:id", (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.filter(cource => cource.category == id)
    res.send(selectedCourse)
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })