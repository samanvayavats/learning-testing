// you dont want to class between the port and restarting the server agian and again so u
// run the server in the another file 

import { app } from "./index.js";

app.listen(5000 ,()=>{
    console.log(`the port running at ${5000}`)
})