import mongoose from 'mongoose'

const SuiteSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    content: {
        required: false,
        type: String
    },
    tags: {
        requried: true,
        type: [String]
    }
})

module.exports = mongoose.model('suites', SuiteSchema)