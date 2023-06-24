var createError = require("http-errors");
var express = require("express");
var cors = require("cors");

var codesRouter = require("./routes/codes");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/code/run", codesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

app.listen(8090, () => console.log("Server started on port 8090"));

module.exports = app;
