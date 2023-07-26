let btn_image, text_image, image, loader
let search_txt, search_res, search_btn , currentPrase;

function init() {
    search_txt = document.getElementById("search_txt")
    search_res = document.getElementById("search_res")
    image = document.getElementById("my_img")
    
    new_img=document.getElementById("new_img")
    text_add=document.getElementById("add")
    phrase=document.getElementById("phrase")
    likes=document.getElementById("likes")
    like=document.getElementById("like");
    btn=document.getElementById("btn")
    btn.onclick = update_like;

    add_btn=document.getElementById("add_btn")
    add_btn.onclick=addPhrase;
    
    btn.style.display = "none"
    likes.style.display = "none"
    image.style.display = "none"
    random_images();
    setInterval(random_images,10000);
}
async function update_like(){
    likes.innerText=` ${parseInt(likes.innerHTML) + 1}`;
    url = `http://localhost:8080/put/${currentPrase}`
    let li = parseInt(likes.innerHTML)  ;
    const req = {"updLike" : li};
    
    res = await axios.put(`${url}` , req);
}
async function random_images(){
    btn.style.display = "block"
    image.style.display = "block"
    likes.style.display = "block"

    url = `http://localhost:8080/get`
    
    res = await axios.get(url)
    
    image.style.display = "block";
    image.src = res.data["img"];
    phrase.innerText=res.data["prs"]["phrase"];
    currentPrase = res.data["prs"]["phrase"];
    likes.innerText=` ${res.data["prs"]["likes"]}`;

}
async function addPhrase(){
    text1 = text_add.value

    data={
        "text":text1
    }
    url = `http://localhost:8080/post`
    res=await axios.post(url,data) ; 

}