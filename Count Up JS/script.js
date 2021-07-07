var project= setInterval(projects,10);
var practice= setInterval(practice,10);
var coffee= setInterval(coffee,10);
let count1=1;
let count2=1;
let count3=1;

function projects(){
    count1++;
    document.querySelector('#number1').innerHTML=count1;
    count1;
    if(count1==500){
        clearInterval(project);
    }
}

function practice(){
    count2++;
    document.querySelector('#number2').innerHTML=count2;
    count2;
    if(count2==150){
        clearInterval(practice);
    }
}

function coffee(){
    count3++;
    document.querySelector('#number3').innerHTML=count3;
    count3;
    if(count3==300){
        clearInterval(coffee);
    }
}
