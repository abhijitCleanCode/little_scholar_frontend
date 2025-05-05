import React from "react";
import StudentDetails from "./Frontend/Components/Classes/AllStudents";
import RegisterClass from "./Frontend/Pages/Classes/RegisterClass";
import MyAttendance from "./Frontend/Pages/Student/MyAttendance";
import SchoolLandingPage from "./Frontend/Pages/LandingPage2";
import AttendanceSystem from "./Frontend/Components/AttendanceSystem/MarkAttendanceByClass";
import CertificateGenerator from "./Frontend/Components/Cards/Certificate";
import IDCardGenerator from "./Frontend/Components/Cards/IDCard";
import CustomCalendar from "./Frontend/Components/Elements/CustomCalander";
import AddTransactions from "./Frontend/Pages/Transaction/AddTransaction";
const Test = () => {
  return (
    <div>
      <AddTransactions />
    </div>
  );
};

export default Test;

// import { useState, useEffect } from 'react';
// import { Search, ChevronDown, Star, Heart } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Define TypeScript interfaces
// interface NFTCollection {
//   id: string;
//   name: string;
//   icon: string;
//   category: string;
//   verified: boolean;
//   featured: boolean;
//   items: number;
//   floor: number;
//   image: string; // Added image property
// }

// export default function NFTMarketplace() {
//   // Mock NFT collection data with appropriate images
//   const collections: NFTCollection[] = [
//     {
//       id: "tff-001",
//       name: "Transdimensional Fox Federation",
//       icon: "🦊",
//       category: "Art",
//       verified: true,
//       featured: true,
//       items: 10000,
//       floor: 0.25,
//       image: "/api/placeholder/600/400" // Digital fox art
//     },
//     {
//       id: "tl-002",
//       name: "Tomorrowland: A Letter from the Universe",
//       icon: "🌌",
//       category: "Photography",
//       verified: true,
//       featured: false,
//       items: 5000,
//       floor: 0.5,
//       image: "/api/placeholder/600/400" // Space photography
//     },
//     {
//       id: "tw-003",
//       name: "TOPIA Worlds",
//       icon: "📦",
//       category: "Virtual Worlds",
//       verified: true,
//       featured: true,
//       items: 2500,
//       floor: 1.2,
//       image: "/api/placeholder/600/400" // Virtual world
//     },
//     {
//       id: "tn-004",
//       name: "TrekkiNFT",
//       icon: "🚀",
//       category: "Collectibles",
//       verified: false,
//       featured: false,
//       items: 8000,
//       floor: 0.1,
//       image: "/api/placeholder/600/400" // Space collectibles
//     },
//     {
//       id: "tc-005",
//       name: "Timeless Characters",
//       icon: "👾",
//       category: "Gaming",
//       verified: true,
//       featured: false,
//       items: 12000,
//       floor: 0.3,
//       image: "/api/placeholder/600/400" // Gaming characters
//     },
//     {
//       id: "td-006",
//       name: "Tribe Diamonds",
//       icon: "💎",
//       category: "Jewelry",
//       verified: true,
//       featured: true,
//       items: 1000,
//       floor: 2.5,
//       image: "/api/placeholder/600/400" // Diamond jewelry
//     },
//     {
//       id: "cd-007",
//       name: "Cyber Dreamers",
//       icon: "🤖",
//       category: "Sci-Fi",
//       verified: false,
//       featured: false,
//       items: 7500,
//       floor: 0.15,
//       image: "/api/placeholder/600/400" // Cyberpunk art
//     },
//     {
//       id: "mm-008",
//       name: "Mystic Menagerie",
//       icon: "🐉",
//       category: "Fantasy",
//       verified: true,
//       featured: false,
//       items: 4200,
//       floor: 0.45,
//       image: "/api/placeholder/600/400" // Fantasy creatures
//     }
//   ];

//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeTab, setActiveTab] = useState('Collections');
//   const [filteredCollections, setFilteredCollections] = useState(collections);
//   const [featuredCollection, setFeaturedCollection] = useState<NFTCollection | null>(null);
//   const [selectedCollection, setSelectedCollection] = useState<NFTCollection | null>(null);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     // Find a random featured collection to highlight
//     const featured = collections.filter(c => c.featured);
//     setFeaturedCollection(featured[Math.floor(Math.random() * featured.length)]);

//     // Filter collections based on search term
//     const filtered = collections.filter(collection =>
//       collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       collection.category.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredCollections(filtered);
//   }, [searchTerm]);

//   // Handle collection selection from search dropdown
//   const handleCollectionSelect = (collection: NFTCollection) => {
//     setSelectedCollection(collection);
//     setSearchTerm(collection.name);
//     setShowDropdown(false);
//   };

