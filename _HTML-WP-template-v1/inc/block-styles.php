<?php
/* Add Styles to Paragraphs */
if ( function_exists( 'register_block_style' ) ) {

    /* PARAGRAPHS */
    register_block_style(
        'core/paragraph',
        array(
            'name'         => 'lead',
            'label'        => __( 'Lead', 'textdomain' ),
            'is_default'   => false,
            'inline_style' => '.lead',
        ),
    );
    register_block_style(
        'core/paragraph',
        array(
            'name'         => 'eyebrow',
            'label'        => __( 'Eyebrow', 'textdomain' ),
            'is_default'   => false,
            'inline_style' => '.eyebrow',
        ),
    );
    register_block_style(
        'core/paragraph',
        array(
            'name'         => 'max-width',
            'label'        => __( 'Max Width', 'textdomain' ),
            'is_default'   => false,
            'inline_style' => '.max-width',
        ),
    );
    register_block_style(
        'core/paragraph',
        array(
            'name'         => 'callout',
            'label'        => __( 'Callout', 'textdomain' ),
            'is_default'   => false,
            'inline_style' => '.callout',
        ),
    );
    /* BUTTONS */
    register_block_style(
        'core/button',
        array(
            'name'         => 'btn-text',
            'label'        => __( 'Text Link', 'textdomain' ),
            'is_default'   => false,
            'inline_style' => '.btn-text',
        ),
    );
    register_block_style(
        'core/button',
        array(
            'name'         => 'btn-secondary',
            'label'        => __( 'Outline', 'textdomain' ),
            'is_default'   => false,
            'inline_style' => '.btn-secondary',
        ),
    );
    /* COLUMN BACKGROUNS */
    register_block_style(
        'core/columns',
        array(
            'name'         => 'bkg-light',
            'label'        => __( 'Light', 'textdomain' ),
            'is_default'   => false,
            'inline_style' => '.bkg-light',
        ),
    );
    register_block_style(
        'core/columns',
        array(
            'name'         => 'bkg-dark',
            'label'        => __( 'Dark', 'textdomain' ),
            'is_default'   => false,
            'inline_style' => '.bkg-dark',
        ),
    );
    register_block_style(
        'core/image',
        array(
            'name'         => 'bkg-texture',
            'label'        => __( 'Bkg Texture', 'textdomain' ),
            'is_default'   => false,
            'inline_style' => '.bkg-texture',
        ),
    );
}

?>