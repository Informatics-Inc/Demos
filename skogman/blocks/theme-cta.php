<?php
/* Block Name: Call to action */

// Get the block style
$ctaStyle = get_field('cta_style');

// Get the button link
$buttonLink = get_field('button_link');

// Get the vertical option
$vertical = get_field('vertical');

// Initialize the class for the theme-cta div
$ctaClass = 'theme-cta';

// Add additional class if the style is image
if ($ctaStyle === 'image') {
    $ctaClass .= ' theme-cta-image';
}

// Add additional class if vertical is true
if ($vertical) {
    $ctaClass .= ' cta-vertical';
}

// Set Innerblocks Content
$template = array(
	array('core/heading', array(
		'level' => 3,
		'content' => 'Contact Us Today',
	)),
    array( 'core/paragraph', array(
        'content' => 'Learn more about how we can help you over on our contact page',
    ))
);
?>

<div class="<?php echo esc_attr($ctaClass); ?>">
    <?php if ($ctaStyle === 'image') : ?>
        <?php $ctaImage = get_field('cta_image'); ?>
        <?php if (!empty($ctaImage)) : ?>
            <figure><img src="<?php echo esc_url($ctaImage['url']); ?>" alt="<?php echo esc_attr($ctaImage['alt']); ?>" /></figure>
        <?php endif; ?>
    <?php endif; ?>

    <div class="cta-content">
        <?php echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" />'; ?>
    </div>

    <?php if (!empty($buttonLink)) : ?>
        <div class="cta-button">
            <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="<?php echo esc_url($buttonLink['url']); ?>"><?php echo esc_html($buttonLink['title']); ?></a></div>
        </div>
    <?php endif; ?>
</div>
