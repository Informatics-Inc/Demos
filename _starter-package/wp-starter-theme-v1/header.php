<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
    <a id='skip-nav' class='screenreader-text' href='#content'>
      Skip to Content
    </a>

    <header id="site-header">

      <!-- TOOLBAR -->
      <div class="toolbar">
        <div class="container">
          <div class="tools-one">
            <?php if ( is_active_sidebar( 'header_content' ) ) : ?>
                <?php dynamic_sidebar( 'header_content' ); ?>
            <?php endif; ?>
          </div>
          <div class="tools-two">
            <div class="tools-item">
              Follow Us:
              <?php if ( is_active_sidebar( 'header_social' ) ) : ?>
                  <?php dynamic_sidebar( 'header_social' ); ?>
              <?php endif; ?>
            </div>
            <div class="tools-item">
              Call Us: 
              <?php if ( is_active_sidebar( 'header_phone' ) ) : ?>
                  <?php dynamic_sidebar( 'header_phone' ); ?>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN NAV -->
      <div class="container">
        <div class="mobile-header">
          <a href="index.html" id="logo">
            <img src="<?php echo get_theme_file_uri() ?>/img/logo.svg" alt="Great River Logo " />
          </a>
          <button id="menu-toggle" class="collapsed " type="button"
              data-bs-toggle="collapse" data-bs-target="#menu"
              aria-expanded="false" aria-controls="menu">
              <div class="closed">
                Menu
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
              <div class="open">
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
          </button>
        </div>
        <nav id="menu" class="menu collapse">
          <?php
              wp_nav_menu(array(
                'theme_location'  => 'menu-main',
                'menu_class'      => '',
                'menu_id'         => '',
                'container'				=> '',
                'container_id'		=> '',
                'container_class' => '',
                'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                'fallback_cb'     => false,
                'walker' => new Main_Nav_Walker()
              ));
          ?>
        </nav>
      </div>
    </header>
