const mongoose = require('mongoose')

const connectmgDB = async () => {
    try {
        // process.env.MONGO_UR
        await mongoose.connect(`mongodb+srv://admin:next123456@cluster0.5s2mq.mongodb.net/program` )
        /* ,{
            useNewUrlParser:true
        } */
        //await mongoose.connect('mongodb://127.0.0.1:27017/testmgo')
        console.log('MongooseDB Connected')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectmgDB