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
$image = get_field('icon');
if ( get_field('box')) {
  $className .= 'box ';
}
?>

<div class="icon-block <?php echo esc_attr($className); ?>">
  <?php if ( !empty( $image ) ) { ?>
      <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
    <?php } else { ?>
        <img src="<?php echo get_theme_file_uri() ?>/img/ico-check.png" alt="Check Icon" />
    <?php } ?>
  <div class="icon-content">
    <?php echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" />'; ?>
  </div>
</div>