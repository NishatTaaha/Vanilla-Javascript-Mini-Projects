fetch('https://corona.lmao.ninja/v2/countries/bangladesh')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    document.querySelector('#country').innerHTML=data.country;
    document.querySelector('#active').innerHTML= data.active;
    document.querySelector('#cases').innerHTML= data.cases;
    document.querySelector('#critical').innerHTML= data.critical;
    document.querySelector('#death').innerHTML= data.deaths;
    document.querySelector('#recovered').innerHTML=data.recovered;
    document.querySelector('#tests').innerHTML=data.tests;
    const countryFlag= document.querySelector('#flag');
    countryFlag.src= data.countryInfo.flag;
    countryFlag.style.objectFit='cover';
    countryFlag.style.width='3rem';
    countryFlag.style.height='2rem';
    countryFlag.style.marginLeft='1rem';
});