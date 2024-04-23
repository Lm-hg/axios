import axios from 'axios';
 async function bla(){

     const reponse = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
     if(process.argv[2].toUpperCase()=="USD"){

         const blab= await reponse.data.bpi.USD.rate;
         console.log(blab);
     }else if(process.argv[2].toUpperCase()=="EUR"){
        const blab= await reponse.data.bpi.EUR.rate;
        console.log(blab + " EUR");
     }else if(process.argv[2].toUpperCase()=="GBP"){
        const blab= await reponse.data.bpi.GBP.rate;
        console.log(blab + " GBP");
     }else{
        console.log("INTROUVABLE");
        const blab= await reponse.data.bpi.USD.rate;
        console.log(blab + " USD");
     }
 }
 bla()
const V= process.argv[2]
console.log(V);
