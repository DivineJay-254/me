'use client';

import { useEffect, useState } from 'react';
import { app, analytics } from '@/lib/firebase';

export default function Home() {
  const [firebaseStatus, setFirebaseStatus] = useState<string>('Initializing...');

  useEffect(() => {
    if (app && analytics) {
      setFirebaseStatus('✓ Firebase initialized successfully!');
    } else {
      setFirebaseStatus('✗ Firebase initialization failed');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">Firebase Setup</h1>
        
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-2xl">{firebaseStatus.includes('✓') ? '✓' : '⚠'}</div>
          <p className="text-lg text-gray-700">{firebaseStatus}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 max-w-md">
          <p className="text-sm text-gray-600">
            <strong>Project ID:</strong> whatsappj-83cc1
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Note:</strong> Add your NEXT_PUBLIC_FIREBASE_API_KEY environment variable in project settings to enable Firebase features.
          </p>
        </div>

        <a
          href="https://firebase.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Firebase Documentation
        </a>
      </main>
    </div>
  );
}
