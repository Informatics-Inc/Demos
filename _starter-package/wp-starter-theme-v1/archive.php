<?php get_header('basic'); ?>
<?php $post_page_id = get_option('page_for_posts'); ?>
<header class="page-hdr">
  <div class="container">
    <div class="text">
      <?php
        if ( function_exists('yoast_breadcrumb') ) {
          yoast_breadcrumb( '<ol class="breadcrumb">','</ol>' );
        }
      ?>
    <h1><?php the_title(); ?></h1>
  </div>
</header>

<main class="content">
    <section>
      <div class="container grid grid-sidebar">
        <div class="col">
            <div class="news-list">
                <?php while(have_posts()) { the_post(); ?>
                    <div class="listings">
                        <figure class="image">
                            <?php $image_id = get_post_thumbnail_id(get_the_ID());
                            $alt_text = get_post_meta($image_id , '_wp_attachment_image_alt', true); 
                            if ($image_id) {
                            ?>
                                <img src="<?php echo the_post_thumbnail_url() ?>" alt="<?php echo $alt_text ;?>" />
                            <?php } ?>
                        </figure>
                        <div class="text">
                            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                            <div class="category"><?php the_time('F j, Y'); ?></div>
                            <p><?php echo substr(get_the_excerpt(),0,175).'...'; ?></p>
                            <a href="<?php the_permalink(); ?>" class="btn-text ">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                <?php } ?>
            </div>
            <hr>
            <div class="ccm-pagination-wrapper" id="pagination">
                <?php informatics_pagination();?>
            </div>
        </div>
        <div class="col">
            <div class="sidebar">
                <div class="sidebar-container">
                    <h3>Categories</h3>
                    <ul>
                        <?php
                            $categories = get_terms(array(
                                'taxonomy' => 'category',
                                'hide_empty' => false,
                            ));
                            foreach($categories as $category) {
                                if ($category->name != 'Uncategorized') {
                                    echo '<li><a href="' . get_category_link($category->term_id) . '">' . $category->name . '</a></li>';
                                }
                            }
                        ?>
                    </ul>
                </div>
                <div class="sidebar-container">
                    <h3>Tags</h3>
                    <ul>
                    <?php foreach($tags as $tag) { ?>
                        <li><a href="<?php echo get_tag_link( $tag->term_id ); ?> " rel="tag"><?php echo $tag->name; ?></a></li>
                    <?php } ?>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
</main>

<?php get_footer('footer'); ?>