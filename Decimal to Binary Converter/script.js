const binaryNum= document.getElementById('binary');
const octalNum= document.getElementById('octal');
const hexaNum= document.getElementById('hexa');
const button= document.getElementById('btn');
button.addEventListener('click',function(){
    const inputValue= document.getElementById('input').value;

        if(inputValue===''){
            alert("Please enter a decimal number first :)");
        }

        else if(inputValue<0){
            alert("Please type a positive number :)");
        }

        else{
            const binResult= Number(inputValue).toString(2);
            binaryNum.innerText=binResult;

            const octalResult= Number(inputValue).toString(8);
            octalNum.innerText= octalResult;

            const hexaResult= Number(inputValue).toString(16);
            hexaNum.innerText= hexaResult;

            
        }

        // const result= Number(inputValue).toString(2);
        // binaryNum.innerText=result;
    });