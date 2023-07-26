require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static('client'));

let phrases=[
    {"phrase":"A journey of a thousand miles begins with a single step" ,"likes":0},
    {"phrase":"In the midst of chaos, there is also opportunity" ,"likes":0},
    {"phrase":"The best way to predict the future is to create it" ,"likes":0},
    {"phrase":"never say never" ,"likes":0},
    {"phrase":"hello world" ,"likes":0},
    {"phrase":"The book was on the table" ,"likes":0},
    {"phrase":"We camped by the brook" ,"likes":0},
    {"phrase":"He knew it was over the rainbow" ,"likes":0},
    {"phrase":"She was lost in the dark of night" ,"likes":0},
    {"phrase":"He was between a rock and a hard place" ,"likes":0},
    {"phrase":"I waited for a while" ,"likes":0},
    {"phrase":"She smelled of strawberries and cream" ,"likes":0},
    {"phrase":"He won the challenge against all odds" ,"likes":0}

]
let images = ["https://images.unsplash.com/photo-1690148136337-2304c30b5420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1690197104559-231ea4d93298?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=771&q=80"
,"https://images.unsplash.com/photo-1690177930724-2aef91b1d2f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1690177930780-6b3c800a2f57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1690148136337-2304c30b5420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1690112018874-08cb5933648f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
,"https://images.unsplash.com/photo-1582198239434-c9752603da1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1688063969434-e81d6b2d3a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1603077787992-7efca4cdffa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=346&q=80"
,"https://images.unsplash.com/photo-1651062108412-36a68f3748dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
,"https://images.unsplash.com/photo-1601883165851-208729ce4b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
,"https://images.unsplash.com/photo-1610631210464-d3df3b970de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
,"https://images.unsplash.com/photo-1612219890950-afddcc6fcf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1487460966527-a9c5c7b16625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=493&q=80"
,"https://images.unsplash.com/photo-1465479499730-d2c36f03ef87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
,"https://images.unsplash.com/photo-1663481083247-d16f74e6b059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1542773049-ccc00e2a69d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1552624189-cf10026a305b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
,"https://images.unsplash.com/photo-1688464592993-974c88086521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1688901724018-8fe3a444312d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1688841471400-bd611ad83b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1688651139745-606898a43b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1688744310248-64ac4d0c766e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1688634254595-714b709f50ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=390&q=80"
,"https://images.unsplash.com/photo-1689749160960-3a6d965d0fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=342&q=80"
,"https://images.unsplash.com/photo-1689657074131-ae13b6b4e9c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1688143695340-4d4c4c491bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=441&q=80"
,"https://images.unsplash.com/photo-1689427147115-ee9ea359b658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1678542806833-f4e6be5c9f29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://plus.unsplash.com/premium_photo-1661591436759-3a471d5d1b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1682336869523-2c6859f781cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://plus.unsplash.com/premium_photo-1678051339094-8fdc47a91e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://plus.unsplash.com/premium_photo-1680087006074-b615c3108bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
,"https://images.unsplash.com/photo-1613591797540-862e54975da8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
,"https://plus.unsplash.com/premium_photo-1686904394657-f7ea270c8161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
,"https://plus.unsplash.com/premium_photo-1686904395497-ef4e38fc551b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://plus.unsplash.com/premium_photo-1670270204756-d53bd70589a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://plus.unsplash.com/premium_photo-1683892045230-49e7b7a0912e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
,"https://images.unsplash.com/photo-1689198163336-c18bbdec27dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1688877275094-d56606d9ca02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1688587737809-d9dabcad1bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,"https://images.unsplash.com/photo-1686749534352-cd3c37b744d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
,"https://images.unsplash.com/photo-1687027054090-f65b0e5cb2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=385&q=80"
,"https://images.unsplash.com/photo-1690138500311-2edf767bbbbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
]

app.get('/get',async(req,res)=>{
    try{
        const res1={
            "img": images[Math.floor(Math.random()*images.length)],
            "prs":phrases[Math.floor(Math.random()*phrases.length)]
        }
        res.send(res1);
       

    }catch(err){
       res.send(err.message);
    }
})



app.post('/post', async(req,res)=>{
    let phrase={"phrase":req.body["text"],"likes":0};
    phrases.push(phrase);
});



app.put("/put/:prs", async (req, res) => {
    const resourceId = req.params.prs;
    const newData = req.body["updLike"];
    try {
        const foundObject = phrases.find(obj => obj.phrase === resourceId);
        if (foundObject) {
            foundObject.likes = newData;
        }
        res.send("updated successfully");
    } catch (err) {
        res.send(err.message);
    }

});


app.listen(8080, () => {
    console.log("server started");
});