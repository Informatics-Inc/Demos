<?php
/* Block Name: Testimonials */
?>

<div class="container">
  <div  id="testimonials">
<div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <?php while( have_rows('testimonials') ): the_row(); 
          ?>
          <div class="swiper-slide">
            <p class="quote"><?php the_sub_field('quote'); ?></p>
            <p class="author"><strong><?php the_sub_field('name'); ?></strong> | <?php the_sub_field('title'); ?></p>
          </div>
      <?php endwhile; ?>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
</div>
</div>
</div>