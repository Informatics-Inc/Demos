<?php get_header( '' ); ?>
<?php $post_page_id = get_option('page_for_posts'); ?>

<main class="content">
  <section class="post-detail">
    <div class="container">
      <div class="post-header">
        <h1><?php the_title(); ?></h1>
        <p class="is-style-lead"><?php echo substr(get_the_excerpt(),0,350).''; ?></p>
        <a href="/in-the-news" class="btn-text left-icon"><i class="fa fa-chevron-left"></i>Back to News List</a>
      </div>
      <?php the_content(); ?>
        <hr />
        <div class="share">
          <h4>Share This Page</h4>
          <ul class="social">
          <?php $postUrl = 'http' . ( isset( $_SERVER['HTTPS'] ) ? 's' : '' ) . '://' . "{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}"; ?>
          <li><a target="_blank" href="https://twitter.com/intent/tweet?url=<?php echo $postUrl; ?>&text=<?php echo the_title(); ?>&via=<?php the_author_meta( 'twitter' ); ?>" title="Tweet this"><i class="fab fa-twitter"></i></a></li>
          <li><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $postUrl; ?>" title="Share on Facebook"><i class="fab fa-facebook"></i></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo $postUrl; ?>" title="Share on LinkedIn"><i class="fab fa-linkedin"></i></a></li>
          </ul>
          <a href="/news" class="btn-text left-icon"><i class="fa fa-chevron-left"></i>Back to News List</a>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
