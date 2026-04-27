<?php
/**
 * SBC Theme Functions - ULTIMATE ROUTING
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
    // 1. Get the requested path
    $path = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    
    // 2. Define the static pages we built in Next.js
    $routes = ['about', 'academy', 'roadmap', 'contact', 'faq', 'tokenomics', 'whitepaper', 'privacy', 'cookies', 'terms'];
    
    // 3. If it's a sub-page, look for its specific index.html
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
 * Helper to serve the HTML and inject WP data
 */
function sbc_serve_static_file($file) {
    $title = get_the_title();
    $acf_data = function_exists('get_fields') ? get_fields() : [];
    
    $wp_data = [
        'title' => $title,
        'acf' => $acf_data
    ];

    $html = file_get_contents($file);
    $script = '<script>window.SBC_WP_DATA = ' . json_encode($wp_data) . ';</script>';
    
    header('Content-Type: text/html; charset=utf-8');
    echo str_replace('</head>', $script . '</head>', $html);
    exit;
}
