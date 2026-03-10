<?php
/* Block Name: Basic Header */
$image = get_field('image');
?>

<section class="page-hdr">
    <figure>
    <?php if ( !empty( $image ) ) { ?>
      <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
    <?php } else { ?>
        <img src="<?php echo get_theme_file_uri() ?>/img/default-header.webp" alt="A business group discusses items in a nice looking office" />
    <?php } ?>
    </figure>
   
      <div class="content">
        <h1><?php the_title(); ?></h1>
        <nav aria-label="breadcrumb">
        <?php
            if ( function_exists('yoast_breadcrumb') ) {
              yoast_breadcrumb( '<ol class="breadcrumb-nav">','</ol>' );
            }
          ?>
        </nav>
      </div>
</section>