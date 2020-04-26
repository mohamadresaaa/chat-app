const dependable = require("dependable")
const path = require("path")

const container = dependable.container()

const simpleDependencies = [
    ["_", "lodash"]
]

simpleDependencies.forEach(value => {
    container.register(value[0], () => require(value[1]))
})

container.load(path.join(__dirname, "/controllers"))
container.load(path.join(__dirname, "/helpers"))

container.register("container", () => container)

module.exports = container