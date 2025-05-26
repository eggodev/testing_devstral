import { Heart, ShoppingCart, Tag } from "lucide-react"
import Image from "next/image"

interface Setup {
  id: string
  title: string
  description: string
  imageUrl: string
  creator: {
    name: string
    avatar: string
  }
  tags: string[]
  itemCount: number
  totalPrice: number
}

interface SetupCardProps {
  setup: Setup
}

export function SetupCard({ setup }: SetupCardProps) {
  return (
    <div className="break-inside-avoid mb-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer inline-block w-full">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={setup.imageUrl}
          alt={setup.title}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay with interactive elements */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          {/* Tag indicators */}
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
              <Tag className="w-3 h-3" />
              <span>{setup.itemCount} items</span>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-2">
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                <Heart className="w-4 h-4 text-gray-700" />
              </button>
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                <ShoppingCart className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Creator Info */}
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={setup.creator.avatar}
            alt={setup.creator.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">{setup.creator.name}</span>
        </div>

        {/* Title and Description */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {setup.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {setup.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {setup.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {setup.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{setup.tags.length - 3}
            </span>
          )}
        </div>

        {/* Price and Items */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{setup.itemCount} items</span>
          <span className="font-semibold text-purple-600">
            ${setup.totalPrice.toLocaleString('en-US')}
          </span>
        </div>
      </div>
    </div>
  )
}