<?php

const APIURL = 'https://bibliotecagonzalez.com.ar/backend/images/';

Flight::route('GET /portada', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 1 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'image' => APIURL . $row['image'],
      'text' => $row['text'],
      'title' => $row['title'],
    ];
  }
  Flight::json($items);
});

Flight::route('GET /patrocinadores', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 100 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'image' => APIURL . $row['image'],
      'url' => $row['url'],
    ];
  }
  Flight::json($items);
});

Flight::route('GET /actividades', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 2 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'video' => $row['video'],
      'text' => $row['text'],
      'url' => $row['url'],
      'file' => $row['file'] ? APIURL . $row['file'] : '',
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /actividades-video', function () {
  $sql = 'SELECT * FROM items WHERE type = 100 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetch();
  $item = new stdClass();
  $item->id = (int) $results['id'];
  $item->title = $results['title'];
  $item->video = $results['video'];

  Flight::json($item);
});

Flight::route('GET /quienes-somos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 3 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /decalogo', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 13 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
    ];
  }
  Flight::json($items);
});

Flight::route('GET /archivos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 4 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'category' => intval($row['category']),
      'text' => $row['text'],
      'url' => $row['url'],
      'image' => $row['image'] ? APIURL . $row['image'] : '',
      'video' => $row['video'],
      'file' => $row['file'] ? APIURL . $row['file'] : '',
    ];
  }
  Flight::json($items);
});

Flight::route('GET /sobre-archivos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 5 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'url' => $row['url'],
      'file' => $row['file'] ? APIURL . $row['file'] : '',
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /montajes', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 6 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'text2' => $row['text2'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /mapas', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 30 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'url' => $row['url'],
      'image' => $row['image'] ? APIURL . $row['image'] : '',
      'video' => $row['video'],
      'file' => $row['file'] ? APIURL . $row['file'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /fantasmal', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 31 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'video' => $row['text'],
      'title' => $row['title']
    ];
  }
  Flight::json($items);
});

Flight::route('GET /recomendaciones', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 32 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'url' => $row['url'],
      'image' => $row['image'] ? APIURL . $row['image'] : '',
      'video' => $row['video'],
      'file' => $row['file'] ? APIURL . $row['file'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /textitos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 33 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'url' => $row['url'],
      'image' => $row['image'] ? APIURL . $row['image'] : '',
      'video' => $row['video'],
      'file' => $row['file'] ? APIURL . $row['file'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /testimonios', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 34 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'url' => $row['url'],
      'image' => $row['image'] ? APIURL . $row['image'] : '',
      'video' => $row['video'],
      'file' => $row['file'] ? APIURL . $row['file'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /gato', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 7 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'text2' => $row['text2'],
      'url' => $row['url'],
      'file' => $row['file'] ? APIURL . $row['file'] : '',
      'video' => $row['video'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /sobreHG', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 16 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'url' => $row['url'],
      'video' => $row['video'],
      'image' => $row['image'] ? APIURL . $row['image'] : '',
      'file' => $row['file'] ? APIURL . $row['file'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /que-dice-hg', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 60 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'text2' => $row['text2'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /biografia-10-pasos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 14 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'subtitle' => $row['subtitle'],
      'text' => $row['text'],
      'url' => $row['url'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /amigos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 15 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'url' => $row['url'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /dibujos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 8 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /fotos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 9 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /descargas', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 10 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'file' => $row['file'] ? APIURL . $row['file'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /imagenes/@id', function ($id) {
  $items = [];
  $sql = 'SELECT * FROM images WHERE id = ? ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->bindParam(1, $id);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /imagenes', function () {
  $items = [];
  $sql = 'SELECT * FROM images';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'item' => intval($row['item']),
      'title' => $row['title'],
      'text' => $row['text'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /galeria/@id', function ($id) {
  $items = [];
  $sql = 'SELECT * FROM images WHERE item = ? ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->bindParam(1, $id);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});

Flight::route('GET /donaciones', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 40 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'url' => $row['url'],
    ];
  }
  Flight::json($items);
});

Flight::route('GET /textos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 50 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
    ];
  }
  Flight::json($items);
});

Flight::route('GET /mosaicos', function () {
  $items = [];
  $sql = 'SELECT * FROM items WHERE type = 61 ORDER BY top DESC';
  $statement = Flight::db()->prepare($sql);
  $statement->execute();
  $results = $statement->fetchAll();
  foreach ($results as $row) {
    $items[] = [
      'id' => intval($row['id']),
      'title' => $row['title'],
      'text' => $row['text'],
      'text2' => $row['text2'],
      'image' => $row['image'] ? APIURL . $row['image'] : ''
    ];
  }
  Flight::json($items);
});
