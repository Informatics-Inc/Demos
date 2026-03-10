<?php /* Template Name: 404 */
get_header();
?>

<header class="page-hdr">
  <div class="container">
    <div class="text">
      <?php
        if ( function_exists('yoast_breadcrumb') ) {
          yoast_breadcrumb( '<ol class="breadcrumb">','</ol>' );
        }
      ?>
    <h1>Page Not Found</h1>
  </div>
</header>
<main class="content">
    <section>
        <div class="container">
        <p class="text-center">The page you requested could not be found at this address. <a href="/">Back to Home</a>.</p>
        <?php the_content(); ?>
        </div>
    </section>
</main>




<?php get_footer(); ?>
