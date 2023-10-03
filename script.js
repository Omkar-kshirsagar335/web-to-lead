function beforesubmit(){
let outputdate= document.querySelector(".outputdate");
let inputdate= document.querySelector(".inputdate");
     console.log('date'+typeof   inputdate.value);
     let formatedDate =new Date(inputdate.value).toLocaleDateString("en-US");
     outputdate.value=formatedDate;
}