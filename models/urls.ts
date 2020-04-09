const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    key: { type: String, required: true },
    url: { type: String, required: true },
});

export const Url = mongoose.model('Url', schema);
