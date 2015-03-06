<?php

define("WEBMASTER_EMAIL", 'websites@audiologydesign.com');
define("REPLY_TO", "$email");

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post) {
	function ValidateEmail($email) {

		$eregi = filter_var($email, FILTER_VALIDATE_EMAIL);

		if(!$eregi) {
			return false;
		}
		else {
			return true;
  	}
	}

	$name = stripslashes($_POST['name']);
	$email = trim($_POST['email']);
	$phone = stripslashes($_POST['phone']);
	$subject = 'PPC Form Inquiry';


	$error = '';

	// Check name

	if(!$name) {
		$error .= 'Please enter your name.<br />';
	}

	// Check email

	if(!$email) {	
		$error .= 'Please enter an email address.<br />';
	}

	if($email && !ValidateEmail($email)) {
		$error .= 'Please enter a valid email address.<br />';
	}

	// Check phone

	if(!$phone) {
		$error .= 'Please enter a phone number.<br />';
	}


	if(!$error) {
		$message = "Name: $name\n\nEmail: $email\n\nSubject: $subject\n\nPhone Number: $phone";
		$mail = mail(WEBMASTER_EMAIL, $subject, $message,
		     "From: ".$email."\r\n"
		     ."Reply-To: ".REPLY_TO."\r\n"
		     ."X-Mailer: PHP/" . phpversion());

		if($mail) {
			echo 'OK';
		}
	}

	else {
		echo '<div class="notification-error"><span>'.$error.'</span></div>';	
	}
}
?>