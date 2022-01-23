<?php


$con = mysqli_connect("localhost","root","","chelseafanpage");//make connection with database

//when button clicked save info into database
if(isset($_POST['save']))
{
    $fullName = $_POST['name'];
    $email = $_POST['email'];
    $news = $_POST['news'];
    $b = implode(',',$news);
   
    //insert data into database
    $qry = "INSERT INTO `fanpagetable`(`fullName`, `email`, `news`) VALUES ('$fullName','$email','$b')";

    mysqli_query($con, $qry);

}

//redirect user to this thank you
header("Location: thankyou1.html");


?>
