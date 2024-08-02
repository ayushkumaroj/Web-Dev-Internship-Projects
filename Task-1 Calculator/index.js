let inp = document.querySelector(".inp");
let nums = document.querySelectorAll(".mainnum")
let value = "";
let data = document.querySelector(".dataValue")
let datastore = "";
data.innerText = "";


let ul = document.querySelector("ul")


nums.forEach(num =>{
    num.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            datastore = datastore + value;
            value = eval(value);
            inp.innerText = value;
        }else if(e.target.innerText=="AC"){
            addList(datastore,value);
            datastore = "";
            value="";
            inp.innerText = value;
        }else if(e.target.innerText=="DEL"){
            value = value.slice(0,-1);
            inp.innerText = value;
        }else{
            value += e.target.innerText;
            inp.innerText = value;
        }
    })
})


function addList(datastore,value){
    let li = document.createElement("li");
    li.classList.add("list")
    li.innerText = ` ${datastore} = ${value}`;
    ul.appendChild(li);
}

