<?php /* Template Name: Company */
get_header();
?>

<main class="content">
   
    <?php the_content(); ?>
    
    <!-- PREVIOUS NEXT ITEM HERE - Please Complete
    <?php
    $pagelist = get_pages("child_of=".$post->post_parent."&parent=".$post->post_parent."&sort_column=menu_order&sort_order=asc");
    $pages = array();
    foreach ($pagelist as $page) {
    $pages[] += $page->ID;
    }

    $current = array_search($post->ID, $pages);
    $prevID = $pages[$current-1];
    $nextID = $pages[$current+1];
    ?>

    <div class="navigation">
    <?php if (!empty($prevID)) { ?>
    <div class="previous">
    <a href="<?php echo get_permalink($prevID); ?>" title="<?php echo get_the_title($prevID); ?>">Previous</a>
    </div>
    <?php }
    if (!empty($nextID)) { ?>
    <div class="Next">
    <a href="<?php echo get_permalink($nextID); ?>" title="<?php echo get_the_title($nextID); ?>">Next</a>
    </div>
    <?php } ?>
    </div>
    
    -->
</main>

<?php 
    get_footer();
?>
