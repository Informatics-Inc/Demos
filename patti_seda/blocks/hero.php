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

<section class="hero-image <?php echo esc_attr($className); ?>">
  <div class="overlay-dark"></div>
  <figure>
    <?php 
      $image = get_field('image');
      if( !empty( $image ) ): ?>
          <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" id="hero-img" />
    <?php endif; ?>
  </figure>
  <div class="row justify-content-center">
    <div class="hero-content  position-relative">
      <?php echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" />'; ?>
    </div>
  </div>
  <div class="scroll-downs">
    <p class="text-center">SCROLL</p>
    <div class="mousey">
    <div class="scroller"></div>
    </div>
  </div>
</section>