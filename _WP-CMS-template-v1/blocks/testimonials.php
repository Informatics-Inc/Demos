<?php
/* Block Name: Testimonials */
if ( get_field('full_width')) {
  $className .= 'full-width ';
}
?>

<div class="testimonial <?php echo esc_attr($className); ?>">
  <p class="quote"><?php the_field('quote'); ?></p>
  <p class="author"><strong><?php the_field('author'); ?></strong></p>
</div>
