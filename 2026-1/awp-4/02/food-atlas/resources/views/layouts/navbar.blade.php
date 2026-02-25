<div class="navbar bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-base-300 shadow-sm">
    <div class="navbar-start">
      <a href="index.html" class="btn btn-ghost text-xl">
        <img src="logo-horizontal.png" alt="Food Atlas logo" class="h-10" />
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-6">
        <li><a href="index.html" class="text-sm font-medium hover:text-primary transition-colors">Home</a></li>
        <li><a href="recipes.html" class="text-sm font-medium hover:text-primary transition-colors">Recipes</a></li>
        <li><a href="collections.html" class="text-sm font-medium hover:text-primary transition-colors">Collections</a></li>
      </ul>
    </div>
    <div class="navbar-end gap-2">
      <button class="btn btn-ghost btn-sm btn-circle hidden lg:flex hover:bg-base-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </button>
      <a href="login.html" class="btn btn-outline btn-sm hidden lg:flex hover:bg-base-200">Log in</a>
      <a href="signup.html" class="btn btn-primary btn-sm hidden lg:flex">Sign up</a>
      <div class="dropdown dropdown-end lg:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white rounded-box w-56 border border-base-300">
          <li><a href="index.html" class="hover:bg-base-200">Home</a></li>
          <li><a href="recipes.html" class="hover:bg-base-200">Recipes</a></li>
          <li><a href="collections.html" class="hover:bg-base-200">Collections</a></li>
          <li class="border-t border-base-300 mt-2 pt-2">
            <a href="login.html" class="btn btn-outline btn-sm w-full">Log in</a>
          </li>
          <li>
            <a href="signup.html" class="btn btn-primary btn-sm w-full mt-2">Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  </div>