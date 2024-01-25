<?php
/* Load Theme Files */
function theme_files() {
    wp_enqueue_style('font', 'https://use.typekit.net/rhn5gih.css');
    wp_enqueue_style('icons', get_theme_file_uri('/css/icons.min.css'));
    wp_enqueue_style('main_styles', get_theme_file_uri('/css/app.min.css'));
    wp_enqueue_script('jqueryui', 'https://code.jquery.com/jquery-3.6.3.min.js', array('jquery'), '3.6.3', true);
    wp_enqueue_script('bootstrap-scripts', get_theme_file_uri('js/bootstrap.min.js'), array('jquery'), '1.1', true);
    wp_enqueue_script('custom-scripts', get_theme_file_uri('js/scripts.js'), array('jquery'), '1.1', true);
    if(is_user_logged_in()) {
        wp_enqueue_style('loggedin-styles', get_theme_file_uri('css/logged-in.css'));
    }
    wp_deregister_style('classic-theme-styles');
    wp_dequeue_style('classic-theme-styles');
}
add_action('wp_enqueue_scripts', 'theme_files');

/* Load Custom Styles in Editor */
function load_editor_styles () {
    wp_enqueue_style('font', 'https://use.typekit.net/rhn5gih.css');
    wp_enqueue_style('icons', get_theme_file_uri('/css/icons.min.css'));
    add_editor_style( '/css/app.min.css' );
    wp_enqueue_style('wp_editor_updates', get_theme_file_uri('/css/wp-editor.css'));
    wp_deregister_style('classic-theme-styles');
    wp_dequeue_style('classic-theme-styles');
}
add_action('after_setup_theme', 'load_editor_styles');