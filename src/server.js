/* eslint-disable import/first */
import dotenv from "dotenv";
import { bold, green } from "ansi-colors";

dotenv.config();

import app from "./app";

const { APP_PORT = 3000 } = process.env;
app.listen(APP_PORT, () => {
  console.info(`🚗${bold("Rentalcars")} running on ${green(`http://localhost:${APP_PORT}`)}\n`);
});
