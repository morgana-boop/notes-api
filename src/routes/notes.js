const r=require("express").Router(),N=require("../models/Note");
const f=async(q,s)=>{const n=await N.findByPk(q.params.id);if(!n)s.status(404).json({error:"not found"});return n};
const p=b=>{const{title,content}=b??{};return{...(title!==undefined&&{title}),...(content!==undefined&&{content})}};
r.get("/",async(q,s)=>s.json(await N.findAll()));
r.get("/:id",async(q,s)=>{const n=await f(q,s);n&&s.json(n)});
r.post("/",async(q,s)=>s.status(201).json(await N.create(p(q.body))));
r.put("/:id",async(q,s)=>{const n=await f(q,s);n&&s.json(await n.update(p(q.body)))});
r.delete("/:id",async(q,s)=>{const n=await f(q,s);if(n){await n.destroy();s.status(204).end()}});
module.exports=r;
