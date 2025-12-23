<?php 
/* Register Block Pattern */
function register_theme_patterns() {
    remove_theme_support( 'core-block-patterns' );
    register_block_pattern_category(
        'theme',
        array( 'label' => __( 'Theme', 'text-domain' ) )
    );
    register_block_pattern(
        'common/content',
        array(
        'title'       => __( 'Secondary Content', 'text-domain' ),
        'description' => _x( 'A basic page with header and column content. Great for starting a new page.', 'text-domain' ),
        'categories'  => array( 'theme' ),
        'content'     => '
        <!-- wp:pattern {"slug":"folience/sidebar-nav"} /-->

        <!-- wp:acf/basic-header {"name":"acf/basic-header","data":{"image":"","_image":"field_64ac59c2cc6ec"},"align":"full","mode":"preview"} /-->
        
        <!-- wp:columns -->
        <div class="wp-block-columns"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:paragraph {"className":"is-style-eyebrow"} -->
        <p class="is-style-eyebrow">This is a great layout</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:heading -->
        <h2 class="wp-block-heading">This website is going to be very easy for people to use!</h2>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph {"className":"is-style-lead"} -->
        <p class="is-style-lead">Use the "lead" style to help break up your content and make your text readable to visitors.</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:paragraph -->
        <p>An has feugiat expetenda constituto, at legere efficiantur eum, vix causae instructior ut. Ea duo dignissim pertinacia, pro vidisse sensibus appellantur ex. Eam reque aliquid blandit no.</p>
        <!-- /wp:paragraph --></div>
        <!-- /wp:column -->
        
        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:acf/image-combo {"name":"acf/image-combo","data":{"image_1":61,"_image_1":"field_64ad5ac987d55","image_2":61,"_image_2":"field_64ad5afc87d56","alternate_layout":"0","_alternate_layout":"field_64ad5b0587d57"},"align":"full","mode":"preview"} /--></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns -->
        ',
        )
    );
    
}
add_action( 'init', 'register_theme_patterns' );

?>