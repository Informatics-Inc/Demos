<?php get_header('scrolled'); ?>
<?php $post_page_id = get_option('page_for_posts'); ?>

<main id="content" class="header-space">

<div class="wp-block-columns is-layout-flex">
      <div class="wp-block-column" style="flex-basis: 75%;">

      <div class="blog-hdr">
      <p class="is-style-eyebrow date"><?php the_date(); ?></p>
      <h1><?php the_title(); ?></h1>
      <p class="is-style-callout"><?php echo get_the_excerpt() ?></p>
      <div class="wp-block-buttons is-style-btn-text is-layout-flex">
        <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/hear-us">Back to Listing</a></div>
      </div>
    </div>
    <div class="blog-content">
      <?php the_content(); ?>
    </div>
    <section class="blog-share">
      <h3>Share This Post</h3>
      <ul class="social-share">
      <?php $postUrl = 'http' . ( isset( $_SERVER['HTTPS'] ) ? 's' : '' ) . '://' . "{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}"; ?>
          <li><a target="_blank" href="https://twitter.com/intent/tweet?url=<?php echo $postUrl; ?>&text=<?php echo the_title(); ?>&via=<?php the_author_meta( 'twitter' ); ?>" title="Tweet this"><i class="fab fa-twitter"></i></a></li>
          <li><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $postUrl; ?>" title="Share on Facebook"><i class="fab fa-facebook"></i></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo $postUrl; ?>" title="Share on LinkedIn"><i class="fab fa-linkedin"></i></a></li>
      </ul>
      <?php
        // Get the current post's post type
        $current_post_type = get_post_type();
        // Get the archive link for the current post type
        $archive_link = get_post_type_archive_link($current_post_type);
        if ($archive_link) {
            // Output the link in the specified format
            echo '<div class="wp-block-buttons is-style-btn-text is-layout-flex is-content-justification-center">';
            echo '<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="' . esc_url($archive_link) . '">Back to Listing</a></div>';
            echo '</div>';
        }
        ?>
  </section>

  </div>
  
  <div class="wp-block-column sidebar">
        <div class="box">
          <h4>Categories</h4>
          <nav class="sec-nav">
          <ul>
              <?php
              $current_category = get_queried_object(); // Get the current category object
              $categories = get_terms(array(
                  'taxonomy' => 'category',
                  'hide_empty' => false,
              ));

              // Get the URL of the blog post list page
              $blog_page_url = get_permalink(get_option('page_for_posts'));

              // Output the "View All" link with the blog post list page URL
              echo '<li><a href="' . esc_url($blog_page_url) . '">View All</a></li>';


              foreach($categories as $category) {
                  if ($category->name != 'Uncategorized') {
                      // Check if the current category matches the iterated category
                      $class = ($current_category && $current_category->term_id == $category->term_id) ? 'active' : '';
                      echo '<li class="' . $class . '"><a href="' . get_category_link($category->term_id) . '">' . $category->name . '</a></li>';
                  }
              }
              ?>
          </ul>
          </nav>
        </div>
        <div class="box">
          <h4>Tags</h4>
          <nav class="tag-list">
            <ul>
                <?php $tags = get_tags(); ?>
                <?php foreach($tags as $tag) { ?>
                    <li><a href="<?php echo get_tag_link( $tag->term_id ); ?> " rel="tag"><?php echo $tag->name; ?></a></li>
                <?php } ?>
            </ul>
          </nav>
        </div>

        <!-- Global Sidebar -->
        <?php if ( is_active_sidebar( 'social_links' ) ) : ?>
          <?php dynamic_sidebar( 'social_links' ); ?>
        <?php endif; ?>
        
      </div>
    </div>
</div>
</main>


<?php get_footer(); ?>
