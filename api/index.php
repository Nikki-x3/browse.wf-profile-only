<?php
// Capture incoming Vercel environment path strings
$request = $_SERVER['REQUEST_URI'] ?? '/';
$path = parse_url($request, PHP_URL_PATH);

// Clean up standard index calls
if ($path === '/' || $path === '/index.php' || $path === '/api/index.php') {
    require __DIR__ . '/../index.php';
    exit;
}

// Check for component executions or auxiliary paths
$localFile = dirname(__DIR__) . $path;
if (file_exists($localFile) && substr($localFile, -4) === '.php') {
    require $localFile;
} else {
    http_response_code(404);
    echo "404 Not Found";
}
