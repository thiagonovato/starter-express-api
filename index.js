const express = require('express')
const app = express()

app.use(express.json())

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Olá Mundo!')
})

app.post("/api", (req, res) => {
    console.log(req.body)
    const result = {
        status: "ok",
        code: 200,
        date: new Date(),
        message: req.body
    }

    res.send(result)
})
app.listen(process.env.PORT || 3000)