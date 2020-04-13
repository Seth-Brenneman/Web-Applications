<?php
if($_POST['name'] != '') {
    $myname = $_POST["name"];
    $mymail = $_POST["email"];
    echo "You name is ". $myname." and your address is " .$mymail;

}else {
    echo "How am I suppose to answer if you do not fill me?";
}
?>
