<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="app.css">
  <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="app.js"></script>
</head>
<body>

  <header>
    <div class="container">
    <div class="logo">
      <img src="img/logo.png" alt="logo" />
    </div>
    <div class="input">
      <input class="search" type="text" placeholder="Cerca artista...">
      <button class="cerca">Cerca</button>

    </div>
      
    </div>
  </header>

  <div class="container">
    <div class="albums"></div>
    <div class=""></div>
  </div>

  <script id="template" type="text/x-handlebars-template">
    <div class="album">
      <img src="{{poster}}" alt="" />
      <h3>
        {{title}}
      </h3>
      <span class="author">
        {{author}}
      </span>
      <span class="year">
        {{year}}
      </span>
    </div>
  </script>

</body>

</html>