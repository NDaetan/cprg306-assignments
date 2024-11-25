"use client";
import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <div className="container mx-auto p-4">
            {!user ? (
                <div className="flex justify-center items-center h-screen">
                    <button
                        onClick={gitHubSignIn}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Login with GitHub
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <p className="text-2xl font-bold mb-4">
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <button
                        onClick={firebaseSignOut}
                        className="px-4 py-2 bg-red-500 text-white rounded mb-4"
                    >
                        Logout
                    </button>
                    <Link href="/week-9/shopping-list" className="px-4 py-2 bg-green-500 text-white rounded">
                        Go to Shopping List
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Page;