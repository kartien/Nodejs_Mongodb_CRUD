import express from "express";
//import exphbs from "express-handlebars"
import {create} from "express-handlebars";
import indexRoutes from './routes/index.routes'
import path from "path"
import morgan from "morgan";

const app = express();

app.set('views', path.join(__dirname, 'views'));

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: 'main'
});

app.engine(".hbs", exphbs.engine)

app.set('view engine', '.hbs')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true}));

//Routes 
app.use(indexRoutes);

// static files
app.use(express.static(path.join(__dirname,  "public")));

export default app;