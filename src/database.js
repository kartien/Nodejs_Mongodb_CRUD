import  {connect} from "mongoose";

(async () => {

    try {
        const db = await connect("mongodb://localhost:27017/data")
        console.log('DB connectd to', db.connection.name)
    } catch (error){
        console.log(error)
    }

})();








