const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true}, (err, data) => {
    if(err) console.log('Mongoose Connection Error------', err);
    // console.log('data---------', data);
});
//Define your team model structure.
const team = new Schema({
    teamName: String,
    city: String,
    superBowls: Number,
    bestPlayer: String
});
//Now export your team variable with our mongoose model.
export const Team = mongoose.model('Team', team);
