export default function TestimonialsSection() {
  const us = ["Rakib", "Ismail", "Alif"];
  
  return (
    <section id="testimonials" className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">What Users Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          "Managing inventory has never been easier.",
          "Clean interface and easy product updates.",
          "Perfect tool for small sellers like me.",
        ].map((text, i) => (
          <div key={i} className="p-5 rounded-xl bg-slate-900 border border-slate-700">
            <p className="text-sm text-slate-400 mb-3">"{text}"</p>
            <p className="text-sm font-semibold text-white">{us[i]}</p>
            <p className="text-xs text-slate-500">Store Owner</p>
          </div>
        ))}
      </div>
    </section>
  );
}
