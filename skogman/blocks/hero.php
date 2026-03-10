<?php
/* Block Name: Hero */
$template = array(
	array('core/heading', array(
		'level' => 1,
		'content' => 'H1 Title of Page',
	)),
  array( 'core/paragraph', array(
    'content' => 'Put your header content here',
  ))
);
?>

<section class="hero <?php echo esc_attr($className); ?>">
    <figure>
      <?php 
        $image = get_field('image');
        if( !empty( $image ) ): ?>
            <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
      <?php endif; ?>
    </figure>
    <div class="text">
      <?php echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" />'; ?>
    </div>
</section>