//   // Clear selected collection
//   const clearSelectedCollection = () => {
//     setSelectedCollection(null);
//     setSearchTerm('');
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
//       {/* Header with search */}
//       <header className="px-4 py-6 md:px-8 lg:px-16">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="relative"
//           >
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search for collections, NFTs or users"
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   setShowDropdown(true);
//                   if (selectedCollection && e.target.value !== selectedCollection.name) {
//                     setSelectedCollection(null);
//                   }
//                 }}
//                 className="w-full bg-gray-800/50 backdrop-blur-sm text-white border border-gray-700 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//               />
//               <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />

//               {selectedCollection && (
//                 <button
//                   onClick={clearSelectedCollection}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
//                 >
//                   ✕
//                 </button>
//               )}
//             </div>

//             {searchTerm && showDropdown && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="absolute w-full mt-2 bg-gray-800/80 backdrop-blur-md rounded-xl border border-gray-700 overflow-hidden z-50"
//               >
//                 <div className="flex border-b border-gray-700">
//                   {['Collections', 'NFTs', 'Users'].map((tab) => (
//                     <button
//                       key={tab}
//                       className={`flex-1 py-3 text-sm font-medium ${activeTab === tab ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
//                       onClick={() => setActiveTab(tab)}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>

//                 <AnimatePresence>
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="max-h-96 overflow-y-auto"
//                   >
//                     {filteredCollections.map((collection) => (
//                       <motion.div
//                         key={collection.id}
//                         initial={{ opacity: 0, y: 5 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
//                         className="flex items-center p-3 cursor-pointer"
//                         onClick={() => handleCollectionSelect(collection)}
//                       >
//                         <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mr-3 text-xl">
//                           {collection.icon}
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex items-center">
//                             <span className="font-medium">{collection.name}</span>
//                             {collection.verified && (
//                               <span className="ml-1 inline-block bg-blue-500 rounded-full p-0.5">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
//                                   <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
//                                 </svg>
//                               </span>
//                             )}
//                           </div>
//                           <div className="text-xs text-gray-400">{collection.category}</div>
//                         </div>
//                       </motion.div>
//                     ))}

//                     {filteredCollections.length === 0 && (
//                       <div className="p-4 text-center text-gray-400 italic">
//                         No matches found for "{searchTerm}"
//                       </div>
//                     )}
//                   </motion.div>
//                 </AnimatePresence>
//               </motion.div>
//             )}
//           </motion.div>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="flex-1 px-4 md:px-8 lg:px-16 py-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Selected collection view */}
//           {selectedCollection && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.7 }}
//               className="mb-12"
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold">Selected Collection</h2>
//                 <button
//                   onClick={clearSelectedCollection}
//                   className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm"
//                 >
//                   Back to All Collections
//                 </button>
//               </div>

//               <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800/50 to-indigo-900/50 backdrop-blur-md border border-gray-700">
//                 <div className="absolute inset-0 bg-[url('/api/placeholder/1200/400')] opacity-20 mix-blend-overlay"></div>
//                 <div className="p-6 md:p-8 relative z-10">
//                   <div className="flex flex-wrap items-center gap-6">
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl shadow-xl"
//                     >
//                       {selectedCollection.icon}
//                     </motion.div>
//                     <div>
//                       <div className="flex items-center">
//                         <h3 className="text-3xl font-bold">{selectedCollection.name}</h3>
//                         {selectedCollection.verified && (
//                           <span className="ml-2 inline-block bg-blue-500 rounded-full p-1">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//                               <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
//                             </svg>
//                           </span>
//                         )}
//                       </div>
//                       <p className="text-gray-300 mt-1">{selectedCollection.category}</p>
//                       <div className="flex mt-3 gap-6">
//                         <div>
//                           <p className="text-sm text-gray-400">Items</p>
//                           <p className="font-medium">{selectedCollection.items.toLocaleString()}</p>
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-400">Floor Price</p>
//                           <p className="font-medium">{selectedCollection.floor} ETH</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="ml-auto">
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-purple-500/20"
//                       >
//                         Explore Collection
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Collection's items grid */}
//               <div className="mt-8">
//                 <h3 className="text-xl font-bold mb-4">Collection Items</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                   {[...Array(4)].map((_, index) => (
//                     <motion.div
//                       key={`${selectedCollection.id}-item-${index}`}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.05, duration: 0.4 }}
//                       whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                       className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
//                     >
//                       <div className="relative h-52 overflow-hidden">
//                         <img
//                           src={selectedCollection.image}
//                           alt={`${selectedCollection.name} item ${index + 1}`}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
//                           <div className="text-sm font-medium">#{index + 1001}</div>
//                         </div>
//                       </div>
//                       <div className="p-4">
//                         <h4 className="font-medium mb-2">{selectedCollection.name} #{index + 1001}</h4>
//                         <div className="flex justify-between text-sm">
//                           <div>
//                             <p className="text-gray-400">Price</p>
//                             <p className="font-medium">{(selectedCollection.floor + (Math.random() * 0.5)).toFixed(2)} ETH</p>
//                           </div>
//                           <div>
//                             <p className="text-gray-400">Last Sale</p>
//                             <p className="font-medium">{(selectedCollection.floor - (Math.random() * 0.2)).toFixed(2)} ETH</p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* Featured collection spotlight */}
//           {!selectedCollection && featuredCollection && !searchTerm && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.7 }}
//               className="mb-12"
//             >
//               <h2 className="text-2xl font-bold mb-4">Featured Collection</h2>
//               <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800/50 to-indigo-900/50 backdrop-blur-md border border-gray-700">
//                 <div className="absolute inset-0 bg-[url('/api/placeholder/1200/400')] opacity-20 mix-blend-overlay"></div>
//                 <div className="p-6 md:p-8 relative z-10">
//                   <div className="flex flex-wrap items-center gap-6">
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl shadow-xl"
//                     >
//                       {featuredCollection.icon}
//                     </motion.div>
//                     <div>
//                       <div className="flex items-center">
//                         <h3 className="text-3xl font-bold">{featuredCollection.name}</h3>
//                         {featuredCollection.verified && (
//                           <span className="ml-2 inline-block bg-blue-500 rounded-full p-1">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//                               <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
//                             </svg>
//                           </span>
//                         )}
//                       </div>
//                       <p className="text-gray-300 mt-1">{featuredCollection.category}</p>
//                       <div className="flex mt-3 gap-6">
//                         <div>
//                           <p className="text-sm text-gray-400">Items</p>
//                           <p className="font-medium">{featuredCollection.items.toLocaleString()}</p>
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-400">Floor Price</p>
//                           <p className="font-medium">{featuredCollection.floor} ETH</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="ml-auto">
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-purple-500/20"
//                         onClick={() => handleCollectionSelect(featuredCollection)}
//                       >
//                         Explore Collection
//                       </motion.button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}

