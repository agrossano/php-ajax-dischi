let mix = require('laravel-mix');
mix
  .js('src/app.js', 'dist/')
  .sass('src/app.scss', 'dist/')
  .copy('src/index.php', 'dist/')
  .copy('src/api/db.php', 'dist/api/')
  .copy('src/api/api.php', 'dist/api/')
  .copy('src/api/artistfilter.php', 'dist/api/');