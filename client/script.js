//const{ text1}=require('express');
let btn_image, text_image, image, loader

let search_txt, search_res, search_btn
function init() {
    search_txt = document.getElementById("search_txt")
    search_res = document.getElementById("search_res")
    image = document.getElementById("my_img")
    // text_image = document.getElementById("text_image")
    new_img=document.getElementById("new_img")
    text_add=document.getElementById("add")
    phrase=document.getElementById("phrase")
    likes=document.getElementById("likes")
    phrase2=document.getElementById("phrase2")
    likes2=document.getElementById("likes2")
    
    search_btn = document.getElementById("search_btn")
    search_btn.onclick = click_fn

    btn_image = document.getElementById("btn_img")
    btn_image.onclick = phrase_with_image;

    add_btn=document.getElementById("add_btn")
    add_btn.onclick=addPhrase;
    
    
    
    loader = document.getElementById("loader")
    loader.style.display = "none"
    // setInterval(random_images,10000)
}
async function random_images(){

    image.style.display = "block"
   
    // text = text_image.value
    url = `http://localhost:8080/get`
    
    res = await axios.get(url)
   
    console.log(res.data);   
    image.style.display = "block";
    image.src = res.data["img"];
    // phrase.innerText=res.data["prs"]["phrase"];
    // likes.innerText=`likes: ${res.data["prs"]["likes"]}`;

}
async function addPhrase(){
    text1 = text_add.value

    data={
        "text":text1
    }
    alert(text1);
    url = `http://localhost:8080/post`
    res=await axios.post(url,data) ; 
    console.log(res.data);


}
async function phrase_with_image(){
    loader.style.display = "block"
    new_img.style.display = "none"
    // text = text_image.value
    alert("1");
    url = `http://localhost:8080/get/image`
    res = await axios.get(url)
    alert("2");
    loader.style.display = "none"
    new_img.style.display = "block"

    console.log(res.data)
    new_img.src = res.data["img"];
    // phrase2.innerText=res.data["prs"]["phrase"];
    // likes2.innerText=`likes: ${res.data["prs"]["likes"]}`;
}

async function click_fn() {
    loader.style.display = "block"
    image.style.display = "none"
    text ="home"
    url = `http://localhost:3000/get`
    res = await axios.get(url)
    loader.style.display = "none"
    image.style.display = "block"
    console.log(res)

    console.log(res)
    image.src = res.data 
}

async function serach_fn(){
    text = search_txt.value

    url = `http://localhost:8080/getAll/${text}`
    res = await axios.get(url)
    console.log(res.data)

    imgs_str = res.data.map(img => `<img src=${img.image_url} width="100px">`)
    console.log(imgs_str.join(""))
    search_res.innerHTML = imgs_str.join("")



}