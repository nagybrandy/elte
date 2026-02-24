<html data-theme="coffee">

<head>
    <title>First - @yield('title')</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <div class="container">
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <a href="/">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>

                        </div>
                    </a>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul class="p-2">
                                <li><a>Login</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a href="/" class="text-xl btn btn-ghost">TracksApp</a>
            </div>
            <div class="hidden navbar-center lg:flex">
                <ul class="px-1 menu menu-horizontal">
                    <li><a href="{{ route('tracks.index') }}">Tracks</a></li>
                    <li><a href="{{ route('playlists.index') }}">Playlists</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <ul class="px-1 menu menu-horizontal">
                    @auth
                    <li>
                        <form method="POST" action={{route('logout')}}>
                            @csrf
                            <button type="submit" class="cursor-pointer">Logout</button>
                        </form>
                    </li>
                    <li><a>{{ Auth::user()->name }}</a></li>
                    @else
                    <li><a href="{{ route('login') }}">Login</a></li>
                    <li><a href="{{ route('register') }}">Register</a></li>
                    @endauth
                </ul>
                <a href="{{ route('tracks.create') }}" class="btn btn-secondary">Add track</a>
            </div>
        </div>
        @yield('content')

        @if (session('success'))
        <div class="toast">
            <div class="alert alert-success">
                <span>{{ session('success') }}</span>
            </div>
        </div>
        @endif
        @if (session('error'))
        <div class="toast">
            <div class="alert alert-error">
                <span>{{ session('error') }}</span>
            </div>
        </div>
        @endif
        <script>
            setTimeout(() => {
                document.querySelector('.toast').remove();
            }, 3000);
        </script>
        
        <footer class="p-10 footer bg-neutral text-neutral-content">
            <nav>
                <h6 class="footer-title">Services</h6>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 class="footer-title">Company</h6>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 class="footer-title">Legal</h6>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    </div>
</body>

</html>