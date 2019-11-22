<?php
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  include "config.php";
  include "content.php";
?>
<!doctype html>
<html lang="<? echo $lang; ?>" class="<? echo $lang; ?>">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title><? echoData('title'); ?></title>
    <link href="vendor/reset.min.css" rel="stylesheet" type="text/css">
    <link href="fonts/stylesheet.css" rel="stylesheet" type="text/css">
    <link href="styles/style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="vendor/outdatedbrowser/outdatedbrowser.min.css">
    <link href="vendor/lity/lity.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="nav <?php if($devMode){ echo 'show'; } ?>" id="nav">
      <div class="nav-holder">
        <ul class="nav-menu" id="nav-menu">
          <li><a href="javascript:scrollPageTo('<? echoData('tag0'); ?>');"><? echoData('nav0'); ?></a></li>
          <li><a href="javascript:scrollPageTo('<? echoData('tag1'); ?>');"><? echoData('nav1'); ?></a></li>
          <li><a href="javascript:scrollPageTo('<? echoData('tag2'); ?>');"><? echoData('nav2'); ?></a></li>
          <!--<li><a href="javascript:scrollPageTo('<? echoData('tag3'); ?>');"><? echoData('nav3'); ?></a></li>-->
          <li><a href="media.php"><? echoData('nav3'); ?></a></li>
          <li><a href="advocacy.php"><? echoData('nav4'); ?></a></li>
          <li><? echoData('langtoggle'); ?></li>
        </ul>
      </div>
      <div class="nav-block"></div>
      <a href="<? echoData('button_link'); ?>"><img class="logo" width="191" height="52" src="<? echoData('nav_img'); ?>" alt="<? echoData('nav_alt'); ?>" /></a>
      <div class="burger" id="burger"><img src="images/burger.svg" width="40" /></div>
    </div>