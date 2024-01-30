<?php

/* ACF Custom Block Registry  */
add_action( 'acf/init', 'hfm_acf_init_blocks' );
function hfm_acf_init_blocks() {

    if ( function_exists( 'acf_register_block_type' ) ) {
        acf_register_block_type(
            array(
                'name'            => 'basic-header',
                'title'           => 'Basic Header',
                'description'     => 'A basic header with image, text, and breadcrumb',
                'render_template' => 'blocks/basic-header.php',
                'category'        => 'custom',
                'icon'            => 'align-wide',
                'keywords'        => array( 'header', 'basic' ),
                'mode'            => 'preview',
                'align'           => 'full',
                'supports'        => array(
                    'align'			=> true,
                    'anchor'		=> true,
                    'customClassName'	=> true,
                    'jsx' 			=> true,
               ),
            )
        );
        acf_register_block_type(
            array(
                'name'            => 'hero',
                'title'           => 'Hero',
                'description'     => 'Page header with content and image area',
                'render_template' => 'blocks/hero.php',
                'category'        => 'custom',
                'align'           => 'full',
                'icon'            => 'superhero-alt',
                'keywords'        => array( 'Hero', 'header' ),
                'mode'            => 'preview',
                'supports'		=> [
                    'align'			=> true,
                    'anchor'		=> true,
                    'customClassName'	=> true,
                    'jsx' 			=> true,
                ]
            )
        );
        acf_register_block_type(
            array(
                'name'            => 'people-cards',
                'title'           => 'People Cards',
                'description'     => 'List people with image, name, and title',
                'render_template' => 'blocks/people-cards.php',
                'category'        => 'custom',
                'align'           => 'full',
                'icon'            => 'admin-users',
                'keywords'        => array( 'people', 'cards' ),
                'mode'            => 'preview',
                'supports'		=> [
                    'align'			=> true,
                    'anchor'		=> true,
                    'customClassName'	=> true,
                    'jsx' 			=> true,
                ]
            )
        ); 
        acf_register_block_type(
            array(
                'name'            => 'Image Combo',
                'title'           => 'Image Combo',
                'description'     => 'Place images in a fun overlap',
                'render_template' => 'blocks/img-combo.php',
                'category'        => 'custom',
                'align'           => 'full',
                'icon'            => 'text',
                'keywords'        => array( 'image', 'combo', 'img' ),
                'mode'            => 'preview',
                'supports'		=> [
                    'align'			=> true,
                    'anchor'		=> true,
                    'customClassName'	=> true,
                    'jsx' 			=> true,
                ]
            )
        );
        acf_register_block_type(
            array(
                'name'            => 'Post List',
                'title'           => 'Post List',
                'description'     => 'List a few of your posts',
                'render_template' => 'blocks/post-list.php',
                'category'        => 'theme',
                'icon'            => 'format-gallery',
                'keywords'        => array( 'news', 'blog', 'post', 'list' ),
                'mode'            => 'preview',
                'supports'        => array(
                          'jsx'   => true,
               ),
            )
        );
        acf_register_block_type(
            array(
                'name'            => 'testimonials',
                'title'           => 'Testimonials',
                'description'     => 'Place a formatted quote in your layouts',
                'render_template' => 'blocks/testimonials.php',
                'enqueue_script' => get_template_directory_uri() . '/js/swiper.min.js',
                'category'        => 'theme',
                'icon'            => 'editor-quote',
                'keywords'        => array( 'quote', 'testimonial' ),
                'mode'            => 'preview',
                'supports'        => array(
                          'jsx'   => true,
               ),
            )
        );
        acf_register_block_type(
            array(
                'name'            => 'sidebar-nav',
                'title'           => 'Sidebar Nav',
                'description'     => 'Display a list of child pages in a sidebar',
                'render_template' => 'blocks/sidebar-nav.php',
                'category'        => 'theme',
                'icon'            => 'menu',
                'keywords'        => array( 'sidebar', 'nav' ),
                'mode'            => 'preview',
                'align'           => 'full',
                'supports'        => array(
                    'align'			=> true,
                    'anchor'		=> true,
                    'customClassName'	=> true,
                    'jsx' 			=> true,
               ),
            )
        );
        acf_register_block_type(
            array(
                'name'            => 'Page Link Card',
                'title'           => 'Page Link Card',
                'description'     => 'Card that links to page using page attributes',
                'render_template' => 'blocks/page-link-card.php',
                'category'        => 'theme',
                'icon'            => 'admin-links',
                'keywords'        => array( 'page', 'link', 'card' ),
                'mode'            => 'preview',
                'align'           => 'full',
                'supports'		=> [
                    'align'			=> true,
                    'anchor'		=> true,
                    'customClassName'	=> true,
                    'jsx' 			=> true,
                ]
            )
        );
        acf_register_block_type(
            array(
                'name'            => 'icon item',
                'title'           => 'Icon Item',
                'description'     => 'Content with an icon',
                'render_template' => 'blocks/icon-item.php',
                'category'        => 'theme',
                'icon'            => 'text',
                'keywords'        => array( 'icon', 'item'),
                'mode'            => 'preview',
                'align'           => 'full',
                'supports'        => array(
                    'align'			=> true,
                    'anchor'		=> true,
                    'customClassName' => true,
                    'jsx' 			=> true,
               ),
            )
        );
        acf_register_block_type(
            array(
                'name'            => 'Full Image Content',
                'title'           => 'Full Image Content',
                'description'     => 'Full width content with an image',
                'render_template' => 'blocks/full-img-content.php',
                'category'        => 'theme',
                'icon'            => 'align-wide',
                'keywords'        => array( 'icon', 'item'),
                'mode'            => 'preview',
                'align'           => 'full',
                'supports'        => array(
                    'align'			=> true,
                    'anchor'		=> true,
                    'customClassName' => true,
                    'jsx' 			=> true,
               ),
            )
        );
        acf_register_block_type(
            array(
                'name'            => 'Accordion',
                'title'           => 'Accordion',
                'description'     => 'Put content into accordions',
                'render_template' => 'blocks/accordion.php',
                'category'        => 'theme',
                'icon'            => 'align-wide',
                'keywords'        => array( 'icon', 'item'),
                'mode'            => 'edit',
                'align'           => 'full',
                'supports'        => array(
                    'align'			=> true,
                    'anchor'		=> true,
                    'customClassName' => true,
                    'jsx' 			=> true,
               ),
            )
        );
        
    }
}
