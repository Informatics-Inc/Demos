<?php
// Block Name: Post List
// Get block attributes
$category = get_field('category');
$post_count = get_field('post_count');
$show_date = get_field('show_date');
$show_category = get_field('show_category');

// WP_Query arguments
$args = array(
    'post_type' => 'post',
    'posts_per_page' => $post_count,
    'category_name' => $category,
);
?>

<div class="post-wrapper">

<?php

// The Query
$query = new WP_Query($args);

// The Loop
if ($query->have_posts()) :
    while ($query->have_posts()) : $query->the_post();
?>

        <div class="theme-card">
            <figure>
            <?php
                if (has_post_thumbnail()) {
                    the_post_thumbnail();
                } else {
                    echo '<img src="' . get_theme_file_uri('img/default/blog-thumb.webp') . '" alt="Default Image">';
                }
            ?>
            </figure>
            <div class="card-body">

            <div class="post-info">
                <?php if ($show_date) : ?>
                    <span class="post-date"><?php echo get_the_date(); ?></span>
                <?php endif; ?>
                <?php if ($show_category) : ?>
                    <?php $categories = get_the_category();
                    if ($categories) :
                        foreach ($categories as $category) :
                            echo '| <span class="post-category"><a href="' . esc_url(get_category_link($category->term_id)) . '" rel="category">' . esc_html($category->name) . '</a></span>';
                        endforeach;
                    endif;
                    ?>
                <?php endif; ?>
                </div>
                <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <p><?php the_excerpt(); ?></p>
                <div class="wp-block-buttons is-layout-flex">
                    <div class="wp-block-button is-style-btn-theme">
                        <a href="<?php the_permalink(); ?>" class="wp-block-button__link wp-element-button">Learn More</a>
                    </div>
                </div>
            </div>
            
       
</div>
<?php
    endwhile;
endif;

// Restore original Post Data
wp_reset_postdata();
?>
 </div>
