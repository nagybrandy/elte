<!DOCTYPE html>
<html lang="en" data-theme="caramellatte">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#7B4B2A" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>


        <!-- Scripts -->

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
                padding: 0.5rem 1rem;
            }
        </style>
    </head>
    <body class="font-sans text-base-content antialiased">
    @include('layout.nav')

        <div class="min-h-screen bg-base-100 text-base-content flex flex-col items-center pt-16 max-w-md mx-auto">
        @if(session('success'))
                <div class="alert alert-success rounded-none">
                    {{ session('success') }}
                </div>
            @endif
            @if(session('error'))
                <div class="alert alert-error rounded-none">
                    {{ session('error') }}
                </div>
            @endif  
            <div class="">
                <a href="/">
                    <x-application-logo class="w-20 h-20 fill-current text-primary" />
                </a>
            </div>

            <div class="w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {{ $slot }}
                </div>
            </div>
        </body>
    </html>
