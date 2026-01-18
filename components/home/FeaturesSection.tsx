export default function FeaturesSection() {
  return (
    <section id="features" className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">
        Why Next<span className="text-blue-400">Level</span> Shop?
      </h2>
      <p className="text-slate-400 max-w-2xl">
        A modern product management tool designed for simplicity, speed, and secure access.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
          <h3 className="font-semibold mb-2 text-white">Secure Authentication</h3>
          <p className="text-sm text-slate-400">
            Your data stays protected with encrypted login and access control powered by NextAuth.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
          <h3 className="font-semibold mb-2 text-white">Fast & Smooth Interface</h3>
          <p className="text-sm text-slate-400">
            Enjoy a responsive experience with optimized UI and instant navigation.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md transition">
          <h3 className="font-semibold mb-2 text-white">Mobile Friendly</h3>
          <p className="text-sm text-slate-400">
            Manage and browse products easily on any device—from phone to desktop.
          </p>
        </div>
      </div>
    </section>
  );
}
