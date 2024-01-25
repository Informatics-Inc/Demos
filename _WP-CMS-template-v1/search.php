<?php /* Template Name: Default */
get_header();
?>
<?php

global $query_string;

wp_parse_str( $query_string, $search_query );
$search = new WP_Query( $search_query );

?>
<main id="content">
<section class="page-hdr">
    <figure>
        <img src="<?php echo get_theme_file_uri() ?>/img/hero-2.jpg" alt="Our Savior's Church Interior" />
        <?php echo get_the_post_thumbnail( $post_page_id, 'post_thumbnail', array() ); ?>
    </figure>
      <div class="content">
        <h1>Search</h1>
      </div>
</section>
<section class="skinny">
    <div class="wp-block-columns">
        <div class="wp-block-column">
        <?php get_search_form(); ?>
        <hr />
        <?php
            $s=get_search_query();
            $args = array(
                            's' =>$s
                        );
                // The Query
            $the_query = new WP_Query( $args );
            if ( $the_query->have_posts() ) {
                    _e("<h3>Search Results for: ".get_query_var('s')."</h3>");
                    ?> <ul class="link-list"> <?php
                    while ( $the_query->have_posts() ) {
                    $the_query->the_post();
                            ?>
                                <li class="search-result">
                                    <h3><a href="<?php the_permalink(); ?>">
                                    <?php the_title(); ?>
                                </a></h3>
                                <p><?php echo get_the_excerpt() ?></p>
                                </li>
                            <?php
                    }
                    ?> </ul> <?php
                }else{
            ?>
                    <div class="box">
                        <h2>Nothing Found</h2>
                        <p>Sorry, but nothing matched your search criteria. Please try again with some different keywords.</p>
                    </div>
            <?php } ?>
        </div>
    </div>
</section>
</main>

<?php 
    get_footer();
?>
