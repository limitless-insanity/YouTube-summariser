import React from 'react';
import { Youtube } from 'lucide-react';
import { AuthForm } from '../components/AuthForm';

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center text-white mb-12">
            <div className="flex items-center justify-center mb-6">
              <Youtube size={48} />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              YouTube Summary Generator
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Transform any YouTube video into a concise summary. Save time and get the key points instantly.
            </p>
          </div>

          <AuthForm />
        </div>
      </div>
    </div>
  );
}