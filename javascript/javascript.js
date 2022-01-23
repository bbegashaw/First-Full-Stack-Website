

var i =0;
var images = [];// array to store images 
var time = 2000;//interval of seconds



//store images in array
images[0] = 'images/chelseaTrophy2.jpg';
images[1] = 'images/menteamphoto1.jpg';
images[2] = 'images/menteamphoto2.jpg';
images[3] = 'images/chelseaTrophy1.jpg';


//function to change image
function changeImg()
{
    document.slide.src = images[i]

    //restart image once loop ends 
    if(i < images.length-1)
    {
        i++;
    }
    else{
        i = 0;
    }
    
    setTimeout("changeImg()",time );
}

//start function once screen loaded
window.onload = changeImg;
