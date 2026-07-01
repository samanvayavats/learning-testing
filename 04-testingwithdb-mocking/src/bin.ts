import { connectDataBase } from "./db/index.js";
import { app } from "./index.js";

const main = async () =>{
    await connectDataBase();
    app.listen(5000, () => {
        console.log('the app is running at ', 500);
    });
};

main();