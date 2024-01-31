let dice1=document.querySelector(".dice1 p");
let dice2=document.querySelector(".dice2 p");
let roll=document.querySelector(".roll");
let doc1=document.querySelector(".dice1");
let doc2=document.querySelector(".dice2");

let box1=document.querySelector(".n1");
let box2=document.querySelector(".n2");
let box3=document.querySelector(".n3");
let box4=document.querySelector(".n4");
let box5=document.querySelector(".n5");
let box6=document.querySelector(".n6");
let box7=document.querySelector(".n7");
let box8=document.querySelector(".n8");
let box9=document.querySelector(".n9");
let box10=document.querySelector(".n10");
let box11=document.querySelector(".n11");
let box12=document.querySelector(".n12");

box1=1;
box2=2;
box3=3;
box4=4;
box5=5;
box6=6;
box7=7;
box8=8;
box9=9;
box10=10;
box11=11;
box12=12;
let count=0;
let i,j;
let sum;

let pair;
let array=[box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12];

let win=[0,0,0,0,0,0,0,0,0,0,0,0];

roll.addEventListener("click",function(){
    /* dice 1 blink */
    var audio = new Audio('dice.mp3');
    audio.play();
    doc1.style.backgroundColor = "#ffffff"; 
    setTimeout(function background() {
        doc1.style.backgroundColor = "#1500ff"; 
    },500);
    /* dice 2 blink */
    doc2.style.backgroundColor = "#ffffff"; 
    setTimeout(function background() {
        doc2.style.backgroundColor = "#1500ff"; 

    },500);
    let d1=Math.floor(Math.random()*6+1);
    let d2=Math.floor(Math.random()*6+1);
    dice1.innerHTML=d1;
    dice2.innerHTML=d2;
    sum=d1+d2;
    count=count+1;
    /* array sum check */
    for(i=0;i<=11;i++){
        pair=0;
        for(j=(i+1);j<=11;j++){ 
            if(array[j]==sum){
                let colId = `c${j + 1}`;
                let colElement = document.querySelector(`.${colId}`);
                colElement.style.backgroundColor = "#87ffa9"; 
                setTimeout(function background() {
                    colElement.style.backgroundColor = "transparent";
                    colElement.style.borderColor = "transparent"; 
                    colElement.innerText="";
                },1000);
                array[j]=0;
                pair=1;
                break;
            }
            else if((array[i]+array[j])==sum){
                let colId = `c${j + 1}`;
                let colElement = document.querySelector(`.${colId}`);
                colElement.style.backgroundColor = "#87ffa9"; 
                setTimeout(function background() {
                    colElement.style.backgroundColor = "transparent";
                    colElement.style.borderColor = "transparent"; 
                    colElement.innerText="";
                },1000);
                let colId1 = `c${i + 1}`;
                let colElement1 = document.querySelector(`.${colId1}`);
                colElement1.style.backgroundColor = "#87ffa9"; 
                setTimeout(function background() {
                    colElement1.style.backgroundColor = "transparent"; 
                    colElement1.style.borderColor = "transparent";
                    colElement1.innerText="";
                },1000);
                array[i]=0;
                array[j]=0;
                pair=1;
                break;
            }
        }
        if(pair==1){
            break;
        }
    }
    console.log(count);
    if(i==12 || j==12){
        // alert("No Match Found On Card...Try Again...")
        // location.reload();
    }
    function arraysAreEqual(array, win) {
    for (i = 0; i <= 11; i++) {
        if (array[i] !== win[i]) {
            return false;
        }
    }
    return true;
    }
    if (arraysAreEqual(array, win)) {
        var audio1 = new Audio('victory.mp3');
        audio1.play();
        setTimeout(function() {
        let answer=confirm(`Congratulation, You WON The Game In ${count} Turn... Do You Want To Try Again?`);
        if(answer==true){
            location.reload();
        }
    },1500);
    } 
    // else {
    // console.log("Not Winner");
    // }
})


