

// apiKey = "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"
apiKey="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";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
// const axios= require('axios');
// const mongoose = require('mongoose')

const app = express();
// const { OPENAI_API_KEY } = process.env;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
const configuration = new Configuration({
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

let phrases=[
    {"phrase":"A journey of a thousand miles begins with a single step" ,"likes":0},
    {"phrase":"In the midst of chaos, there is also opportunity" ,"likes":0},
    {"phrase":"The best way to predict the future is to create it" ,"likes":0}


]

// mongo_url = "mongodb+srv://sarae:1234@serverdb.zth5sjz.mongodb.net/?retryWrites=true&w=majority"

// mongoose.set('strictQuery', false)
// mongoose.connect(mongo_url)


// const imageSchema = new mongoose.Schema({
//     image_text: String,
//     image_url: String,
// })

// const Image = mongoose.model('Image', imageSchema)

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.get('/get',async(req,res)=>{
    try{
        const response = await openai.createImage({
            prompt: 'random',
            n: 1,
            size: "512x512",
        });
        const res1={
            "img":response.data.data[0].url,
            "prs":phrases[Math.floor(Math.random()*phrases.length)]
        }
        console.log(res1);
        res.send("hii")


    }catch(err){
       res.send(err.message+" error");
    }
})

// app.get("/get/:image", async (req, res) => {
//     let prompt = req.params.image
//     console.log(prompt)
//     try {
//         const response = await openai.createImage({
//             prompt,
//             n: 1,
//             size: "512x512",
//         });
//         console.log("djks;ls");
       
//         console.log(response.data.data[0].url);
//         res.send(response.data.data[0].url);
//     } catch (err) {
//         res.send(err.message+" error");
//     }

// });

// app.get('/get', async (req, res) => {
//     console.log(req.body+"req");
//      prompt="random";
  
//     try {
//         const response = await openai.createImage({
//             prompt,
//             n: 1,
//             size: "512x512",
//         });
//         console.log("ks");
        
//         const res1={
//             "img":response.data.data[0].url,
//             "prs":phrases[Math.floor(Math.random()*phrases.length)]
//         }
//         // let res1="lkdlk"
//         console.log(res1+"res1");
        
//         res.send(res1);

//     } catch (err) {
//         console.log("erorrr")
//         res.send(err.message);
//     }

// });
// app.get("/get/image", async (req, res) => {
//     console.log(req.body+"req");
//     prompt="random";
//     try {
//         const response = await openai.createImage({
//             prompt,
//             n: 1,
//             size: "512x512",
//         });
//         console.log("ks");
        
//         const res1={
//             "img":response.data.data[0].url,
//             "prs":phrases[Math.floor(Math.random()*phrases.length)]
//         }
//         console.log(res1+"res1");
        
//         res.send(res1);

//     } catch (err) {
//         res.send(err.message);
//     }

// });
app.post('/post', async(req,res)=>{
    let phrase={"phrase":req.body["text"],"likes":0};
    phrases.push(phrase);
});


app.get("/getAll/:image", async (req, res) => {
    let prompt = req.params.image
    console.log(prompt)
    try {
        
        result = await Image.find({image_text:prompt})
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }

});





app.listen(3000, () => {
    console.log("server started");
});