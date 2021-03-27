import express from "express";
import routes from "./shared/infra/http/routes";

import "./assets/scripts";

const app = express();

app.use(routes);

app.listen(3333, () => {
    console.log('Backend started!');
});