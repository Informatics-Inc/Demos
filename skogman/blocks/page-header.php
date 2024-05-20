<?php
/* Block Name: Page Header */

$image = get_field('image');
$image_url = !empty($image) ? esc_url($image['url']) : get_theme_file_uri('/img/default/default-header.webp');
$image_alt = !empty($image) ? esc_attr($image['alt']) : 'Design Element';
?>

<section class="page-hdr">
    <figure>
        <img src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>" />
    </figure>
   
    <div class="content">
        <nav aria-label="breadcrumb">
            <?php if (function_exists('yoast_breadcrumb')) : ?>
                <?php yoast_breadcrumb('<ol class="breadcrumb-nav">', '</ol>'); ?>
            <?php endif; ?>
        </nav>
        <h1><?php the_title(); ?></h1>
    </div>
</section>
