<?php
//get data from form  
$email= $_POST['email'];
$to = "bogdan.denic5@gmail.com";
$subject = "Mail From website";
$txt ="\r\n  Email = " . $email .;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:o-firmi.html");
?>