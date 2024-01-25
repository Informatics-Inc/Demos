<?php

/* Theme Features */
function theme_features() {
    add_theme_support('title-tag');
    add_theme_support( 'align-wide');
    add_theme_support( 'disable-custom-font-sizes' );
    add_theme_support( 'disable-custom-colors' );
    add_theme_support( 'disable-custom-gradients' );
    add_theme_support( 'editor-styles' );
    add_editor_style( 'css/editor.css' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'responsive-embeds' );
    add_post_type_support( 'page', 'excerpt' );
    register_nav_menu('menu-main', 'Main Menu');
    register_nav_menu('menu-utility', 'Utility Menu');
    register_nav_menu('menu-footer', 'Footer Menu');
}
add_action('after_setup_theme', 'theme_features');

$theme_inc_dir = 'inc';
$theme_includes = array(
    '/acf-blocks.php',                          // Register Blocks 
	'/custom-post-types.php',                   // Register Custom Post types & Taxonomies
    '/nav-walker.php',                          // Register Menu Walkers 
	'/enqueue.php',                             // Enqueue scripts and styles.
    '/widgets.php',                             // Contains the Widgets
    '/templates.php',                           // Contains the Templates
    '/patterns.php',                            // Contains Patterns
    '/theme-features.php',                      // Contains the Theme Features
    '/block-styles.php',                        // Contains the Updated Block Styles
);
foreach ( $theme_includes as $file ) {
	require_once get_theme_file_path( $theme_inc_dir . $file );
}

@ini_set( 'upload_max_size' , '256M' );
@ini_set( 'post_max_size', '256M');
@ini_set( 'max_execution_time', '300' );