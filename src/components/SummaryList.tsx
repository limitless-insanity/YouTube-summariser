// import React, { useEffect, useState } from 'react';
// import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
// import { supabase } from '../lib/supabase';
// import type { UserSummary } from '../types/supabase';

// export function SummaryList() {
//   const [summaries, setSummaries] = useState<UserSummary[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchSummaries = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('summaries')
//           .select('*')
//           .order('created_at', { ascending: false });

//         if (error) throw error;
//         setSummaries(data || []);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Failed to fetch summaries');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSummaries();

//     // Subscribe to real-time changes
//     const subscription = supabase
//       .channel('summaries_channel')
//       .on('postgres_changes', { event: '*', schema: '', table: 'summaries' }, 
//         payload => {
//           if (payload.new) {
//             setSummaries(current => {
//               const newSummary = payload.new as UserSummary;
//               const exists = current.some(s => s.id === newSummary.id);
//               if (exists) {
//                 return current.map(s => s.id === newSummary.id ? newSummary : s);
//               }
//               return [newSummary, ...current];
//             });
//           }
//         }
//       )
//       .subscribe();

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, []);

//   if (loading) return <div className="text-center">Loading summaries...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="space-y-4">
//       {summaries.length === 0 ? (
//         <div className="text-center text-gray-500">No summaries yet</div>
//       ) : (
//         summaries.map((summary) => (
//           <div key={summary.id} className="bg-white p-4 rounded-lg shadow">
//             <div className="flex items-center justify-between mb-2">
//               <a 
//                 href={summary.youtube_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:text-blue-700"
//               >
//                 {summary.youtube_url}
//               </a>
//               <StatusIcon status={summary.status} />
//             </div>
//             {summary.summary && (
//               <p className="text-gray-700">{summary.summary}</p>
//             )}
//             <div className="text-sm text-gray-500 mt-2">
//               {new Date(summary.created_at).toLocaleString()}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// function StatusIcon({ status }: { status: UserSummary['status'] }) {
//   switch (status) {
//     case 'pending':
//       return <Clock className="text-yellow-500" />;
//     case 'completed':
//       return <CheckCircle className="text-green-500" />;
//     case 'error':
//       return <AlertCircle className="text-red-500" />;
//     default:
//       return null;
//   }
// }



// SummaryList.tsx
// This component is no longer necessary as storing/retrieving summaries is removed.
// Remove this file or replace its contents with a placeholder if still required for structure.

export function SummaryList() {
  return (
    <div className="text-center text-gray-500">
      Summary storage functionality has been removed.
    </div>
  );
}
