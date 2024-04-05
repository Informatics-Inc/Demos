<!-- Footer -->

<footer class="footer">
<div class="ftr-cta">
  <div class="wp-block-columns is-layout-flex">
    <div class="wp-block-column is-layout-flow">
  <?php if ( is_active_sidebar( 'footer_cta' ) ) : ?>
      <?php dynamic_sidebar( 'footer_cta' ); ?>
  <?php endif; ?>
  </div>
  </div>
</div>
  <div class="container">
    <div class="ftr-cols">
      <div class="col">
        <h4>About Us</h4>
        <?php if ( is_active_sidebar( 'footer_content' ) ) : ?>
          <?php dynamic_sidebar( 'footer_content' ); ?>
        <?php endif; ?>
      </div>

      <div class="col">
        <h4>Contact Us</h4>
        <?php if ( is_active_sidebar( 'footer_contact' ) ) : ?>
          <?php dynamic_sidebar( 'footer_contact' ); ?>
        <?php endif; ?>
      </div>
      <div class="col">
        <h4>Navigate</h4>
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
        <h4>Connect</h4>
        <?php if ( is_active_sidebar( 'social_links' ) ) : ?>
          <?php dynamic_sidebar( 'social_links' ); ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <p class="ftr-copy">©<?php echo date("Y"); ?> <?php echo esc_html(get_bloginfo('name')); ?>. All Rights Reserved. Web Application by <a target="_blank" href="https://www.informaticsinc.com/">Informatics, Inc</a></p>
</footer>

<?php wp_footer(); ?>
</body>
</html>