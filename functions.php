<?php 

  // register webpack stylesheet and js with theme - requires extra logic to 
  // 	search for and detect webpack versioning hash in filename
  function enqueue_webpack_scripts() {
    
    $cssFilePath = glob( get_template_directory() . '/css/build/main.css' );
    // $cssFilePath = glob( get_template_directory() . '/css/build/main.min.*' );
    $cssFileURI = get_template_directory_uri() . '/css/build/' . basename($cssFilePath[0]);
    wp_enqueue_style( 'site_main_css', $cssFileURI );
    
    $jsFilePath = glob( get_template_directory() . '/js/build/main.js' );
    // $jsFilePath = glob( get_template_directory() . '/js/build/main.min.*.js' );
    $jsFileURI = get_template_directory_uri() . '/js/build/' . basename($jsFilePath[0]);
    wp_enqueue_script( 'site_main_js', $jsFileURI , null , null , true );
     
  }
  add_action( 'wp_enqueue_scripts', 'enqueue_webpack_scripts' );

?>