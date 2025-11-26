"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCredentialsLogin(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      toast.error("Invalid email or password (password must be 123456).");
    } else {
      toast.success("Logged in!");
      router.push("/");
    }
  }

  async function handleGoogleLogin() {
    await signIn("google", { callbackUrl: "/" });
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border rounded-2xl shadow p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center mb-2">Login / Register</h1>
        <p className="text-xs text-center text-slate-500">
          Use Google login or demo credentials (any email, password: <b>123456</b>).
        </p>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 rounded-lg border hover:bg-slate-50 text-sm font-medium"
        >
          Continue with Google
        </button>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="flex-1 h-px bg-slate-200" />
          <span>or</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium">Email</label>
            <input
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="demo@example.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium">Password</label>
            <input
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123456"
            />
          </div>

          <button
            disabled={loading}
            className="w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
