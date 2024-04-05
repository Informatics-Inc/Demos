<?php
/* Block Name: Sidebar Nav */

// Get the current post object
global $post;
if (!$post || !isset($post->ID)) {
    // If $post is null or doesn't have the ID property, return early
    return;
}

// Get the parent ID based on the current post
$parent_id = $post->post_parent ? end(get_post_ancestors($post->ID)) : $post->ID;

// Get the top-level parent ID
$top_parent_id = $parent_id;

// Loop to get the top-level parent ID
while ($parent_id) {
    if ($parent_id > 0) {
        $top_parent_id = $parent_id;
    }
    $parent_id = wp_get_post_parent_id($parent_id);
}

// Get the title of the top-level parent
$parent_title = get_the_title($top_parent_id);
?>
<div class="box sec-nav-title">
    <h4><?php echo esc_html($parent_title); ?></h4>
    <nav class="sec-nav">
        <ul>
            <?php
            // Arguments for wp_list_pages to list child pages
            $args = array(
                'sort_column' => 'menu_order',
                'sort_order' => 'asc',
                'title_li' => '',
                'child_of' => $top_parent_id,
                'echo' => 1
            );
            wp_list_pages($args);

            // Additional sidebar navigation
            $additional = get_field('additional_sidebar_navigation', $top_parent_id);
            if ($additional) {
                echo str_replace("</ul>", "", str_replace("<ul>", "", $additional));
            }
            ?>
        </ul>
    </nav>
</div>
