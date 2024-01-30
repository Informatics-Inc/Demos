<?php
/* Block Name: Post List */
?>

<div class="wp-block-columns is-layout-flex">
    <?php
      $newscat = get_field('filter_by_category'); 
      $relatedPosts = new WP_Query(array(
        'posts_per_page' => '3',
        'cat' => $newscat, // Need this to use the variable checkbox from ACF
        'post_type' => 'Resources', // Set the post type to 'resources'
      ));

      while ($relatedPosts->have_posts()) {
        $relatedPosts->the_post(); ?>
        <div class="wp-block-column">
          <div class="page-link-card animate-in delay-1">
              <figure>
                <?php if ( has_post_thumbnail( $page->ID ) ) {
                    ?> <?php echo get_the_post_thumbnail( $page->ID, 'medium' ); ?> <?php
                } else { ?>
                    <img src="<?php echo get_theme_file_uri() ?>/img/default-image.jpg" alt="FCC Logo Default Image" />
                <?php } ?>
              </figure>
              <div class="card-body">
                <p class="post-info"><?php the_date(); ?> | <?php echo get_the_category_list(', '); ?></p>
                <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <p><?php echo get_the_excerpt() ?></p>
              </div>
              <a href="<?php the_permalink(); ?>" class="btn-text">Learn More <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
      <?php } wp_reset_postdata(); ?>
</div>
