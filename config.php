<?
  $lang = "en";

  if (strpos($_SERVER['SERVER_NAME'], 'mt') !== false || strpos($_SERVER['SERVER_NAME'], 'fr') !== false) {
      $lang = "fr";
  }

  $devMode = false;
 ?>