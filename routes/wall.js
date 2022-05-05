const express = require("express")
const cors = require("cors")
const path = require("path")
const { MongoClient } = require('mongodb');
const { CONNECTION } = require("../var")

const uri = CONNECTION

const router = express.Router()

router.use(cors({
    origin: "*",
}))
router.use(express.static(path.join(__dirname, '/public')))
router.use(express.static(path.join(__dirname, '/public/css')))
router.use(express.static(path.join(__dirname, '/public/js')))

router.get("/", (req, res) => {
    res.status(200).sendFile("wall.html", { root: path.join(__dirname, "../public/pages/") })
})
router.get("/speedwall", async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const racer = client.db("myFirstDatabase").collection("c1")
    const get = async () => {
        try {
            await client.connect()
            racer.find({}).toArray((error, result) => {
                if (!error) {
                    let data = result
                    res.status(200).send(data)
                } else {
                    console.log(error);
                }
            })
        } finally {
            console.log("Process completed");
        }
    }
    get().catch(console.log("Error"))
})

module.exports = router