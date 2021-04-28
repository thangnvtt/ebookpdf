require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
let progress = 0

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
})

app.get('/', (req, res) => {
    res.send('Hi! ^_^')
})

app.post('/upload/:sessionId', (req, res) => {
    res.json({
        "data": {
            "file": "a.mobi",
            "file_size_human": "227K"
        },
        "id": "o_1f498sbtgacokpl1npv7h01kf4b",
        "jsonrpc": "2.0",
        "result": null
    })
})

app.get('/convert/:sessionID/:idFile', (req, res) => {
    res.json({ status: 'success' })
})


app.get('/status/:sessionID/:fid', (req, res) => {
    const sessionID = req.params.sessionID
    const fid = req.params.fid
    progress += 50
    if (progress === 100) {
        return res.json({ "convert_result": "a.pdf", "fid": fid, "progress": progress, "savings": null, "sid": sessionID, "status": "success", "thumb_url": "\/files\/zz18t2ir0xtby9h7\/o_1f49a0l7uafgac61esc1j4h1d1tl\/thumb.png?halt" })
    }
    res.json({ "fid": fid, "progress": progress, "sid": sessionID, "status": "processing", "status_text": null })
})

app.get('/download/:sessionID/:fid/:fname', (req, res) => {
    res.download(path.resolve('example.pdf'))
})

app.get('/all/:sessionID/:fname', (req, res) => {
    res.download(path.resolve('example.pdf'))
})

app.listen(port, () => {
    console.log('Server is running', port)
})