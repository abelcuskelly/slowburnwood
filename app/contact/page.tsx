export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl mb-6">Contact</h1>
      <form className="space-y-4" action="/api/contact" method="post">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input name="name" required className="w-full border border-ash rounded px-3 py-2 bg-white" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" required className="w-full border border-ash rounded px-3 py-2 bg-white" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea name="message" rows={5} required className="w-full border border-ash rounded px-3 py-2 bg-white" />
        </div>
        <button className="px-6 py-3 rounded-lg bg-earth-dark text-white">Send</button>
      </form>
    </div>
  );
}


