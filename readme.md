# iGaster Themes

## Install
``` git clone ```
``` composer install ```
``` cp .env.example .env ```
``` php artisan key:generate ```

## What is added
- config / themes.php (you can change the location of your Themes)
- Resources/ views / themes / t1, t2 and t3
- Resources/ views / links.blade.php (to switch the themes)

## Changed Files
- app/Providers/myServiceProvider (also added in config/app.php)
- app/Http/Kernel => added to protected middleware
- app/Http/routes => /routes/web.php

