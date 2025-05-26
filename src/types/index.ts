// Setupify.io Type Definitions

export interface User {
  id: string
  email: string
  username: string
  name?: string
  bio?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface Setup {
  id: string
  title: string
  description?: string
  images: string[]
  published: boolean
  featured: boolean
  views: number
  likes: number
  createdAt: Date
  updatedAt: Date
  author: User
  items: SetupItem[]
  tags: SetupTag[]
}

export interface SetupItem {
  id: string
  name: string
  description?: string
  affiliateUrl: string
  price?: string
  brand?: string
  category?: string
  imageIndex: number
  positionX: number
  positionY: number
  createdAt: Date
  updatedAt: Date
}

export interface SetupTag {
  id: string
  name: string
}

export interface Invitation {
  id: string
  code: string
  email?: string
  used: boolean
  usedAt?: Date
  createdAt: Date
  expiresAt?: Date
  inviter: User
}

// Form types
export interface CreateSetupForm {
  title: string
  description?: string
  images: File[]
  tags: string[]
}

export interface CreateSetupItemForm {
  name: string
  description?: string
  affiliateUrl: string
  price?: string
  brand?: string
  category?: string
  imageIndex: number
  positionX: number
  positionY: number
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}