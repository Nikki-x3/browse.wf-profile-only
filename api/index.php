<?php
// Routes requests from Vercel's api folder back to your root scripts
$request = $_SERVER['REQ_INFO'] ?? $_SERVER['REQUEST_URI'];
$path = parse_url($request, PHP_URL_PATH);

if ($path === '/' || $path === '/index.php') {
    require __DIR__ . '/../index.php';
} else {
    $localFile = __DIR__ . '/..' . $path;
    if (file_exists($localFile) && substr($localFile, -4) === '.php') {
        require $localFile;
    } else {
        http_response_code(404);
        echo "404 Not Found";
    }
}
