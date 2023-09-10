const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });

  // Below code commented as catch we have removed because it is being handled as Unhandled Promise Rejection
  // mongoose
  //   .connect(process.env.DB_URI)
  //   .then((data) => {
  //     console.log(`Mongodb connected with server: ${data.connection.host}`);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

module.exports = connectDatabase;
