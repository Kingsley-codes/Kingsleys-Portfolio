export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-20 px-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
      <p>© {currentYear} Agbam Kingsley Emeka. All rights reserved.</p>
      <div className="flex gap-8">
        <a className="hover:text-white transition-colors" href="#">
          Privacy Policy
        </a>
        <a className="hover:text-white transition-colors" href="#">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
