<?php
/* Block Name: Image Combo */

if ( get_field('alternate_layout')) {
  $className .= 'alternate_layout ';
}

?>

<figure class="img-combo <?php echo esc_attr($className); ?>">
  <?php 
      $image = get_field('image_1');
      if( !empty( $image ) ): ?>
        <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?> " class="animate-in delay-1" />
  <?php endif; ?>

  <?php 
      $image = get_field('image_2');
      if( !empty( $image ) ): ?>
          <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="animate-in delay-2" />
  <?php endif; ?>

</figure>

