<?
  $lang = "en";

  if (strpos($_SERVER['SERVER_NAME'], 'keepingcanadianssafe') !== false) {
      $lang = "en";
  }
  elseif (strpos($_SERVER['SERVER_NAME'], 'nousvousprotegeons') !== false) {
    $lang = "fr";
  }

  $devMode = false;
 ?>