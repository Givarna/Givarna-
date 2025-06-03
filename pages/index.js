import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Pay It Forward</title>
      </Head>

      <main className="text-center p-6 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pay It Forward</h1>
        <p className="text-gray-600 mb-8">
          A community where giving is the currency. Subscribe to request help and offer help to others.
        </p>

        {!isSubscribed ? (
          <button
            onClick={() => setIsSubscribed(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            Subscribe & Join
          </button>
        ) : (
          <div className="text-green-600 font-medium">
            Thank you for subscribing! 🎉 You can now connect with others.
          </div>
        )}
      </main>
    </div>
  );
          }
