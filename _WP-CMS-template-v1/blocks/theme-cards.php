<?php
/* Block Name: Theme Cards */

// Get block settings
$use_icons = get_field('use_icons', $block['id']);
$cards = get_field('cards', $block['id']);
$card_size = get_field('card_size', $block['id']);
$dark_box = get_field('dark_box', $block['id']);
$text_over_image = get_field('text_over_image', $block['id']);
$tall_image = get_field('tall_image', $block['id']);
$center_text = get_field('center_text', $block['id']);
$overlap_top_element = get_field('overlap_top_element', $block['id']);
$contain_image = get_field('contain_image', $block['id']);
$flex_grow = get_field('flex_grow', $block['id']);

// Initialize the theme cards container class
$theme_cards_class = 'theme-cards';

// Add the card size class to the theme cards container if card size is set
if ($card_size) {
    $theme_cards_class .= ' ' . esc_attr($card_size);
}

// Add the dark box class to the theme cards container if dark box is selected
if ($dark_box) {
    $theme_cards_class .= ' dark-box';
}

// Add the text-over-image class to the theme cards container if dark box is selected
if ($text_over_image) {
    $theme_cards_class .= ' text-over-image';
}

// Add the tall image class to the theme cards container if tall image is selected
if ($tall_image) {
    $theme_cards_class .= ' tall-image';
}

// Center All Text
if ($center_text) {
    $theme_cards_class .= ' center-text';
}

// Overlap Top Element
if ($overlap_top_element) {
    $theme_cards_class .= ' overlap-top-element';
}

// Contain Image
if ($contain_image) {
    $theme_cards_class .= ' contain-image';
}

// Flex Grow
if ($flex_grow) {
    $theme_cards_class .= ' flex-grow';
}

// Display the theme cards container
if ($cards) {
    echo '<div class="' . $theme_cards_class . '">';

    foreach ($cards as $card) {
        echo '<div class="theme-card';
        if ($card_size) {
            echo ' ' . esc_attr($card_size);
        }
        echo '">';
    
        if ($use_icons) {
            $icon_class = !empty($card['icon_name']) ? esc_attr($card['icon_name']) : 'check';
            echo '<i class="fa fa-' . $icon_class . '"></i>';
        } elseif ($card['image']) {
            echo '<figure><img src="' . esc_url($card['image']['url']) . '" alt="' . esc_attr($card['image']['alt']) . '"></figure>';
        }
    
        echo '<div class="card-body">' . wpautop(wp_kses_post($card['content']));
    
        /// Check if the 'link' key exists and is not empty
            if (isset($card['link']) && !empty($card['link'])) {
                // Access the 'title' key within the link array to get the link text
                $link_text = $card['link']['title'];
                // Output the link styled as a WordPress button
                echo '<div class="wp-block-buttons is-layout-flex">';
                echo '<div class="wp-block-button is-style-btn-theme">';
                echo '<a href="' . esc_url($card['link']['url']) . '" class="wp-block-button__link wp-element-button">' . esc_html($link_text) . '</a>';
                echo '</div>';
                echo '</div>';
            }

    
        echo '</div></div>';
    }

    echo '</div>'; // Close theme-cards container
}
?>
