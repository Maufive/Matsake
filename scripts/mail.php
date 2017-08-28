<?php
  $namn = $_POST['namn'];
  $email = $_POST['email'];
  $telefon = $_POST['telefon'];
  $meddelande = $_POST['meddelande'];
  $ämne = $_POST['ämne'];
  $säljare = $_POST['säljare'];
  $mottagare = 'albinssonniklas@gmail.com';

  $body = " Från: $namn\n \nE-Mail: $email\n \nTill: $säljare\n \nÄmne: $ämne\n \nMeddelande:\n $meddelande";

  if ($_POST['submit']) {
    if (mail ($mottagare, $ämne, $body, $email)) {
      echo '<p>Tack för ditt meddelande!</p>';
    } else {
      echo '<p>Något gick fel, vänligen prova igen.</p>';
    }
  }
?>
