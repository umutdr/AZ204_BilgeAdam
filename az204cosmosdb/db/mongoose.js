var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.CUSTOMCONNSTR_mycosmosudrconstr, {
    useNewUrlParser: true,
    socketTimeoutMS: 5000,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => {
    console.log({ err });
  });

module.exports = { mongoose };
