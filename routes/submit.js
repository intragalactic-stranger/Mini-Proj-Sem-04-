const express = require("express")
const cors = require("cors")
const path = require("path")
const { MongoClient } = require("mongodb")
const { CONNECTION } = require("../var")

const uri = CONNECTION

const router = express.Router()

router.use(cors({
    origin: "*",
}))
router.use(express.json())
router.use(express.static(path.join(__dirname, '/public')))
router.use(express.static(path.join(__dirname, '/public/css')))
router.use(express.static(path.join(__dirname, '/public/js')))

router.get("/", (req, res) => {
    res.status(200).sendFile("submit.html", { root: path.join(__dirname, "../public/pages/") })
})
router.post("/racer", (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const racer = client.db("myFirstDatabase").collection("c1")
    const insert = async (data) => {
        try {
            await client.connect();
            let result = await racer.insertOne(data)
            res.status(200).send("Data submitted")
            console.log(`_id : ${result.insertedId}`);
        } finally {
            client.close();
        }
    }
    insert(req.body).catch(console.log("An error occured, please refresh and try again"))
})

module.exports = router