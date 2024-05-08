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
		'name'          => 'Header CTA',
		'id'            => 'header_cta',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Footer CTA',
		'id'            => 'footer_cta',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Footer Content',
		'id'            => 'footer_content',
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
		'name'          => 'Social Links',
		'id'            => 'social_links',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Global Sidebar',
		'id'            => 'global_sidebar',
        'before_widget' => '',
        'after_widget' => '',
	));
}
add_action( 'widgets_init', 'theme_widgets_init' );