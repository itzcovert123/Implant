const mongoose = require("mongoose")

const DB = process.env.DATABASE

mongoose.connect(DB).then(() => console.log('database connected')).catch((err) => {
    console.log(err, `error while connecting server`)
})