

// let Time = CalculateTime();
let startDate = new Date();
let elapsedTime = 0;
let page = window.location.href;

//calculates the time that you spend on the tab. Credit to martpie's answer on this StackOverflow thread :https://stackoverflow.com/questions/4667068/how-to-measure-a-time-spent-on-a-page
//with some modification to fit the goal of mine. 
const focus = function() {
    //update the time when user first open the page
    startDate = new Date();
};

const blur = function() {
    const endDate = new Date();
    const spentTime = endDate.getTime() - startDate.getTime();
    elapsedTime += spentTime;
    
};

const beforeunload = function() {
    //get the time when user is about to leave the page, then subtract the time when user first opened the page. 
    const endDate = new Date();
    const spentTime = endDate.getTime() - startDate.getTime();
    elapsedTime += spentTime;

    // elapsedTime contains the time spent on page in milliseconds.
    //passedTime rounds the time into intigers.
    if(page.indexOf("two.html") != -1){
         var passedTime = Math.round(elapsedTime/1000);
        let time = passedTime.toString();
        localStorage.setItem("timeSpent",time);
    }
    if(page.indexOf("three.html") != -1){
        var passedTime = Math.round(elapsedTime/1000);
        let time = passedTime.toString();
        localStorage.setItem("pg3Spent",time);
    }

    if(page.indexOf("four.html") != -1){
        console.log("match!");
        var passedTime = Math.round(elapsedTime/1000);
        let time = passedTime.toString();
        localStorage.setItem("pg4Spent",time);
    }
    
};


window.addEventListener('focus', focus);
window.addEventListener('blur', blur);
window.addEventListener('beforeunload', beforeunload);
