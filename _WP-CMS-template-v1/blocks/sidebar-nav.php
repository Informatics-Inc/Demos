<?php
/* Block Name: Sidebar Nav*/
global $wp_query;
    $post = $wp_query->post;
    $ancestors = get_post_ancestors($post);
    if( empty($post->post_parent) ) {
        $parent = $post->ID;
    } else {
        $parent = end($ancestors);
    } 
?>
<div class="sidebar box">
    <h4><?php echo get_the_title($parent); ?></h4>
    <nav class="sec-nav">
        <ul>
            <?php
                global $post;
                $parent_id = wp_get_post_parent_id( $post->ID );
                $top_parent = $post->ID;
                while( $parent_id ){
                    if( $parent_id > 0 ){
                        $top_parent = $parent_id;
                    }
                    $parent_id = wp_get_post_parent_id( $parent_id );
                }
                $args = array( 
                    'sort_column' => 'menu_order', 
                    'sort_order' => 'asc',
                    'title_li' => '',
                    'child_of' => $top_parent,
                    'echo' => 1
                );
                $children = wp_list_pages($args);
                $additional = get_field('additional_sidebar_navigation', get_post($top_parent));
                if ($additional) {
                    echo str_replace("</ul>", "", str_replace("<ul>", "", $additional));
                }
            ?>
        </ul>
    </nav>
</div>


