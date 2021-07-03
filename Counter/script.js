// let count=0;
// const value= document.querySelector('#value');
// const btns= document.querySelectorAll('.btn');

// btns.forEach(function (btn){
//     btn.addEventListener("click",function(e){
//         const styles= e.currentTarget.classList;
//         if(styles.contains('btn-decr')){
//             count--;
//         }

//         else if(styles.contains('btn-inc')){
//             count++;
//         }
//         else{
//             count=0;
//         }

//         value.textContent=count;
//     });
// });

let count=0;
const btns= document.querySelectorAll('.btn');
const value= document.querySelector('#value');

btns.forEach(function (btn){
        btn.addEventListener("click",function(e){
        const styles= e.currentTarget.classList;
        if(styles.contains('btn-decr')){
            count--;
        }
        else if(styles.contains('btn-inc')){
            count++;
        }
        else{
            count=0;
        }

        if(count>0){
            value.style.color="green";
        }
        else if(count<0){
            value.style.color="red";
        }
        else{
            value.style.color="white";
        }

        value.textContent=count;
    });
});