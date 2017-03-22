//declare samecolor() here

function samecolor(){
const doc = document
thing1 =doc.querySelectorAll("#samecolor div")
thing1[0].style.backgroundColor = "#009900";
thing1[1].style.backgroundColor = "#009900";
thing1[2].style.backgroundColor = "#009900";
thing1[3].style.backgroundColor = "#009900";
thing1[0].style.opacity =0.7;
thing1[1].style.opacity =0.6;
thing1[2].style.opacity =0.5;
thing1[3].style.opacity =0.4;
}
//declare diffcolor() here

function diffcolor(){
const doc = document
thing2 =doc.querySelectorAll("#diffcolor div")
thing2[0].style.backgroundColor =  "rgb(255, 255, 0)";
thing2[1].style.backgroundColor =  "rgb(0, 0, 255)";
thing2[2].style.backgroundColor =  "rgb(255, 255, 0)";
thing2[3].style.backgroundColor =  "rgb(0, 0, 255)";
thing2[4].style.backgroundColor =  "rgb(255, 255, 0)";
thing2[5].style.backgroundColor =  "rgb(0, 0, 255)";
thing2[6].style.backgroundColor =  "rgb(255, 255, 0)";
thing2[7].style.backgroundColor =  "rgb(0, 0, 255)";


}
