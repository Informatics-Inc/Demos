<!-- Footer -->
<footer class="footer">
  <figure>
    <?php if ( is_active_sidebar( 'footer_background_image' ) ) : ?>
      <?php dynamic_sidebar( 'footer_background_image' ); ?>
    <?php endif; ?>
  </figure>
  <div class="container">
    <div class="footer-content">
      <img src="<?php echo get_theme_file_uri() ?>/img/logo.svg" alt="Logo Alt Title" class="footer-logo" />
        <?php if ( is_active_sidebar( 'footer_info' ) ) : ?>
          <?php dynamic_sidebar( 'footer_info' ); ?>
        <?php endif; ?>
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
            'fallback_cb'     => false,
            'walker' => new Main_Nav_Walker()
            ));
        ?>
      </nav>
    </div>
  </div>
    <p class="footer-copy">© 2023 Website Theme. All Rights Reserved. Web Application by <a target="_blank" href="https://www.informaticsinc.com/">Informatics, Inc</a>
    </p>
</footer>

<?php wp_footer(); ?>
</body>
</html>