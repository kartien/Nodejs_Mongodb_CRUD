import express from "express";
import { create } from "express-handlebars";
import indexRouter from "./routes/index.routes";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "views"));

/*app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);*/
const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//Routes
app.use(indexRouter);

export default app;
