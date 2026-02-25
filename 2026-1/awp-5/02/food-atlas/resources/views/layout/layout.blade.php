<!DOCTYPE html>
<html lang="en" data-theme="caramellatte">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#7B4B2A" />
  <title>@yield('title')</title>
  <meta name="description" content="Explore, create, and organize recipes from around the world. Food Atlas is your passport to global flavors." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />

  <style>
    body { font-family: 'Inter', sans-serif; }
    .font-serif { font-family: 'Lora', serif; }
  </style>
</head>
<body class="bg-base-100 text-base-content">

  <!-- NAVBAR -->
  @include('layout.nav')

  <!-- MAIN -->
  @yield('content')

  <!-- FOOTER -->
  @include('layout.footer')

</body>
</html>