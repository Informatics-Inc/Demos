<?php
/* Widgets  */
function theme_widgets_init() {
  register_sidebar(array(
		'name'          => 'Footer CTA Content',
		'id'            => 'footer_cta_content',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Footer CTA Form',
		'id'            => 'footer_cta_form',
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
		'name'          => 'Footer Content',
		'id'            => 'footer_content',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Site Phone',
		'id'            => 'site_phone',
        'before_widget' => '',
        'after_widget' => '',
	));
  register_sidebar(array(
		'name'          => 'Site Location',
		'id'            => 'site_location',
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