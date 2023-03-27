let x=Number(prompt("Please Enter The Number"))
for(let i=1;i<=x;i++){
    document.write(`<div class="edit-4" style="
    top:calc(50% - ${i*5}px);
    left:calc(50% + ${i*5}px);">`)
    for(let j=1;j<=x;j++){
        for(let k=1;k<=x;k++){
            if(k>j){
                document.write(`<span class="base" style="background-color:rgb(${5*k}, ${10*k}, ${20*k});"></span>`)
            }else if(k<j){
                document.write(`<span class="base" style="background-color:rgb(${45*k}, ${15*k}, ${20*k});"></span>`)
            }else if(k===j){
                document.write(`<span class="base" style="background-color:rgb(${50*k}, ${20*k}, ${10*k});"></span>`)
            }
        }
        document.write("<br/>")
    }
    document.write(`</div>`)
}