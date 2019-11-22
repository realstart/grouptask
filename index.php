<?php
  include 'header.php';
?>
  
	<?php
  if (!$devMode){
  echo '
  <div id="content-wrapper">
      <div id="usge-wrapper" class="scrollContainer">
        <div class="scrollContent" id="scrollContent">';
  }
  ?>
          <div class="section header" id="header">
            <div class="introvideoholder">
              <video playsinline autoplay muted loop id="introvideo">
                  <source src="images/intro.mp4" type="video/mp4">
              </video>
            </div>
            <div class="header-content">
              <div class="image usge-presents-holder" id="usge-presents">
                <img class="desktop" src="<? echoData('header1_img'); ?>" alt="<? echoData('header1_alt'); ?>" />
                <img class="mobile" src="<? echoData('header1_mobile_img'); ?>" alt="<? echoData('header1_alt'); ?>" />
              </div>
            
              <?php 
                if ($lang == 'fr') {
                  echo '<div class="image safety-holder" id="safety">';
                    echo '<img src="'. getData('header3_img') .'" alt="'. getData('header3_alt') . '" />';
                  echo '</div>';

                  echo '<div class="illuminating-holder"><div class="svg-container svg-container--illuminating">';
                    include getData("header2_include");
                  echo '</div></div>';

                } else {
                  echo '<div class="illuminating-holder"><div class="svg-container svg-container--illuminating">';
                    include getData("header2_include");
                  echo '</div></div>';
                  
                  echo '<div class="image safety-holder" id="safety">';
                    echo '<img src="'. getData('header3_img') .'" alt="'. getData('header3_alt') . '" />';
                  echo '</div>';
                }
              ?>
              
              <div class="text">
                <div class="watch-video" id="watch-video">
                  <div class="watch-video-inner">
                    <a class="derp" href="//www.youtube.com/watch?v=<? echoData('youTubeID'); ?>" data-lity><? echoData('watchVideo'); ?></a>
                  </div>
                </div>
              </div>

            </div>

            <div class="image arrow-holder" id="arrow" style="margin:0; padding:0;">
              <h3 id="scroll" style="width:200px; position: absolute; text-align: center; left:50%; transform: translateX(-50%); bottom:65px;"><? echoData('scrolldown'); ?></h3>
              <? include "images/arrow.svg"; ?>
            </div>

          </div>
          
          <!--<div class="section video" id="video-holder">
            <div id="video">
              <div class="text">
                <p><a href="//www.youtube.com/watch?v=dQw4w9WgXcQ" data-lity>iFrame Youtube</a></p>
              </div>
            </div>
          </div>-->
          
          <div class="section usge" id="usge">
            <div id="<? echoData('tag0'); ?>">
              <div class="image usge-holder" id="usge-holder">
                <div class="svg-container svg-container--usge">
                  <? include getData("usge_include"); ?>
                </div>
              </div>
              <div class="text usge-copy" id="usge-copy">
                <p><? echoData('usge_copy'); ?></p>
              </div>
            </div>
          </div>

          <div class="section newheadline" id="newheadline">
            <div id="<? echoData('tag1'); ?>">
              <div class="image newheadline-holder" id="newheadline-holder">
                <div class="svg-container svg-container--newheadline">
                  <? include getData("newheadline_include"); ?>
                </div>
              </div>
              <div class="text newheadline-copy" id="newheadline-copy">
                <p><? echoData('newheadline_copy'); ?></p>
              </div>
            </div>

            <div class="image curve-holder" id="curve-holder">
              <div class="curve-copy-holder">
                
                <div id="curve_copy0" class="curve-copy-left curve-copy-0"><? echo getData('usge_items')[0]; ?></div>
                <div id="curve_copy1" class="curve-copy-right curve-copy-1"><? echo getData('usge_items')[1]; ?></div>
                <div id="curve_copy2" class="curve-copy-left curve-copy-2"><? echo getData('usge_items')[2]; ?></div>
                <div id="curve_copy3" class="curve-copy-right curve-copy-3"><? echo getData('usge_items')[3]; ?></div>
                <div id="curve_copy4" class="curve-copy-left curve-copy-4"><? echo getData('usge_items')[4]; ?></div>
                <div id="curve_copy5" class="curve-copy-right curve-copy-5"><? echo getData('usge_items')[5]; ?></div>

              </div>
              <div class="svg-container svg-container--curves">
                <? include "images/curves.svg"; ?>
              </div>
                <? include "images/curves-mobile.svg"; ?>
            </div>
          </div>
        
          <div class="section represent" id="represent">
            <div id="<? echoData('tag2'); ?>">
             <div class="image sixteen-holder" id="sixteen-holder">
                <div class="svg-container svg-container--sixteen">
                  <? include getData("sixteen_include"); ?>
                </div>
              </div>
              <div class="text sixteen-copy" id="sixteen-copy">
                <p><? echoData('sixteen_copy'); ?></p>
              </div>
              <div class="text represent-list">
                <ul>
                  <?
                    $i=0;
                    foreach (getData("represent_list") as &$value) {
                        if ($value == "_"){
                          $inline = " style='opacity:0;'";
                        } else {
                          $inline = "id=rep".$i;
                          $i++;
                        }
                        echo "<li ".$inline.">" . $value . "</li>";
                    }
                  ?>
                </ul>
              </div>
              <div class="text">
                <!--<div class="learn-more" id="learn-more" style="width:100%;">
                    
                    <?php
                      /*
                      if ($lang == 'en'){
                        echo '<p>Get in touch with us to learn more.<br><br>
                        <a href="mailto:info@keepingcanadianssafe.ca">info@keepingcanadianssafe.ca</a><br>
                        <a href="tel:613-560-4262">613-560-4262 </a>
                        </p>';
                      } else {
                        echo '<p>Contactez-nous pour en savoir plus.<br><br>
                        <a href="mailto:info@nousvousprotegeons.ca">info@nousvousprotegeons.ca</a><br>
                        <a href="tel:613-560-4262">613-560-4262 </a>
                        </p>';
                      }
                      */
                    ?>




                  </div>-->
                </div>
              </div>
            </div>
          </div>
          
          <div class="footer" id="<? echoData('tag3'); ?>">
            <div class="footer-content">
              <div class="text" style="color: #272727;">
              <div class="learn-more" style="width:100%;">
                    
                <?php

                  if ($lang == 'en'){
                    echo '<p>Get in touch with us to learn more.<br><br>
                    <a href="mailto:info@keepingcanadianssafe.ca">info@keepingcanadianssafe.ca</a><br>
                    <a href="tel:613-560-4262">613-560-4262 </a>
                    </p>';
                  } else {
                    echo '<p>Contactez-nous pour en savoir plus.<br><br>
                    <a href="mailto:info@nousvousprotegeons.ca">info@nousvousprotegeons.ca</a><br>
                    <a href="tel:613-560-4262">613-560-4262 </a>
                    </p>';
                  }
                ?>




              </div>
              </div>

              <!--<div class="text quote-holder">
                <div class="flex-container">
                  <div class="flex-item quote"><? echoData('quote'); ?></div>
                  <div class="flex-item quote-souce"><? echoData('quote_source'); ?></div>
                </div>
              </div>
              <div class="press-logos">
                <a href="http://www.google.com"><img src="images/press01.png" /></a>
                <a href="http://www.google.com"><img src="images/press01.png" /></a>
                <a href="http://www.google.com"><img src="images/press01.png" /></a>
                <a href="http://www.google.com"><img src="images/press01.png" /></a>
              </div>-->
            </div>
          </div>
        <?php
        if (!$devMode){
        echo '
        </div>
      </div>
    </div>';
    }
    ?>
    
    <div id="outdated"></div>
<?php
  include 'footer.php';
?>
   