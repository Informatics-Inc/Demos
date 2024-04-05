<?php get_header(''); ?>
<?php $post_page_id = get_option('page_for_posts'); ?>

<main id="content">

<section class="page-hdr">

    <figure>
        <?php
        $header_image = get_the_post_thumbnail_url($post_page_id, 'post_thumbnail');
        if (empty($header_image)) {
            $header_image = get_field('image', $post_page_id); // Get ACF image field value
            $header_image_url = !empty($header_image) ? esc_url($header_image['url']) : get_theme_file_uri('/img/default/default-header.webp');
            $header_image_alt = !empty($header_image) ? esc_attr($header_image['alt']) : 'Design Element';
            echo '<img src="' . $header_image_url . '" alt="' . $header_image_alt . '" />';
        } else {
            echo get_the_post_thumbnail($post_page_id, 'post_thumbnail', array());
        }
        ?>
    </figure>   
      <div class="content">
        <nav aria-label="breadcrumb">
            <?php
                if ( function_exists('yoast_breadcrumb') ) {
                yoast_breadcrumb( '<ol class="breadcrumb-nav">','</ol>' );
                }
            ?>
        </nav>
        <?php
        if (is_category() || is_tag()) {
            // Check if it's a category or tag archive
            echo '<h1>' . single_cat_title('', false) . '</h1>';
        } elseif (is_post_type_archive()) {
            // Check if it's a custom post type archive
            $post_type = get_post_type_object(get_post_type());
            echo '<h1>' . esc_html($post_type->labels->name) . '</h1>';
        } else {
            // For other pages, display the page title
            if (is_home()) {
                // If it's the posts page, use "Blog" as the title
                echo '<h1>Blog</h1>';
            } else {
                // Otherwise, use the title of the current page
                echo '<h1>' . get_the_title() . '</h1>';
            }
        }
        ?>

      </div>
</section>

<div class="wp-block-columns is-layout-flex">
      <div class="wp-block-column" style="flex-basis: 75%;">
        <?php while(have_posts()) { the_post(); ?>
            <div class="blog-list-item">
                <figure>
                    <?php $image_id = get_post_thumbnail_id(get_the_ID());
                    $alt_text = get_post_meta($image_id , '_wp_attachment_image_alt', true); 
                    if ($image_id) {
                    ?>
                    <img src="<?php echo the_post_thumbnail_url() ?>" alt="<?php echo $alt_text ;?>" />
                    <?php } else { ?>
                        <img src="<?php echo get_theme_file_uri() ?>/img/default/blog-thumb.webp" alt="Design element" />
                    <?php } ?>        
                </figure>
                <div class="text">
                    <p class="date is-style-eyebrow"><?php the_time('F j, Y'); ?></p>
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <p><?php echo get_the_excerpt(); ?></p>
                    <div class="wp-block-buttons is-style-btn-text is-layout-flex">
                    <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="<?php the_permalink(); ?>">Read More</a></div>
                    </div>
                </div>
            </div>
        <?php } ?>
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
         <?php if ( is_active_sidebar( 'global_sidebar' ) ) : ?>
          <?php dynamic_sidebar( 'global_sidebar' ); ?>
        <?php endif; ?>

      </div>
    </div>
</div>
</main>

<?php get_footer('footer'); ?>