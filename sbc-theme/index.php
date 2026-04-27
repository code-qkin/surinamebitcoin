<?php
/**
 * SBC Theme - Fixed Bridge
 */

// 1. Get WordPress Data safely
$title = get_the_title();
$content = get_the_content();

// 2. Handle ACF fields safely (check if plugin is active)
$acf_data = [];
if ( function_exists('get_fields') ) {
    $acf_data = get_fields();
}

// 3. Prepare the data object for Next.js
$wp_data = [
    'title' => $title,
    'content' => $content,
    'acf' => $acf_data
];

// 4. Capture the Next.js HTML and inject our data
$html = file_get_contents( get_template_directory() . '/index.html' );

// We inject the data script right before the </head> tag
$script = '<script>window.SBC_WP_DATA = ' . json_encode($wp_data) . ';</script>';
$html = str_replace('</head>', $script . '</head>', $html);

// 5. Output the final HTML
echo $html;
?>
