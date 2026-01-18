export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        How It <span className="text-blue-400">Works</span>
      </h2>
      <p className="text-slate-400 max-w-2xl">
        Get started with NextLevel Shop in just a few simple steps.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mb-4">
            1
          </div>
          <h3 className="font-semibold mb-2 text-white">Sign Up & Login</h3>
          <p className="text-sm text-slate-400">
            Create your account or login securely using our authentication system.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mb-4">
            2
          </div>
          <h3 className="font-semibold mb-2 text-white">Add Your Products</h3>
          <p className="text-sm text-slate-400">
            Upload product details, images, and prices through the dashboard.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mb-4">
            3
          </div>
          <h3 className="font-semibold mb-2 text-white">Manage & Organize</h3>
          <p className="text-sm text-slate-400">
            Keep track of your inventory and update products anytime, anywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
