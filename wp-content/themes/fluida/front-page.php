<?php
/**
 * The template for displaying the landing page/blog posts
 * The functions used here can be found in includes/landing-page.php
 *
 * @package Fluida
 */
if ( is_page_template() ) {
	load_template( get_page_template() );
	return true;
}

get_header();

if (!function_exists('fluida_lp_layoutclass')):
function fluida_lp_layoutclass () {
	$lp = cryout_get_option( 'fluida_landingpage' );
	if ( $lp ) {
		echo 'fluida-landing-page one-column';
	} else {
		echo fluida_get_layout_class();
	}
} // fluida_lp_layoutclass()
endif;
?>

<div id="container" class=" <?php fluida_lp_layoutclass() ?>">
	<main id="main" role="main" class="main">
	<?php
	cryout_before_content_hook();

	$fluida_landingpage = cryout_get_option ('fluida_landingpage');

	if ( $fluida_landingpage ) {
		get_template_part( apply_filters('fluida_landingpage_main_template', 'content/landing-page' ) );
	} else {
		fluida_lpindex();
	}

    cryout_after_content_hook();
	?>
	</main><!-- #main -->
	<?php if ( ! $fluida_landingpage ) { fluida_get_sidebar(); } ?>
</div><!-- #container -->

<?php get_footer();
