const bodyParser = require("ejs")
const ejs = require("ejs")
const express = require("express")
const http = require("http")
const container = require("./container")

container.resolve(() => {
    const app = setupExpress()

    const setupExpress = () => {
        const server = http.createServer(express())
        server.listen(3000, () => console.log("port 3000"))
    }
})