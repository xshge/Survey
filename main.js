
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

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      //  console.log(sessionStorage.length);
      
        if(sessionStorage.length == 3){
        document.getElementById("reward").style.display="block";
        console.log("Completed!");
        }
      // for (let i = 0; i < sessionStorage.length; i++) {
      //   console.log(sessionStorage.getItem(sessionStorage.key(i)));
      // }
      console.log(localStorage.getItem("timeSpent"));
      console.log(localStorage.getItem("pg4Spent"));
    }
  };


