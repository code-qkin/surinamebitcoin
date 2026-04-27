<?php
/**
 * SBC Theme Functions - DYNAMIC CSS FIX
 */

function sbc_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'sbc_theme_setup');

/**
 * Handle Next.js Routes
 */
function sbc_handle_routes() {
    $path = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    $routes = ['about', 'academy', 'roadmap', 'contact', 'faq', 'tokenomics', 'whitepaper', 'privacy', 'cookies', 'terms'];
    
    foreach ($routes as $route) {
        if ($path === $route || strpos($path, $route . '/') === 0) {
            $file = get_template_directory() . '/' . $route . '/index.html';
            if (file_exists($file)) {
                sbc_serve_static_file($file);
            }
        }
    }
}
add_action('init', 'sbc_handle_routes');

/**
 * Helper to serve the HTML and inject dynamic assets
 */
function sbc_serve_static_file($file) {
    $title = get_the_title();
    $acf_data = function_exists('get_fields') ? get_fields() : [];
    
    $wp_data = [
        'title' => $title,
        'acf' => $acf_data
    ];

    $html = file_get_contents($file);

    // DYNAMIC CSS DETECTION
    $css_dir = get_template_directory() . '/_next/static/chunks/';
    $css_files = glob($css_dir . '*.css');
    $css_link = '';
    if (!empty($css_files)) {
        $css_filename = basename($css_files[0]);
        $css_url = get_template_directory_uri() . '/_next/static/chunks/' . $css_filename;
        $css_link = '<link rel="stylesheet" href="' . $css_url . '">';
    }

    $script = '<script>window.SBC_WP_DATA = ' . json_encode($wp_data) . ';</script>';
    $injections = $script . $css_link;
    
    header('Content-Type: text/html; charset=utf-8');
    echo str_replace('</head>', $injections . '</head>', $html);
    exit;
}
