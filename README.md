# 🎮 Setupify.io

**Visual platform for gamer and developer setups**

Setupify.io is a Pinterest-style platform where creators can showcase their gaming and development setups with interactive product tagging, allowing users to discover and purchase the exact items they see.

## 🚀 Features

### MVP (Current Phase)
- **Creator Authentication**: Invitation-only registration system for setup creators
- **Interactive Setup Uploads**: Upload high-quality images with clickable product tags
- **Product Tagging**: Visual tagging system with affiliate links and product details
- **Pinterest-style Discovery**: Masonry layout for browsing setups
- **Search & Filter**: Find setups by keywords, categories, and products
- **Creator Profiles**: Dedicated pages showcasing each creator's setups

### Future Features
- User registration for likes/saves
- Advanced search filters
- Setup collections
- Creator monetization tools
- Mobile app

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5
- **Image Storage**: Local filesystem (MVP), cloud storage (future)
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eggodev/testing_devstral.git
   cd testing_devstral
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🗄️ Database Schema

The application uses a PostgreSQL database with the following main entities:

- **Users**: Creator accounts (invitation-only)
- **Invitations**: Invitation code system for new creators
- **Setups**: Setup posts with images and metadata
- **SetupItems**: Tagged products within setups with coordinates and affiliate links
- **SetupTags**: Categorization and search tags

## 🎯 Project Goals

1. **Solve Discovery Problem**: Make it easy to identify and purchase products from setup photos
2. **Creator Monetization**: Enable creators to earn from their setup showcases
3. **Community Building**: Create a hub for setup enthusiasts
4. **Quality Content**: Curated, high-quality setup content through invitation system

## 🚧 Development Status

This project is currently in **MVP development phase**. The initial focus is on core functionality:
- ✅ Project setup and architecture
- 🔄 Database schema and models
- 🔄 Authentication system
- 🔄 Setup upload and tagging
- 🔄 Discovery interface
- 🔄 Creator profiles

## 📝 Contributing

This is currently a solo project in early development. Contributions will be welcomed once the MVP is complete.

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ for the gaming and developer community**
