<?php
    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
    
        $email_from = "Iowa Climate Board";
        $email_subject = "Form Submission";
        $email_body = "Username: ".$name.".\nEmail: ".$email.".\nMessage: ".$message;
    
        $to = "info@iowaclimateboard.com";
        $headers = "From: $email_from \r\n";
    
        mail($to,$email_subject,$email_body,$headers);
        header("Location: index.html");
    }
?>