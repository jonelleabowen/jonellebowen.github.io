<?php


// if((isset($_COOKIE['loggedIn']))) 
// {
  //$pageElements= new PageElements();

  //$emailList = implode(',',$_SESSION['emails']);

  $headers = "From: {$_POST['name']} \r\n";
  $to = "jonellebowen@yahoo.com";
  $subject = $_POST["subject"];
  $message = $_POST['message'];

  //"From: bryan.ross96@gmial.com\r\n";

  if (mail($to, $subject, $message, $headers)) 
  {
    echo "Successfully sent email to Jonelle";
  } 
  else 
  {
    echo "Error sending email ";
  }

  //header("Location: search.php");
// }
// else {

  //header("Location: introPage.php");
//}

 ?>