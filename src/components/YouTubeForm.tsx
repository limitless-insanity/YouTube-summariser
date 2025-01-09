// import React, { useState } from 'react';
// import { Send } from 'lucide-react';
// import { supabase } from '../lib/supabase';

// export function YouTubeForm() {
//   const [url, setUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       // TODO: Integrate with backend service
//       // For now, just store the URL in Supabase
//       const { error } = await supabase
//         .from('summaries')
//         .insert([
//           {
//             youtube_url: url,
//             status: 'pending'
//           }
//         ]);

//       if (error) throw error;
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
//     </form>
//   );
// }

// import React, { useState } from 'react';
// import { Send } from 'lucide-react';
// import { supabase } from '../lib/supabase';

// export function YouTubeForm() {
//   const [url, setUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null); // To display success messages

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setError(null);
//   //   setSuccessMessage(null);

//   //   try {
//   //     // Validate the YouTube URL (optional but recommended)
//   //     const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
//   //     if (!youtubeRegex.test(url)) {
//   //       throw new Error('Invalid YouTube URL');
//   //     }

//   //     // Send the URL to the Nhost serverless function
//   //     const response = await fetch(
//   //       'https://pihzieinbgskqtfshclr.nhost.run/v1/functions/processText', // Replace with your actual Nhost function URL
//   //       {
//   //         method: 'POST',
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //         body: JSON.stringify({ text: url }),
//   //       }
//   //     );

//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       throw new Error(errorData.error || 'Failed to process the request');
//   //     }

//   //     const result = await response.json();
//   //     console.log('Response from n8n:', result);

//   //     // Store the URL in Supabase (optional, if you still want to use Supabase for tracking)
//   //     const { error: supabaseError } = await supabase
//   //       .from('summaries')
//   //       .insert([
//   //         {
//   //           youtube_url: url,
//   //           status: 'processed', // Assuming processing is successful
//   //         },
//   //       ]);

//   //     if (supabaseError) throw supabaseError;

//   //     // Success
//   //     setSuccessMessage('YouTube URL processed successfully!');
//   //     setUrl('');
//   //   } catch (err) {
//   //     setError(err instanceof Error ? err.message : 'An error occurred');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
  
//     try {
//       // Call n8n webhook
//       const response = await fetch('http://localhost:5678/webhook-test/ytube', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ text: url }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to process the URL');
//       }
  
//       const { response: summary } = await response.json();
  
//       // Store result in Supabase
//       const { error } = await supabase
//         .from('summaries')
//         .insert([{ youtube_url: url, summary, status: 'completed' }]);
  
//       if (error) throw error;
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
//       {successMessage && (
//         <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
//           {successMessage}
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
//     </form>
//   );
// }

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
// //http://localhost:5678/webhook/ytube
//     try {
//       // Call n8n webhook
//       const response = await fetch('http://localhost:5678/webhook/ytube', {
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
      // Call n8n webhook with updated URL
      const response = await fetch('https://evil-kangaroo-93.hooks.n8n.cloud/webhook-test/ytube', {
        //https://evil-kangaroo-93.hooks.n8n.cloud/
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: url }),
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
