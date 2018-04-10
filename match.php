<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

    $doc = new DomDocument;
    $doc->validateOnParse = true;
    $url = $_GET['url'];
    $urlSystem = 'http://10.0.0.5:8080';
    $urlScript = 'http://10.0.0.5:8080/html2canvas.js';
    $doc->loadHtml(file_get_contents($url));

    $link = $doc->getElementsByTagName('link');

    foreach ($link as $lnk) {

    $uri = $lnk->getAttribute('href');

    if (strpos($uri, 'http') !== false) {
    }else{
          $uri=$url.$uri;
          $lnk->setAttribute('href',$uri);
    }

    }


    $script = $doc->getElementsByTagName('script');

    foreach ($script as $scrp) {

    $uri = $scrp->getAttribute('src');

    if (strpos($uri, 'http') !== false) {
    }else{
          $uri=$url.$uri;
          $scrp->setAttribute('src',$uri);
    }

    }



    $link = $doc->getElementsByTagName('img');

    foreach ($link as $key => $lnk) {

    $uri = $lnk->getAttribute('src');

    if (strpos($uri, 'http') !== false) {
    }else{
          $uri=$url.$uri;
          $path = explode('.',$uri);
          $path = end($path);
          $content = file_get_contents($uri);
          $imgDownload = '/var/www/shopify/image/'.$key.'.'.$path;
          file_put_contents($imgDownload, $content);
          $lnk->setAttribute('src',$urlSystem.'/image/'.$key.'.'.$path);
    }

    }


    $script  =  $doc->createElement('script');

    $script->setAttribute('src',$urlScript);

    $head = $doc->getElementsByTagName('head');

    $body = $doc->getElementsByTagName('body');

    if(isset($head[0])){
    $head[0]->appendChild($script);
    }
    $canvas = $doc->createElement('script','setTimeout(html2canvas(document.querySelector("body")).then(canvas => {document.body.appendChild(canvas)}), 9000);');

    $body[0]->appendChild($canvas);

    echo $doc->saveHTML();

?>
