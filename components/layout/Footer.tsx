export default function Footer() {
  return (
    <footer className="border-t border-ash/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="font-serif text-2xl mb-2">Slowburn</div>
          <p className="text-sm text-smoke">Hotter. Cleaner. Wilder.</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/products">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Newsletter</h4>
          <p className="text-sm text-smoke mb-2">Join our fire circle</p>
          <form action="/api/newsletter" method="post" className="flex gap-2">
            <input name="email" type="email" required placeholder="you@example.com" className="px-3 py-2 rounded border border-ash bg-white" />
            <button className="px-4 py-2 rounded bg-earth-dark text-white">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-smoke py-4">© {new Date().getFullYear()} Slowburn Wood Co.</div>
    </footer>
  );
}


