const mongoose = require('mongoose');

const serverSchema =  new mongoose.Schema({
    serverId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    joinedMemberCount: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    serverName: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    serverOwner: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    partnered: {
        type: mongoose.SchemaTypes.Boolean,
        required: true
    },
    verified: {
        type: mongoose.SchemaTypes.Boolean,
        required: true
    },
    nsfwLevel: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    joinedAt: {
        type: mongoose.SchemaTypes.Date,
        required: true
    },
    vanityURLCode: {
        type: mongoose.SchemaTypes.String,
    },
    inServer: {
        type: mongoose.SchemaTypes.Boolean,
        required: true
    }
});

module.exports = mongoose.model('Servers', serverSchema);