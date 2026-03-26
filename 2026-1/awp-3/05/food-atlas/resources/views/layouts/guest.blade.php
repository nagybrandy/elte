

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
    input {
        padding: 0.5rem;
    }
  </style>
</head>
<body class="bg-base-100 text-base-content">
  @if (session('success'))
    <div class="alert alert-success">
      {{ session('success') }}
    </div>
  @endif
  @if (session('error'))
    <div class="alert alert-error">
      {{ session('error') }}
    </div>
  @endif
  
  @include('layout.nav')
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div>
                <a href="/">
                    <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
                </a>
            </div>

            <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {{ $slot }}
            </div>
        </div>
  @include("layout.footer")

</body>
</html>
