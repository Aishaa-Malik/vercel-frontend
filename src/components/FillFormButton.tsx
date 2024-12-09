// import React from 'react';
// import axios from 'axios';

// interface FillFormButtonProps {
//   email: string;  // Accept email as a prop
// }

// const FillFormButton: React.FC<FillFormButtonProps> = ({ email }) => {
  
//   const handleFillForm = async () => {
//     try {
//       // Trigger the backend to fill the form with the email passed as a prop
//       const response = await axios.post('http://localhost:5002/applyJob', { email });
//       if (response.data) {
//         alert('Job application form is being filled!');
//       }
//     } catch (error) {
//       console.error('Error filling form:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleFillForm} className="bg-green-500 text-white py-2 px-4 rounded">
//         Fill Job Application
//       </button>
//     </div>
//   );
// };

// export default FillFormButton;
