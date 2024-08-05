// import React, { useState } from 'react';
// import { ZBClient } from 'zeebe-node';

// const StartProcessButton = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const startProcess = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const zbc = new ZBClient('192.168.0.11:26500');
      
//       const result = await zbc.createProcessInstance('user_search', {
//         // Your process variables here
//         // For example:
//         // amount: 1000,
//         // customerId: 'CUST-12345'
//       });

//       console.log('Process started:', result);
//       // Handle successful process start (e.g., show a success message)
//     } catch (err) {
//       console.error('Error starting process:', err);
//       setError('Failed to start the process. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button 
//         onClick={startProcess} 
//         disabled={isLoading}
//         style={{ padding: '10px 20px', fontSize: '16px' }}
//       >
//         {isLoading ? 'Starting...' : 'Start Process'}
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default StartProcessButton;
