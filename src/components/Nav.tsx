import logo from '../assets/logo-text.png'
const Navbar = () => {

  return (
   <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-[1100px] mx-auto h-[72px] px-5 flex items-center justify-between">
        <img src={logo} alt="" />

        <nav className="hidden md:flex items-center gap-[27px]">
          <a href="#" className="text-[13px] font-medium text-pink-500">
            Home
          </a>
          <a href="#" className="text-[13px] text-slate-500 hover:text-pink-500">
            Technologies
          </a>
          <a href="#" className="text-[13px] text-slate-500 hover:text-pink-500">
            Projects
          </a>
          <a href="#" className="text-[13px] text-slate-500 hover:text-pink-500">
            About
          </a>
          <a href="#" className="text-[13px] text-slate-500 hover:text-pink-500">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <button className="text-[13px] text-slate-600">
            Sign In
          </button>

          <button className="px-5 py-[9px] rounded-full bg-pink-600 text-white text-[13px] font-medium hover:bg-pink-700 transition">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  )
};

export default Navbar;