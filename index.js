const form=document.querySelector("#submission");
const items=document.querySelector('#work');
let list=document.querySelector('#list');
const btn1=document.querySelector('#all');
const btn2=document.querySelector('#last');

function updateTime(){
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
   const timestamp = currentDate.toLocaleTimeString();
   const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear +' - '+ timestamp;
   return dateString;
}
setInterval(updateTime, 1000);
form.addEventListener("submit",function(e){
    e.preventDefault();
    const todo=items.value;
    const newLi=document.createElement('li');
    newLi.innerHTML=`<div class="container">
          <div class="row">
        <div class="col">
        </div>
        <div class="col" style="text-align: center; word-wrap: break-word; width:25vw;">
          ${ todo} 
        </div>
        <div class="col" style="text-align: right;">
        ${updateTime()}
        </div>
    </div>
</div>`
list.append(newLi);
  
items.value="";
})
btn1.addEventListener('click',function(){
    list.innerHTML="";
})
btn2.addEventListener('click',function(){
    list.removeChild(list.lastChild);
})
