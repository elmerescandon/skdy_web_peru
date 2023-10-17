<?php set_query_var( 'ENTRY', 'tienda_retail' );
get_header(); ?>

<div class="main">
    <div class="header">Tienda para Mayoristas</div>
    <p class="subtitle">Gracias por tu interés en comprar Skullcandy para tu tienda. Nosotros te ofrecemos:</p>
    <ul class="mayorista-features">
        <li class="mayorista-features__item">Nuestro catálogo mayorista está disponible desde compras mínimas de S/.750</li>
        <li class="mayorista-features__item">Despacho de los productos a tu almacén</li>
        <li class="mayorista-features__item">Pago en línea mediante tarjeta de crédito o débito. Si deseas realizar algún depósito bancario, contáctate con contacto@blacksheep.com.pe</li>
    </ul>


    <div class="mayorista-store">
        <div clas="mayorista-store__title">
            PRODUCTOS
        </div>
        <?php echo($woocommerce->get('products')); ?>
    </div>
</div>


<?php get_footer();
