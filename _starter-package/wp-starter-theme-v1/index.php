<?php get_header(''); ?>
<?php $post_page_id = get_option('page_for_posts'); ?>

<main class="content">
<section class="page-hdr">
    <figure>
        <?php echo get_the_post_thumbnail( $post_page_id, 'post_thumbnail', array() ); ?>
    </figure>
   
      <div class="content">
        <h1 class="text-center mb-2">In The News</h1>
        <nav aria-label="breadcrumb">
        <?php
            if ( function_exists('yoast_breadcrumb') ) {
              yoast_breadcrumb( '<ol class="breadcrumb-nav">','</ol>' );
            }
          ?>
        </nav>
      </div>
</section>
<section>
    <div class="container">
        <div class="sidebar-grid">
            <div class="col">
                <div class="blog-list">
                    <?php while(have_posts()) { the_post(); ?>
                    <div class="blog-item">
                        <figure>
                            <?php $image_id = get_post_thumbnail_id(get_the_ID());
                            $alt_text = get_post_meta($image_id , '_wp_attachment_image_alt', true); 
                            if ($image_id) {
                            ?>
                                <img src="<?php echo the_post_thumbnail_url() ?>" alt="<?php echo $alt_text ;?>" />
                            <?php } ?>
                        </figure>
                        <div class="blog-text">
                            <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                            <div class="category"><?php the_time('F j, Y'); ?></div>
                            <p><?php echo substr(get_the_excerpt(),0,180).'...'; ?></p>
                            <a href="<?php the_permalink(); ?>" class="btn-text ">Learn More<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <?php } ?>
                </div>
                <div class="ccm-pagination-wrapper" id="pagination">
                    <?php informatics_pagination();?>
                </div>
            </div>
            <div class="col">
                <div class="sidebar">
                    <h5 class="sidebar-title">Categories</h5>
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
                <div class="sidebar">
                    <h5 class="sidebar-title">Tags</h5>
                    <ul>
                    <?php $tags = get_tags(); ?>
                        <?php foreach($tags as $tag) { ?>
                            <span class="tag-item"><a href="<?php echo get_tag_link( $tag->term_id ); ?> " rel="tag"><?php echo $tag->name; ?></a></span>
                        <?php } ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
</main>

<?php get_footer('footer'); ?>