<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
?>
<h3>strpos() a intors non-false</h3>
<p>Utilizati Internet Explorer</p>
<?php
} else {
?>
<h3>strpos() a intors false</h3>
<p>Nu utilizati Internet Explorer</p>
<?php
}
?> 