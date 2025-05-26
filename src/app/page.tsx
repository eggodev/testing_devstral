import { SetupCard } from "@/components/SetupCard"
import { Header } from "@/components/Header"

// Mock data para mostrar el feed
const mockSetups = [
  {
    id: "1",
    title: "Ultimate Gaming Setup 2024",
    description: "My dream gaming setup with RGB everything",
    imageUrl: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=600&fit=crop",
    creator: {
      name: "TechGamer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
    },
    tags: ["Gaming", "RGB", "High-end"],
    itemCount: 12,
    totalPrice: 3500
  },
  {
    id: "2", 
    title: "Minimalist Dev Workspace",
    description: "Clean and productive coding environment",
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=500&fit=crop",
    creator: {
      name: "CodeMaster",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    tags: ["Minimal", "Productivity", "Coding"],
    itemCount: 8,
    totalPrice: 1200
  },
  {
    id: "3",
    title: "Streaming Studio Setup",
    description: "Professional streaming setup for content creation",
    imageUrl: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=700&fit=crop",
    creator: {
      name: "StreamPro",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    tags: ["Streaming", "Content", "Professional"],
    itemCount: 15,
    totalPrice: 4200
  },
  {
    id: "4",
    title: "Cozy Home Office",
    description: "Warm and comfortable workspace for remote work",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=550&fit=crop",
    creator: {
      name: "RemoteWorker",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    tags: ["Cozy", "Remote Work", "Comfort"],
    itemCount: 10,
    totalPrice: 800
  },
  {
    id: "5",
    title: "Dual Monitor Battlestation",
    description: "Productivity powerhouse with dual 4K monitors",
    imageUrl: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=600&fit=crop",
    creator: {
      name: "ProductivityGuru",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face"
    },
    tags: ["Dual Monitor", "4K", "Productivity"],
    itemCount: 11,
    totalPrice: 2800
  },
  {
    id: "6",
    title: "Retro Gaming Corner",
    description: "Nostalgic setup with vintage consoles and CRT monitor",
    imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=650&fit=crop",
    creator: {
      name: "RetroGamer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    },
    tags: ["Retro", "Vintage", "Console Gaming"],
    itemCount: 6,
    totalPrice: 450
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Setups
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get inspired by gaming and developer setups from creators around the world. 
            Click on any item to shop the exact products.
          </p>
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {mockSetups.map((setup) => (
            <SetupCard key={setup.id} setup={setup} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Load More Setups
          </button>
        </div>
      </main>
    </div>
  )
}
