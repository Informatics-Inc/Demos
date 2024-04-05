<?php
/* Block Name: Testimonials */

if( have_rows('testimonials') ):
?>
<div class="container">
<div class="testimonials">
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <?php while ( have_rows('testimonials') ) : the_row(); 
              $quote = get_sub_field('quote');
              $name = get_sub_field('name');
              $title = get_sub_field('title');
          ?>
            <div class="swiper-slide">
              <div class="testimonial-item">
                <p class="quote"><?php echo esc_html($quote); ?></p>
                <p class="author">
                    <span class="name"><?php echo esc_html($name); ?></span>
                    <?php if( $title ): ?>
                        <span class="title"><?php echo esc_html($title); ?></span>
                    <?php endif; ?>
                </p>
              </div>
            </div>
        <?php endwhile; ?>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
    </div>
</div>
</div>
<?php endif; ?>
