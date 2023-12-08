/* Este index es el encargado de arrancar la aplicacion */

import { app } from "./app.js";
import { PUERTO } from "./config.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(PUERTO);
console.log("Server is on port", PUERTO);
