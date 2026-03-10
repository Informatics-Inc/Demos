<?php
/* Block Name: Page Link Card */
$className = 'hover-card';

$page = get_field('page_link');
$permalink = get_permalink( $page->ID );
$title = get_the_title( $page->ID );
$excerpt = get_the_excerpt( $page->ID );

?>
<?php if ($page) { ?>

<div class="comp animate-in delay-5 card h-100 page-link">
    <figure class="image-box d-flex align-items-center">
        <?php if ( has_post_thumbnail( $page->ID ) ) {
            ?> <?php echo get_the_post_thumbnail( $page->ID, 'full' ); ?> <?php
        } else { ?>
            <img src="<?php echo get_theme_file_uri() ?>/img/logo-color.svg" alt="Folience Logo" />
        <?php } ?>
    </figure>
    <div class="card-body">
    <p class="card-text"><?php echo esc_html( $excerpt ); ?></p>
    <a href="<?php echo esc_url( $permalink ); ?>" class="btn-text">Learn More<i class="fa fa-long-arrow-right"></i></a>
    </div>
</div>

<?php }  ?>

