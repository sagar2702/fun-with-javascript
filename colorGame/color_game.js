
var colorArray=generateRandArray(6);
var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var guesscolor=colorArray[Math.floor(Math.random()*6)];
var Color=document.querySelector("#guess");
var displayMsg=document.getElementById("message");
var easy=document.querySelector(".easy");
var hard=document.querySelector(".hard");
//will return first button
var reset=document.querySelector("button");
var flag=false;
Color.textContent=guesscolor;

easy.addEventListener("click",function(){
    flag=true;
    reset.textContent="NEW GAME";
    easy.classList.add("selected");
    hard.classList.remove("selected");
    displayMsg.textContent="";
    h1.style.backgroundColor="steelblue";
    colorArray=generateRandArray(3);
    guesscolor=colorArray[Math.floor(Math.random()*3)];
    Color.textContent=guesscolor;
    for(var i=0;i<squares.length;i++)
    {
        if(i<3)
        {
            squares[i].style.backgroundColor=colorArray[i];
        }else{
            //below commented mine
            //squares[i].style.backgroundColor="black";
            //squares[i].style.border="0px solid black";
            squares[i].style.display="none";
        }
        
    }
});

hard.addEventListener("click",function(){
    flag=false;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    reset.textContent="NEW GAME";
    displayMsg.textContent="";
    h1.style.backgroundColor="steelblue";
    //generating array again
    colorArray=generateRandArray(6);
    //picking random color
    guesscolor=colorArray[Math.floor(Math.random()*6)];
    Color.textContent=guesscolor;
    //assign color to each square
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colorArray[i];
        squares[i].style.display="block";
        //squares[i].style.border="1px solid white";
    }
});


reset.addEventListener("click",function(){
    flag=false;
    reset.textContent="NEW GAME";
    hard.classList.add("selected");
    easy.classList.remove("selected");
    displayMsg.textContent="";
    h1.style.backgroundColor="steelblue";
    //generating array again
    colorArray=generateRandArray(6);
    //picking random color
    guesscolor=colorArray[Math.floor(Math.random()*6)];
    Color.textContent=guesscolor;
    //assign color to each square
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colorArray[i];
        squares[i].style.display="block";
    }
});




for(var i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor= colorArray[i];
     
    squares[i].addEventListener("click", function(){
       
           var clickedColor= this.style.backgroundColor;
           //console.log(clickedColor,guesscolor);
           if(clickedColor===guesscolor)
           {
               matchedColor(clickedColor);
              displayMsg.textContent="Correct!";
              h1.style.backgroundColor=clickedColor;
              reset.textContent="PLAY AGAIN?"
           }else{
               this.style.backgroundColor="black";
               displayMsg.textContent="Try Again";
           }
    });
}

function matchedColor(color)
{
    if(flag)
    {
        for(var i=0;i<squares.length;i++)
        {
            if(i<3)
            {
                squares[i].style.backgroundColor=color;
            }else{
               // squares[i].style.backgroundColor="black";
                //squares[i].style.border="0px solid black";
                squares[i].style.display="none";
            }
            
        }
    }else{
        for(var i=0;i<squares.length;i++)
        {
            squares[i].style.backgroundColor=color;
            if(i>=3)
            {
                squares[i].style.display="block";
            }
        }
    }
    
}

function generateRandArray(num)
{
    var arr=[];
    for (var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    //rgb(r, g, b)
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}