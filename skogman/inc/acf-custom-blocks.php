<?php

/* ACF Custom Block Registry  */
function hfm_acf_init_custom_blocks() {

    if ( function_exists( 'acf_register_block_type' ) ) {



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

        
    }
}
