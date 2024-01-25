<?php
/*
Template Name: Go to first child
*/
$pagekids = get_pages("child_of=".$post->ID."&sort_column=menu_order");
if ($pagekids) {
$firstchild = $pagekids[0];
wp_redirect(get_permalink($firstchild->ID));
} else { ?>
<?php /* Template Name: Default */
get_header();
?>

<main id="content">
   
    <?php the_content(); ?>
   
</main>

<?php 
    get_footer();
?>
<?php } ?>


