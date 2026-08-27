<?php
// Capture the incoming URL path requested by the user
$request = $_SERVER['REQUEST_URI'] ?? '/';
$path = parse_url($request, PHP_URL_PATH);

// 1. Root route fallback
if ($path === '/' || $path === '/index.php' || $path === '/api/index.php') {
    require __DIR__ . '/../index.php';
    exit;
}

// 2. Dynamic file path resolution
$localFile = dirname(__DIR__) . $path;

// Append .php if the requested route is clean (e.g. /about -> /about.php)
if (!file_exists($localFile) && file_exists($localFile . '.php')) {
    $localFile .= '.php';
}

// 3. Execution or 404 block
if (file_exists($localFile) && substr($localFile, -4) === '.php') {
    require $localFile;
} else {
    http_response_code(404);
    echo "404 Not Found";
}