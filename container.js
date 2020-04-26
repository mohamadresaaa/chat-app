const dependable = require("dependable")
const path = require("path")

const container = dependable.container()

const simpleDependencies = [
    ["_", "lodash"]
]

simpleDependencies.forEach(value => {
    container.register(value[0], () => require(value[1]))
})