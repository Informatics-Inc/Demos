<?php
/* Block Name: People Cards */
?>

<?php if( have_rows('people') ): ?>
  <div class="container">
    <div class="people-grid">
    <?php while( have_rows('people') ): the_row(); 
        $image = get_sub_field('image');
        ?>
        <div class="person-card">
        <?php 
          $image = get_sub_field('image');
          if( !empty( $image ) ): ?>
              <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
        <?php endif; ?>
        <div class="card-body">
          <h3 class="name"><?php the_sub_field('name'); ?></h3>
          <p class="card-title"><?php the_sub_field('title'); ?></p>
        </div></div>
    <?php endwhile; ?>
  </div>
  </div>
<?php endif; ?>

