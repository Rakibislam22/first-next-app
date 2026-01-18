export default function StatisticsSection() {
  return (
    <section id="statistics" className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        Trusted by <span className="text-blue-400">Thousands</span>
      </h2>
      <p className="text-slate-400 max-w-2xl">
        Join a growing community of sellers who rely on NextLevel Shop for their business.
      </p>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
          <p className="text-sm text-slate-400">Active Products</p>
        </div>
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">5K+</div>
          <p className="text-sm text-slate-400">Happy Sellers</p>
        </div>
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
          <p className="text-sm text-slate-400">Uptime</p>
        </div>
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-700 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
          <p className="text-sm text-slate-400">Support</p>
        </div>
      </div>
    </section>
  );
}
