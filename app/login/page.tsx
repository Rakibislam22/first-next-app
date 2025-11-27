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
    const [isRegister, setIsRegister] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true);

        // ✅ REGISTER FLOW
        if (isRegister) {
            const res = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: email.split("@")[0],
                    email,
                    password,
                }),
            });

            setLoading(false);

            if (!res.ok) {
                toast.error("User already exists.");
                return;
            }

            toast.success("Registered! Now login.");
            setIsRegister(false);
            return;
        }

        // ✅ LOGIN FLOW (NextAuth credentials)
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        setLoading(false);

        if (res?.error) {
            toast.error("Invalid email or password.");
        } else {
            toast.success("Logged in!");
            router.push("/");
        }
    }

    async function handleGoogleLogin() {
        await signIn("google", { callbackUrl: "/" });
    }

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 text-slate-200">
            <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow p-6 space-y-6">
                <h1 className="text-2xl font-semibold text-center mb-2 text-white">
                    {isRegister ? "Create Account" : "Login"}
                </h1>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full py-2 rounded-lg border border-slate-600 bg-slate-800 hover:bg-slate-700 text-sm font-medium"
                >
                    Continue with Google
                </button>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                    <div className="flex-1 h-px bg-slate-700" />
                    <span>or</span>
                    <div className="flex-1 h-px bg-slate-700" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-300">Email</label>
                        <input
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-300">Password</label>
                        <input
                            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200 outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••"
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 disabled:opacity-60"
                    >
                        {loading
                            ? isRegister
                                ? "Registering..."
                                : "Logging in..."
                            : isRegister
                                ? "Register"
                                : "Login"}
                    </button>
                </form>

                <button
                    className="text-xs text-blue-400 underline w-full text-center mt-2"
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {isRegister
                        ? "Already have an account? Login"
                        : "Don't have an account? Register"}
                </button>
            </div>
        </div>
    );
}
