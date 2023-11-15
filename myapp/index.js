const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello world 1234"
  })
})

app.listen(process.env.PORT, () => console.log(`application has been deployed at ${process.env.PORT}`))