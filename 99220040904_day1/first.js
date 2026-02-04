const num1=document.getElementById("a");
const num2=document.getElementById("b");
const operator=document.getElementById("op");
const btn=document.getElementById("sum");
const para=document.getElementById("para");

function calc(){
    const a=Number(num1.value);
    const b=Number(num2.value);
    const o=operator.value;

    switch (o){
        case '+':
            return para.innerHTML=`Answer is: ${a+b}`;
            break;
        case '-':
            return para.innerHTML=`Answer is: ${a-b}`;
            break;
        case '*':
            return para.innerHTML=`Answer is: ${a*b}`;
            break;
        case '/':
            return para.innerHTML=`Answer is: ${a/b}`;
            break;
        default:
            return para.innerHTML="not valid"
    }
}

btn.addEventListener("click",()=>{
    calc();
});