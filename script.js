let cont = document.body.querySelector(".container")
let disp = document.body.querySelector(".blur");
document.body.querySelector(".btn").addEventListener("click", ()=>{
    disp.style.display ="flex";
})

function card(title,Cname, views, Old, duration, thumbnail){
    if (views>=1000 && views<1000000){
        views = views/1000 +"k"
    }else if(views>=1000000){
        views = views/1000000 + "M"
    }

    cont.innerHTML = cont.innerHTML+ `<div class="box">
    <div class="image">
        <img src= ${thumbnail}
        alt="Image">
        <div class="time">${duration}</div>
    </div>
    <div class="text">
        <div class="title"> ${title} </div>
        <div class="bottom">
            <span> ${Cname} </span>
            .<span>${views} views</span>
            .<span>${Old} months ago</span>
        </div>
    </div>
</div>`

}

document.body.querySelector(".done").addEventListener("click",()=>{
    let title = document.body.querySelector("#title").value;
    let Cname = document.body.querySelector("#Cname").value;
    let view = document.body.querySelector("#view").value;
    let old = document.body.querySelector("#time").value;
    let duration = document.body.querySelector("#duration").value;
    let link = document.body.querySelector("#link").value;

    if(title == "" || Cname == "" || view == "" ||old == "" ||duration == "" ||link == ""){

        document.getElementById("wrong").style.display = "block";

    }else{
        disp.style.display ="none";
    
        card(title,Cname,view,old,duration,link);
    }

});

document.querySelector(".fa-solid").addEventListener("click",()=>{
    disp.style.display ="none";
})
