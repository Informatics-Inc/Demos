<?php
/* Block Name: Icon Item */

$template = array(
	array('core/heading', array(
		'level' => 3,
		'content' => 'Header Item',
	)),
  array( 'core/paragraph', array(
      'content' => 'Put your summary content here',
  ))
);

if ( get_field('box')) {
  $className .= 'box ';
}

?>

<div class="icon-item <?php echo esc_attr($className); ?>">
<?php 
      $image = get_field('icon');
      if( !empty( $image ) ): ?>
        <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?> " class="animate-in delay-1" />
  <?php else: ?>
        <i class="fa fa-check"></i>
  <?php endif; ?>
  <div class="text">
    <?php echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" />'; ?>
  </div>
</div>
