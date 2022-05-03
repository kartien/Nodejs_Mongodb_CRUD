import express from "express";
import exphbs from "express-handlebars";
import indexRouter from "./routes/index.routes";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

//Routes
app.use(indexRouter);

export default app;
