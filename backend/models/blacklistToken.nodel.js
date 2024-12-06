const mongoose = require('mongoose')
const { type } = require('os')

const blacklistTokenSchema =new mongoose.Schema({
    token: {
        type:String,
        required:true,
        unique:true
    },
    createAt:{
        type: Date,
        default:Date.now,
        expires: 86400
    }
})
module.exports = mongoose.model('BlackListToken',blacklistTokenSchema)