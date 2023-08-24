<?php
/* Block Name: Insights Listing */
?>

<div class="row row-cols-1 row-cols-md-3 g-4">
    <?php
      $newscat = get_field('filter_by_category'); 
      $relatedPosts = new WP_Query(array(
        'posts_per_page' => '3',
        'cat' => $newscat, // Need this to use the variable checkbox from ACF
      ));

      while ($relatedPosts->have_posts()) {
        $relatedPosts->the_post(); ?>
        <div class="col">
        <div class="border-0 card h-100">
            <figure>
              <?php if ( has_post_thumbnail( $page->ID ) ) {
                  ?> <?php echo get_the_post_thumbnail( $page->ID, 'medium' ); ?> <?php
              } else { ?>
                  <img src="<?php echo get_theme_file_uri() ?>/img/default-image.jpg" alt="The ITC Logo - For the Greater Grid" />
              <?php } ?>
            </figure>
            <div class="card-body">
              <div class="category"><?php the_date(); ?> / <span class="cat-name"><?php echo get_the_category_list(', '); ?></span></div>
                <h5 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
              <p class="card-text">
              <?php echo get_the_excerpt() ?>
              </p>
            </div>
        </div></div>
        <?php } wp_reset_postdata(); ?>
</div>



