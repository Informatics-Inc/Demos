<?php
/* Block Name: Accordion */

$rows = get_field('accordion_group');
if( $rows ) {
    $id_accordion = uniqid(); // Generate a unique ID for the accordion
    $index = 0; // Initialize index for unique IDs
    foreach( $rows as $row ) {
        $index++; // Increment index for unique IDs
        $id = uniqid(); // Generate unique ID for each accordion item
        $title = $row['title'];
        $content = $row['content'];
?>
        <div class="accordion-item">
            <h3 class="accordion-header collapsed" id="accordion-control-<?php echo $id; ?>" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-<?php echo $id; ?>" aria-expanded="false" aria-controls="accordion-collapse-<?php echo $id; ?>">
                <?php echo esc_html($title); ?>
                <i class="fa fa-chevron-circle-down"></i>
            </h3>
            <div id="accordion-collapse-<?php echo $id; ?>" class="content accordion-collapse collapsed" data-bs-parent="#accordion-<?php echo $id_accordion; ?>">
                <div class="accordion-body">
                <?php echo wp_kses_post(wpautop($content)); ?>
                </div>
            </div>
        </div>
<?php 
    }
}
?>
