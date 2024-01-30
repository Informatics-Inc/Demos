<?php
/* Widgets  */
function theme_widgets_init() {

  register_sidebar(array(
		'name'          => 'Header Content',
		'id'            => 'header_content',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Footer Info',
		'id'            => 'footer_info',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Footer Contact',
		'id'            => 'footer_contact',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Footer Social',
		'id'            => 'footer_social',
        'before_widget' => '',
        'after_widget' => '',
	));
}
add_action( 'widgets_init', 'theme_widgets_init' );