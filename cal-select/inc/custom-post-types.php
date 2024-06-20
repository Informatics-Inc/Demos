<?php

/* Register Post Types */
function theme_post_types()
{
    register_post_type('projects', array(
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'projects'),
        'has_archive' => true,
        'public' => true,
        'publicly_queryable' => true,
        'show_in_rest' => true,
        'labels' => array(
            'name' => 'Projects',
            'add_new_item' => 'Add New Project',
            'all_items' => 'All Projects',
            'singular' => 'Project'
        ),
        'menu_icon' => 'dashicons-align-left',
        'template' => array( 
			array( 'core/pattern', array(
				'slug' => 'itc/project-detail',
			) )
		)
    ));
}
add_action('init', 'theme_post_types');

/* Posts Per Page */
// function set_posts_per_page_for_towns_cpt( $query ) {
//     if ( !is_admin() && $query->is_main_query() && is_post_type_archive( 'jobs' ) ) {
//       $query->set( 'posts_per_page', '12' );
//     }
//     if ( !is_admin() && $query->is_main_query() && $query->is_search() ) {
//         $query->set( 'posts_per_page', '20' );
//     }
//     $post_type = filter_input( INPUT_GET, 'post_type', FILTER_SANITIZE_STRING );
//     if ( $post_type && $query->is_main_query() && $query->is_search() )
//         $query->set( 'post_type', [ $post_type ] );
// }
// add_action( 'pre_get_posts', 'set_posts_per_page_for_towns_cpt' );
// }
// Add custom post format
// function custom_post_formats() {
//     add_theme_support('post-formats', array('gallery', 'video'));
// }
// add_action('after_setup_theme', 'custom_post_formats', 11);
