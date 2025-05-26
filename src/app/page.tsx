export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-6xl font-bold text-white mb-6">
              🎮 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Setupify</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Visual platform for gamer and developer setups. Discover, tag, and shop the exact products from your favorite setups.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Setups
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Join as Creator
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🏷️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Tagging</h3>
              <p className="text-gray-300">Click on any item in a setup to see product details and purchase links.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Curated Content</h3>
              <p className="text-gray-300">High-quality setups from invited creators in the gaming and dev community.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Creator Monetization</h3>
              <p className="text-gray-300">Creators earn through affiliate links on their tagged products.</p>
            </div>
          </div>

          {/* Status */}
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-yellow-200 font-medium">
              🚧 MVP in Development - Coming Soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
