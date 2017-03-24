//Declare tabletSize() here
function tabletSize(){
  const doc = document
  thing3 =doc.getElementsByTagName('section')
//thing3[0].style.width="18.75%";
  for(var i=0; i<thing3.length; i++){
    thing3[i].style.width = "1080px"
    thing3[i].style.height = "600px"

  }

}


//Declare phoneSize() here
function phoneSize(){
  const doc = document
  thing3 =doc.getElementsByTagName('section')
//thing3[0].style.width="18.75%";
  for(var i=0; i<thing3.length; i++){
    thing3[i].style.width = "720spx"
    thing3[i].style.height = "400px"

  }

}
