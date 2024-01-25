<!-- Footer -->
<footer class="footer">
  <a href="https://www.google.com" id="quick-exit"><i class="fa fa-external-link"></i>Quick Exit</a>
  <img src="<?php echo get_theme_file_uri() ?>/img/footer-bg.jpg" alt="Design Element" />
  <div class="container">

    <div class="ftr-cta">
      <div class="col">
       <h2><strong>Free</strong> & <strong>Confidential</strong> Services 24/7</h2>
      </div>
      <div class="col text-help">
        <p><a href="/get-help-now">Get Help Now</a></p>
        <p class="phone">1-800-382-5603 <span>Text 'IOWAHELP' to 20121</span></p>
      </div>
    </div>

    <div class="ftr-cols">
      <div class="col">
      <img src="<?php echo get_theme_file_uri() ?>/img/FCC-logo-white.png" alt="Our Savior's Logo in White" />
        <div class="text">
        <?php if ( is_active_sidebar( 'footer_info' ) ) : ?>
          <?php dynamic_sidebar( 'footer_info' ); ?>
        <?php endif; ?>
        </div>
      </div>
      <div class="col">
        <h4>Contact Us</h4>
        <?php if ( is_active_sidebar( 'footer_contact' ) ) : ?>
          <?php dynamic_sidebar( 'footer_contact' ); ?>
        <?php endif; ?>
        <?php if ( is_active_sidebar( 'footer_social' ) ) : ?>
          <?php dynamic_sidebar( 'footer_social' ); ?>
        <?php endif; ?>
      </div>
      <div class="col">
        <h4>Quick Links</h4>
        <nav>
          <?php
              wp_nav_menu(array(
              'theme_location' => 'menu-footer',
              'menu_class' => 'footer-nav',
              'menu_id' => '',
              'container'				=> '',
              'container_id'		=> 'footer-nav',
              'container_class' => 'list-unstyled',
              'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
              ));
          ?>
        </nav>
      </div>
      <div class="col">
        <h4>See the Impact of Giving</h4>
        <div class="wp-block-button">
            <a href="https://familycrisiscenters.kindful.com/" target="_blank" class="wp-block-button__link btn-theme" href="">Donate Now</a>
        </div>
      </div>
    </div>
    
    <p class="ftr-copy">©<?php echo date("Y"); ?> Family Crisis Center. All Rights Reserved. Web Application by <a target="_blank" href="https://www.informaticsinc.com/">Informatics, Inc</a></p>
  </div>
  
</footer>

<?php wp_footer(); ?>
</body>
</html>