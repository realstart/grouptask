<?
  $lang = "en";

  if (strpos($_SERVER['SERVER_NAME'], 'onvousprotege') !== false || strpos($_SERVER['SERVER_NAME'], 'nousvousprotegeons') !== false) {
      $lang = "fr";
  }

  $devMode = false;
 ?>