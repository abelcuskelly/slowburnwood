export default function Newsletter() {
  return (
    <section className="py-16 bg-earth-light/10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h3 className="font-serif text-3xl mb-3">Join the Fire Circle</h3>
        <p className="text-smoke mb-6">Get tips, rituals, and early access to limited drops.</p>
        <form
          className="flex flex-col sm:flex-row gap-3 justify-center"
          action="/api/newsletter"
          method="post"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="px-4 py-3 rounded-lg border border-ash bg-white min-w-[260px]"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-flame-primary hover:bg-flame-accent text-white font-medium"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-smoke mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}


