<?php

/* ACF Custom Block Registry  */
function hfm_acf_init_custom_blocks() {

    if ( function_exists( 'acf_register_block_type' ) ) {



        acf_register_block_type(
            array(
                'name'            => 'full content',
                'title'           => 'Full Content',
                'description'     => 'Full width content block',
                'render_template' => 'blocks/full-content.php',
                'category'        => 'custom',
                'align'           => 'full',
                'icon'            => 'superhero-alt',
                'keywords'        => array( 'Full', 'Content' ),
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
                'name'            => 'timeline',
                'title'           => 'Timeline',
                'description'     => 'Add a timeline to your layouts',
                'render_template' => 'blocks/timeline.php',
                'category'        => 'custom',
                'align'           => 'full',
                'icon'            => 'list-view',
                'keywords'        => array( 'timeline', 'list' ),
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
