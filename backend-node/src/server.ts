import app from "./shared/infra/http/app";

import "./assets/scripts";

app.listen(3333, () => {
    console.log('Backend started!');
});