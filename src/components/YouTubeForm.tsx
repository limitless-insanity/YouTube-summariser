
// import React, { useState } from 'react';
// import { Send } from 'lucide-react';

// export function YouTubeForm() {
//   const [url, setUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [summary, setSummary] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSummary(null);

//     try {
//       // Call n8n webhook with updated URL
//       const response = await fetch('https://smooth-pig-4.hooks.n8n.cloud/webhook-test/ytube', {
//         //https://evil-kangaroo-93.hooks.n8n.cloud/
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ text: url }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to process the URL');
//       }

//       const { response: fetchedSummary } = await response.json();
//       setSummary(fetchedSummary);
//       setUrl('');
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-2xl">
//       {error && (
//         <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
//           {error}
//         </div>
//       )}

//       <div className="flex gap-2">
//         <input
//           type="url"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Enter YouTube URL"
//           className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
//         >
//           <Send size={20} />
//           {loading ? 'Processing...' : 'Generate Summary'}
//         </button>
//       </div>

//       {summary && (
      
//         <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
//           <h2 className="text-lg font-semibold mb-2">Generated Summary:</h2>
//           <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
//         </div>
//       )}
//     </form>
//   );
// }


import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function YouTubeForm() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSummary(null);

    try {
      // Updated URL and body structure to match the new cURL request
      const response = await fetch('https://d07c-2409-40d4-116-8363-951-31be-a568-fad6.ngrok-free.app/webhook-test/ytube', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url }), // Sending the URL as "url" key
      });

      if (!response.ok) {
        throw new Error('Failed to process the URL');
      }

      const { response: fetchedSummary } = await response.json();
      setSummary(fetchedSummary);
      setUrl('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube URL"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
        >
          <Send size={20} />
          {loading ? 'Processing...' : 'Generate Summary'}
        </button>
      </div>

      {summary && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Generated Summary:</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{summary}</p>
        </div>
      )}
    </form>
  );
}
