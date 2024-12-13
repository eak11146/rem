const mongoose = require('mongoose')

const connectmgDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:next123456@cluster0.5s2mq.mongodb.net/program`)
        //await mongoose.connect('mongodb://127.0.0.1:27017/testmgo')
        console.log('MongooseDB Connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectmgDB