
let visit = 0; 

document.addEventListener("DOMContentLoaded", function (){

    const facts = document.getElementsByTagName("input");
    for(var i = 0; i < facts.length; i++){
        facts[i].addEventListener("change", function(){
            //detect and keep track what user have selected
            if(this.value == "E"){
                visit++;
                let text = visit.toString();
                sessionStorage.setItem("visit", text);
                window.location.href ="two.html";
            }
            if (this.value == "T"){
                visit++;
                let text = visit.toString();
                sessionStorage.setItem("secvisit", text);
                 window.location.href ="three.html";
              
            
            }
            if(this.value=="F"){
              visit++;
              let text = visit.toString();
              sessionStorage.setItem("thirvisit", text);
              window.location.href ="four.html";
            }
        });
    }
  }) 


  let pg1Time = localStorage.getItem("timeSpent");
  let pg2Time = localStorage.getItem("pg4Spent");
  let pg3Time = localStorage.getItem("pg3Spent");

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      //  console.log(sessionStorage.length);
      determineReward();
      // for (let i = 0; i < sessionStorage.length; i++) {
      //   console.log(sessionStorage.getItem(sessionStorage.key(i)));
      // }
      console.log(localStorage.getItem("timeSpent"));
      console.log(localStorage.getItem("pg4Spent"));
      console.log(localStorage.getItem("pg3Spent"));
    }
  };

  function determineReward(){
    var firstT = Number(pg1Time);
    var secT = Number(pg2Time);
    var thirT = Number(pg3Time);
    const sources = document.getElementsByClassName("sources");
      if(firstT + secT + thirT >= 110){
        document.getElementById("reward").style.display="block";
        document.getElementById("title").style.display="inline";
        for (var i = 0; i < sources.length; i++){
          sources[i].style.display ="inline"; 
        }
        console.log("Completed!");
      }
  }

