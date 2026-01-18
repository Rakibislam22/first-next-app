export default function BenefitsSection() {
  return (
    <section id="benefits" className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        Key <span className="text-blue-400">Benefits</span>
      </h2>
      <p className="text-slate-400 max-w-2xl">
        Discover what makes NextLevel Shop the perfect choice for your product management needs.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-600 transition">
          <h3 className="font-semibold text-lg mb-2 text-white">Easy Product Management</h3>
          <p className="text-sm text-slate-400">
            Add, edit, and organize your products with an intuitive interface that requires no technical knowledge.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-600 transition">
          <h3 className="font-semibold text-lg mb-2 text-white">Real-time Updates</h3>
          <p className="text-sm text-slate-400">
            Changes reflect instantly across your store, keeping your inventory always up-to-date.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-600 transition">
          <h3 className="font-semibold text-lg mb-2 text-white">Secure & Reliable</h3>
          <p className="text-sm text-slate-400">
            Your data is protected with industry-standard security measures and regular backups.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-600 transition">
          <h3 className="font-semibold text-lg mb-2 text-white">Scalable Solution</h3>
          <p className="text-sm text-slate-400">
            Whether you have 10 or 10,000 products, our platform grows with your business needs.
          </p>
        </div>
      </div>
    </section>
  );
}
