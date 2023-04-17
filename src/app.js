const express = require('express')
require('./db/mongoose')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()

const multer = require('multer')

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 150000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.endsWith('.pdf')) {
            return cb(new Error('Please upload a PDF'))
        }

        return cb(undefined, true)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app