// import React, { useState, useEffect } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Image, X } from 'lucide-react';

// interface Doubt {
//   _id: string;
//   title: string;
//   description: string;
//   imageUrl?: string;
//   messages: Message[];
// }

// interface Message {
//   _id: string;
//   content: string;
//   sender: string;
//   timestamp: Date;
// }

// const DoubtSupport = () => {
//   const [doubts, setDoubts] = useState<Doubt[]>([]);
//   const [selectedDoubt, setSelectedDoubt] = useState<Doubt | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     image: null as File | null,
//   });
//   const [newMessage, setNewMessage] = useState('');

//   // Fetch existing doubts on component mount
//   useEffect(() => {
//     fetchDoubts();
//   }, []);

//   const fetchDoubts = async () => {
//     try {
//       const response = await fetch('/api/doubts');
//       const data = await response.json();
//       setDoubts(data);
//     } catch (error) {
//       console.error('Error fetching doubts:', error);
//     }
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData({ ...formData, image: e.target.files[0] });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const formDataToSend = new FormData();
//     formDataToSend.append('title', formData.title);
//     formDataToSend.append('description', formData.description);
//     if (formData.image) {
//       formDataToSend.append('image', formData.image);
//     }

//     try {
//       const response = await fetch('/api/doubts', {
//         method: 'POST',
//         body: formDataToSend,
//       });
      
//       if (response.ok) {
//         setShowForm(false);
//         setFormData({ title: '', description: '', image: null });
//         fetchDoubts();
//       }
//     } catch (error) {
//       console.error('Error creating doubt:', error);
//     }
//   };

//   const handleSendMessage = async () => {
//     if (!selectedDoubt || !newMessage.trim()) return;

//     try {
//       const response = await fetch(`/api/doubts/${selectedDoubt._id}/messages`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           content: newMessage,
//           sender: 'student', // Or get from auth context
//         }),
//       });

//       if (response.ok) {
//         const updatedDoubt = await response.json();
//         setSelectedDoubt(updatedDoubt);
//         setNewMessage('');
//         fetchDoubts();
//       }
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Doubt Support</h1>
//         <Button onClick={() => setShowForm(true)}>Ask Doubt</Button>
//       </div>

//       {/* Doubt Creation Form Dialog */}
//       <Dialog open={showForm} onOpenChange={setShowForm}>
//         <DialogContent className="sm:max-w-[525px]">
//           <DialogHeader>
//             <DialogTitle>Post Your Doubt</DialogTitle>
//           </DialogHeader>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <Input
//               placeholder="Topic/Title"
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               required
//             />
//             <Textarea
//               placeholder="Describe your doubt..."
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               required
//               className="min-h-[100px]"
//             />
//             <div className="flex items-center gap-2">
//               <Button type="button" variant="outline" onClick={() => document.getElementById('image-upload')?.click()}>
//                 <Image className="w-4 h-4 mr-2" />
//                 Add Image
//               </Button>
//               {formData.image && (
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm">{formData.image.name}</span>
//                   <Button
//                     type="button"
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => setFormData({ ...formData, image: null })}
//                   >
//                     <X className="w-4 h-4" />
//                   </Button>
//                 </div>
//               )}
//               <input
//                 id="image-upload"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />
//             </div>
//             <Button type="submit" className="w-full">Post Doubt</Button>
//           </form>
//         </DialogContent>
//       </Dialog>

//       {/* Doubts List */}
//       <div className="grid gap-4">
//         {doubts.map((doubt) => (
//           <Card
//             key={doubt._id}
//             className="cursor-pointer hover:shadow-lg transition-shadow"
//             onClick={() => setSelectedDoubt(doubt)}
//           >
//             <CardContent className="p-4">
//               <h3 className="font-medium">{doubt.title}</h3>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Selected Doubt Detail Dialog */}
//       <Dialog open={!!selectedDoubt} onOpenChange={(open) => !open && setSelectedDoubt(null)}>
//         <DialogContent className="sm:max-w-[600px]">
//           <DialogHeader>
//             <DialogTitle>{selectedDoubt?.title}</DialogTitle>
//           </DialogHeader>
//           <div className="space-y-4">
//             <p>{selectedDoubt?.description}</p>
//             {selectedDoubt?.imageUrl && (
//               <img
//                 src={selectedDoubt.imageUrl}
//                 alt="Doubt attachment"
//                 className="max-w-full h-auto rounded-lg"
//               />
//             )}
            
//             {/* Chat Section */}
//             <div className="mt-6">
//               <h4 className="font-medium mb-2">Discussion</h4>
//               <div className="space-y-2 max-h-[300px] overflow-y-auto">
//                 {selectedDoubt?.messages.map((message) => (
//                   <div
//                     key={message._id}
//                     className={`p-2 rounded-lg ${
//                       message.sender === 'mentor'
//                         ? 'bg-blue-100 ml-auto'
//                         : 'bg-gray-100'
//                     } max-w-[80%]`}
//                   >
//                     <p className="text-sm">{message.content}</p>
//                     <span className="text-xs text-gray-500">
//                       {new Date(message.timestamp).toLocaleTimeString()}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex gap-2 mt-4">
//                 <Input
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   placeholder="Type your message..."
//                   onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                 />
//                 <Button onClick={handleSendMessage}>Send</Button>
//               </div>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default DoubtSupport;