const express=require("express"),db=require("./database/database");require("./models/Note");
const app=express();app.use(express.json());app.use("/notes",require("./routes/notes"));
app.use((e,q,s,n)=>s.status(e.name==="SequelizeValidationError"||e instanceof SyntaxError?400:500).json({error:e.message}));
db.sync().then(()=>app.listen(process.env.PORT||3000,()=>console.log("http://localhost:3000")));
