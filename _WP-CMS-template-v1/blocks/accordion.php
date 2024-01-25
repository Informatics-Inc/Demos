<?php
/* Block Name: Accordion */

if (!empty($block['className'])) {
    $className .= ' ' . $block['className'];
}
if (!empty($block['align'])) {
    $className .= ' align' . $block['align'];
}
if( have_rows('accordion_group') ):
    $id_accordion = uniqid();
?>
<div class="accordion accordion-flush <?=$className?>" id="accordionFlushExample<?= $id_accordion ?>">
    <?php while ( have_rows('accordion_group') ) : the_row(); 
        if( get_row_layout() == 'accordion_item' ): 
        $id = uniqid();
        $title = get_sub_field('title');
        $content = get_sub_field('content');
        ?>
        <div class="accordion-item">
            <h2 class="accordion-header collapsed" id="flush-heading<?= $id ?>" data-bs-toggle="collapse" data-bs-target="#flush-collapse<?= $id ?>" aria-expanded="false" aria-controls="flush-collapse<?= $id ?>">
                <?= $title ?>
                <i class="fa fa-chevron-circle-down"></i>
            </h2>
            <div id="flush-collapse<?= $id ?>" class="accordion-collapse collapsed" aria-labelledby="flush-heading<?= $id ?>" data-bs-parent="#accordionFlushExample<?= $id_accordion ?>" style="">
                <div class="accordion-body">
                    <?= $content ?>
                </div>
            </div>
        </div>
    <?php endif;
    endwhile; ?>
</div>
<?php  endif;?>