<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WC3JPZ8');</script>
<!-- End Google Tag Manager -->
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WC3JPZ8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

    <a id='skip-nav' class='screenreader-text' href='#content'>
      Skip to Content
    </a>

    <!-- HEADER -->
    <div class="home-header">
    <header id="site-header"> 
      <div class="container position-relative ">
        <div class="mobile-header">
          <a href="/" id="logo">
            <img src="<?php echo get_theme_file_uri() ?>/img/logo-color.svg" alt="AB Pros Logo " />
          </a>
          <button id="menu-toggle" class="collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#menu"
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

        <!-- MENU -->
        <nav id="menu" class="menu collapse">
          <div class="desktop-header">
            <a href="/" id="logo">
              <img src="<?php echo get_theme_file_uri() ?>/img/logo-inverse.svg" alt="Folience Logo" />
              <img src="<?php echo get_theme_file_uri() ?>/img/logo-color.svg" alt="Folience Logo" />
            </a>
            <?php
              wp_nav_menu(array(
                'theme_location' => 'menu-main',
                'menu_class' => '',
                'menu_id' => 'menu-main',
                'container'				=> '',
                'container_id'		=> '',
                'container_class' => '',
                'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                'fallback_cb'     => false,
                'walker' => new Main_Nav_Walker()
              ));
            ?>
            
            <?php
              wp_nav_menu(array(
                'theme_location' => 'menu-utility',
                'menu_class' => '',
                'menu_id' => 'menu-utility',
                'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                'container'				=> '',
                'container_id'		=> '',
              ));
            ?>
        </nav>
      </div>
    </header>
    </div>
