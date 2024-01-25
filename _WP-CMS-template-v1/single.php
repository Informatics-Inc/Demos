<?php get_header('scrolled'); ?>
<?php $post_page_id = get_option('page_for_posts'); ?>

<main id="content">
    <div class="container skinny">
    <div class="blog-hdr">
      <p class="date"><?php the_date(); ?></p>
      <h1><?php the_title(); ?></h1>
      <p class="is-style-lead"><?php echo get_the_excerpt() ?></p>
      <div class="wp-block-buttons is-style-btn-text is-layout-flex is-content-justification-center">
        <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/hear-us">Back to Listing</a></div>
      </div>
    </div>
    <div class="blog-content">
      <?php the_content(); ?>
    </div>
    <section class="blog-share">
      <h3>Share This Page</h3>
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
</main>

<?php get_footer(); ?>
