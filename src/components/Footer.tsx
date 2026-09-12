
const Footer = ()=> {
  return (
    <footer className="w-full bg-white py-16 pb-8 border-t border-gray-100 font-sans">
      <div className="max-w-[1100px] mx-auto  px-6 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              DS
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Dev<span className="text-pink-500">Stack</span>
            </span>
          </div>
          
          <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#github" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="#twitter" className="hover:text-slate-900 transition-colors">Twitter</a>
            <a href="#linkedin" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
            <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
            <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
            <li><a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer