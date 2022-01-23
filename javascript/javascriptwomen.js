var i =0;
var images = [];// array to store images 
var time = 2000;//interval of seconds

//store images in array
images[0] = 'images/womenteam1.jpg';
images[1] = 'images/womenteam2.jpg';
images[2] = 'images/womenteam3.jpg';
images[3] = 'images/womenteam4.jpg';

//function to change image
function changeImg()
{
    document.slidew.src = images[i]

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

//start function n screen load
window.onload = changeImg;
