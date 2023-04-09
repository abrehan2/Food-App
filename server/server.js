// GENERALS -
const app = require("./app");
const PORT = process.env.PORT || 9500;
const connectDB = require("./config/database");

// CONNECT DATABASE -
connectDB();

// FOR DEPLOYMENT -
app.get("/", (req, res) => {
  res.send("<h1>Processing</h1>");
});

// SERVER -
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}, in ${process.env.NODE_ENV}mode.`
  );
});
