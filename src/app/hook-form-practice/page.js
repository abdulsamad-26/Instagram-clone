"use client"

import React from "react"
import { useForm } from "react-hook-form"

function Page() {
    const {
        register,
        handleSubmit
    } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-4">

            {/* Background Glow */}
            <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Glass Card */}
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.08] p-8 shadow-2xl backdrop-blur-2xl">

                {/* Heading */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-white">
                        Welcome my website
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Enter your details to get started
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >

                    {/* First Name */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                            First Name
                        </label>

                        <input
                            {...register("firstName")}
                            type="text"
                            placeholder="Enter first name"
                            className="w-full rounded-xl border border-white/10
                            bg-white/[0.06] px-4 py-3 text-white
                            placeholder-slate-500 outline-none transition
                            focus:border-cyan-400/50 focus:bg-white/[0.10]
                            focus:ring-2 focus:ring-cyan-400/10"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                            Last Name
                        </label>

                        <input
                            {...register("lastName")}
                            type="text"
                            placeholder="Enter last name"
                            className="w-full rounded-xl border border-white/10
                            bg-white/[0.06] px-4 py-3 text-white
                            placeholder-slate-500 outline-none transition
                            focus:border-cyan-400/50 focus:bg-white/[0.10]
                            focus:ring-2 focus:ring-cyan-400/10"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                            Email Address
                        </label>

                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-white/10
                            bg-white/[0.06] px-4 py-3 text-white
                            placeholder-slate-500 outline-none transition
                            focus:border-cyan-400/50 focus:bg-white/[0.10]
                            focus:ring-2 focus:ring-cyan-400/10"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-cyan-500 px-4 py-3
                        font-semibold text-slate-950 shadow-lg
                        shadow-cyan-500/20 transition
                        hover:bg-cyan-400 hover:shadow-cyan-500/30
                        active:scale-[0.98]"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Page