//           {/* Collections grid */}
//           {!selectedCollection && (
//             <div>
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold">{searchTerm ? 'Search Results' : 'Trending Collections'}</h2>
//                 {!searchTerm && (
//                   <button className="flex items-center text-gray-300 hover:text-white">
//                     <span className="mr-1">Sort by: Popular</span>
//                     <ChevronDown size={16} />
//                   </button>
//                 )}
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                 <AnimatePresence>
//                   {(searchTerm ? filteredCollections : collections).map((collection, index) => (
//                     <motion.div
//                       key={collection.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, scale: 0.95 }}
//                       transition={{ delay: index * 0.05, duration: 0.4 }}
//                       whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                       className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden group cursor-pointer"
//                       onClick={() => handleCollectionSelect(collection)}
//                     >
//                       <div className="relative h-40 overflow-hidden">
//                         <img
//                           src={collection.image}
//                           alt={collection.name}
//                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                         />
//                         <div className="absolute top-2 right-2 flex space-x-2">
//                           <button
//                             className="bg-black/40 backdrop-blur-sm p-2 rounded-full hover:bg-black/60"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               // Add favorite functionality here
//                             }}
//                           >
//                             <Heart size={16} className="text-gray-300 hover:text-pink-500" />
//                           </button>
//                         </div>
//                       </div>
//                       <div className="p-4">
//                         <div className="flex items-center mb-3">
//                           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg mr-3">
//                             {collection.icon}
//                           </div>
//                           <div>
//                             <div className="flex items-center">
//                               <h3 className="font-medium truncate">{collection.name}</h3>
//                               {collection.verified && (
//                                 <span className="ml-1 inline-block bg-blue-500 rounded-full p-0.5">
//                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
//                                     <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
//                                   </svg>
//                                 </span>
//                               )}
//                             </div>
//                             <p className="text-xs text-gray-400">{collection.category}</p>
//                           </div>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                           <div>
//                             <p className="text-gray-400">Floor</p>
//                             <p className="font-medium">{collection.floor} ETH</p>
//                           </div>
//                           <div>
//                             <p className="text-gray-400">Items</p>
//                             <p className="font-medium">{collection.items.toLocaleString()}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>

//               {searchTerm && filteredCollections.length === 0 && (
//                 <div className="text-center py-12">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="inline-block p-4 rounded-full bg-gray-800/60 mb-4"
//                   >
//                     <Search size={32} className="text-gray-400" />
//                   </motion.div>
//                   <h3 className="text-xl font-medium mb-2">No results found</h3>
//                   <p className="text-gray-400">We couldn't find any collections matching "{searchTerm}"</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="px-4 md:px-8 lg:px-16 py-6 border-t border-gray-800">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h3 className="font-bold text-xl mb-2">NFT Marketplace</h3>
//             <p className="text-gray-400 text-sm">Discover, collect, and sell extraordinary NFTs</p>
//           </div>
//           <div className="flex space-x-6">
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <span className="sr-only">Twitter</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//               </svg>
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               <span className="sr-only">Instagram</span>
//               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                 <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//               </svg>
//             </a>
//             </div>
//         </div>
//         </footer>
//  </div>
//   )
// }
