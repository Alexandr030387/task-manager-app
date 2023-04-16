const express = require('express')
require('./db/mongoose')
const userRouter = require('../src/routers/user')
const taskRouter = require('../src/routers/task')

const app = express()
const port = process.env.PORT

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

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     const user = await User.findById('643bc954771bfdaf028f2565')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()