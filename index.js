require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
let progress = 0

app.use(bodyParser.urlencoded({ extended: true }))
const corsOptions = {
    origin: ['http://localhost:3000', 'https://ebookfront.herokuapp.com'],
    credentials: true,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hi! ^_^')
})

app.put('/upload/:sessionId', (req, res) => {
    console.log('res2', res)
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
    if (progress >= 100) {
        progress = 0
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