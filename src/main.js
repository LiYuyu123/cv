let html=document.querySelector("#html")
let style=document.querySelector("#style")
let string=`/*我叫李子杰
*接下我要演示我的前端功底了
*首先准备一个div
**/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;

}
/*接下来我要把div变成一个八卦图
*看好了
*首先把第v变成一个圆
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳的
*一白一黑
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个小圆
**/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%)
}
` 
let string2=""


let n=0


let step=()=>{
    setTimeout(()=>{
     
        if(string[n]==="\n"){
           string2+="<br>"//如果回车，就不照搬
        }else if(string[n]===" "){
           string2+="&nbsp"
        }else{
            string2+=string[n]
        }
        html.innerHTML=string2
        style.innerHTML=string.substring(0,n)
        window.scrollTo(0,999999)
        html.scrollTo(0,999999)
        if(n<string.length -1){
           //如果n，不是最后一个就继续
            n+=1 //n为54
            step()
        }
    },50)
}
step()