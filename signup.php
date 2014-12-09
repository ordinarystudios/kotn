<?php
//email signup ajax call
if($_GET['action'] == 'signup'){
	
	mysql_connect('localhost','root','root');  
	mysql_select_db('kotn');
	
	//sanitize data
	$email = mysql_real_escape_string($_POST['signup-email']);
	
	//validate email address - check if input was empty
	if(empty($email)){
		$status = "error";
		$message = "You did not enter an email address!";
	}
	else if(!preg_match('/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/', $email)){ //validate email address - check if is a valid email address
			$status = "error";
			$message = "Is there a typo?";
	}
	else {
		$existingSignup = mysql_query("SELECT * FROM signups WHERE signup_email_address='$email'");   
		if(mysql_num_rows($existingSignup) < 1){
			
			$date = date('Y-m-d');
			$time = date('H:i:s');
			
			$insertSignup = mysql_query("INSERT INTO signups (signup_email_address, signup_date, signup_time) VALUES ('$email','$date','$time')");
			if($insertSignup){ //if insert is successful
				$status = "success";
				$message = "Thanks, you'll hear from us soon.";	
			}
			else { //if insert fails
				$status = "error";
				$message = "Something went wrong. Try refreshing.";	
			}
		}
		else { //if already signed up
			$status = "error";
			$message = "Thanks, you're already on the list.";
		}
	}
	
	//return json response
	$data = array(
		'status' => $status,
		'message' => $message
	);
	
	echo json_encode($data);
	exit;
}
?>