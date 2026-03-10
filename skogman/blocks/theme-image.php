<?php
/* Block Name: Theme Image */

// Initialize class name
$className = '';

// Check if image_style is "two images"
if (get_field('image_style') === 'two images') {
    $className .= 'two-images ';
}

// Check if image_style is "content"
if (get_field('image_style') === 'content') {
    $className .= 'image-content ';
}

// Check if flair_one is selected
$flairOptions = get_field('image_flair');
if (is_array($flairOptions) && in_array('flair_one', $flairOptions)) {
    $className .= 'flair-one ';
}

// Check if flair_two is selected
if (is_array($flairOptions) && in_array('flair_two', $flairOptions)) {
    $className .= 'flair-two ';
}

?>

<figure class="theme-img <?php echo esc_attr($className); ?>">
    <?php 
    // Check if image 1 is selected
    $image1 = get_field('image_one');
    if (!empty($image1)) : ?>
        <img src="<?php echo esc_url($image1['sizes']['medium']); ?>" alt="<?php echo esc_attr($image1['alt']); ?>" />
    <?php endif;

    // Check if image_style is "two images"
    if (get_field('image_style') === 'two images') :
        // Check if image 2 is selected
        $image2 = get_field('image_two');
        if (!empty($image2)) : ?>
            <img src="<?php echo esc_url($image2['sizes']['medium']); ?>" alt="<?php echo esc_attr($image2['alt']); ?>" />
        <?php endif;
    endif;

    // Check if image_style is "content"
    if (get_field('image_style') === 'content') :
        // Check if content is provided
        $content = get_field('image_content');
        if (!empty($content)) : ?>
            <div class="theme-image-content">
                <?php echo $content; ?>
            </div>
        <?php endif;
    endif;
    ?>
</figure>
