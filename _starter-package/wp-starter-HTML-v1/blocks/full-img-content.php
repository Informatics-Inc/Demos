<?php
/* Block Name: Full Image Content */

$template = array(
	array('core/heading', array(
		'level' => 2,
		'content' => 'Update This Content',
	)),
  array( 'core/paragraph', array(
      'content' => 'Put your summary content here',
  ))
);
if ( get_field('swap_sides')) {
  $className .= 'swap-sides ';
}
?>

<section class="full-img-content position-relative <?php echo esc_attr($className); ?>">
      <figure>
        <?php 
          $image = get_field('background_image');
          if( !empty( $image ) ): ?>
              <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
        <?php endif; ?>
      </figure>
      <div class="container">
        <div class="row">
          <div class="col animate-in delay-4 ">
            <?php echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" />'; ?>
          </div>
          <div class="col animate-in delay-5 ">
            <?php 
            $image = get_field('content_image');
            if( !empty( $image ) ): ?>
                <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="img-fluid" />
            <?php endif; ?>
          </div>
        </div>
      </div>
</section>