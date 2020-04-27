const bodyParser = require("ejs")
const ejs = require("ejs")
const express = require("express")
const http = require("http")
const container = require("./container")

container.resolve((users) => {
    const app = setupExpress()

    const setupExpress = () => {
        const server = http.createServer(express())
        server.listen(3000, () => console.log("port 3000"))
    }

    // Setup router
    const router = require("express-promise-router")()
    users.setRouting(router)

    // Use router
    app.use(router)
})