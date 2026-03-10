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
		'name'          => 'Header Social',
		'id'            => 'header_social',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Header Phone',
		'id'            => 'header_phone',
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
		'name'          => 'Footer Background Image',
		'id'            => 'footer_bakcground_image',
        'before_widget' => '',
        'after_widget' => '',
	));
}
add_action( 'widgets_init', 'theme_widgets_init' );