"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-b">
            <div className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        <h1 className="text-2xl font-medium">
                            <span className="text-teal-500">News Aggregator</span>
                        </h1>
                    </Link>
                    <div className="flex justify-between items-center gap-3">
                        <Link className="border rounded p-2" href="/signin">Sign In</Link>
                        <Link className="border rounded p-2" href="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
