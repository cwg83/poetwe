import express, { Request, Response, NextFunction } from "express";
import path from "path";
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

app.post("/api/auth", (req: Request, res: Response, next: NextFunction): void => {
  console.log('hitting api/auth')
  try {
    console.log(req.body)
    res.send("auth api");
  } catch (error) {
    next(error);
  }
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})