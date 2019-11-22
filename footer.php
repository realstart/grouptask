<script src="vendor/outdatedbrowser/outdatedbrowser.min.js"></script>

<?php
if (!$devMode){
echo '
<!-- SplitText -->
<script src="vendor/utils/SplitText.min.js"></script>

<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
<script src="vendor/plugins/DrawSVGPlugin.min.js"></script>

<!-- ScrollMagic -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>

<!-- lity -->
<script src="vendor/lity/zepto.min.js"></script>
<script src="vendor/lity/lity.min.js"></script>

<!-- site -->
<script src="' . getData("SVGAnimations") . '"></script>
<script src="scripts/script.js"></script>';
}
?>
<script>
  //event listener: DOM ready
  function addLoadEvent(func) {
      var oldonload = window.onload;
      if (typeof window.onload != 'function') {
          window.onload = func;
      } else {
          window.onload = function() {
              if (oldonload) {
                  oldonload();
              }
              func();
          }
      }
  }
  //call plugin function after DOM ready
  addLoadEvent(function(){
      outdatedBrowser({
          bgColor: '#e4e4e4',
          color: '#272727',
          lowerThan: 'transform',
          languagePath: 'vendor/outdatedbrowser/lang/<?php echo $lang; ?>.html'
      })
  });
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', '<? echoData("GAID"); ?>', 'auto');
  ga('send', 'pageview');
</script>
</body>
</html>