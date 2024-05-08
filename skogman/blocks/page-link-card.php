<?php
/* Block Name: Page Link Card */
$className = 'hover-card';

$page = get_field('page_link');
$permalink = get_permalink( $page->ID );
$title = get_the_title( $page->ID );
$excerpt = get_the_excerpt( $page->ID );

?>
<?php if ($page) { ?>

<div class="animate-in delay-1 page-link-card">
    <figure>
        <?php if ( has_post_thumbnail( $page->ID ) ) {
            ?> <?php echo get_the_post_thumbnail( $page->ID, 'full' ); ?> <?php
        } else { ?>
            <img src="<?php echo get_theme_file_uri() ?>/img/default-image.jpg" alt="FCC Logo Default Image" />
        <?php } ?>
    </figure>
    <div class="card-body">
        <h3><?php echo esc_html( $title ); ?></h3>
        <p class="card-text"><?php echo esc_html( $excerpt ); ?></p>
    </div>
    <a href="<?php echo esc_url( $permalink ); ?>" class="btn-text">Learn More <i class="fa fa-arrow-circle-right"></i></a>
</div>

<?php }  ?>

