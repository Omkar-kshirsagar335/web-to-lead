let cap =false;
function beforesubmit(event){if(cap) {
    let outputdate= document.querySelector(".outputdate");
    let inputdate= document.querySelector(".inputdate");
         console.log('date'+typeof   inputdate.value);
         let formatedDate =new Date(inputdate.value).toLocaleDateString("en-US");
         outputdate.value=formatedDate;
        }else{
            alert("please check the recaptcha box")
            event.preventDefault();
        }

}
function timestamp() {
      var response = document.getElementById("g-recaptcha-response"); 
      if (response == null || response.value.trim() == "") {
          var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
          elems["ts"] = JSON.stringify(new Date().getTime());
          document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
      } 
     } 
     setInterval(timestamp, 500); 
     //okkk
     function capt(){
        cap=true;
     }
