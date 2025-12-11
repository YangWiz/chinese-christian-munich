import { useState } from 'react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-1 min-w-0">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-12 sm:h-16 w-auto flex-shrink-0"
              />
              <h1 className="ml-2 sm:ml-4 text-lg sm:text-2xl md:text-3xl font-bold text-white truncate">
                聖本篤文化中心
              </h1>
            </div>
            <div className="hidden md:block text-right text-gray-400 text-sm ml-4">
              <div>Adress, E-Mail</div>
            </div>
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden ml-2 text-gray-400 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="pt-4 text-gray-400 text-sm">
                <div>Adress, E-Mail</div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content - Six Blocks Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Block 1 */}
          <a href="#" className="block bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 active:bg-gray-600 transition-colors group touch-manipulation">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-300">
              隐修世界
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              The monastic world (Die monastische Welt)
            </p>
          </a>

          {/* Block 2 */}
          <a href="#" className="block bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 active:bg-gray-600 transition-colors group touch-manipulation">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-300">
              溯本归源弘扬传统<br className="hidden sm:block" />务本笃行传承信仰
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
              (Motto) Mit Bildern, Hintergrundmusik und Bewegung
            </p>
          </a>

          {/* Block 3 */}
          <a href="#" className="block bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 active:bg-gray-600 transition-colors group touch-manipulation">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-300">
              圣人列传
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Biografien von Heiligen (Biographies of Saints)
            </p>
          </a>

          {/* Block 4 */}
          <a href="#" className="block bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 active:bg-gray-600 transition-colors group touch-manipulation">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-300">
              神学课程
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Distance learning courses in theology (Fernkurse in Theologie)
            </p>
          </a>

          {/* Block 5 */}
          <a href="#" className="block bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 active:bg-gray-600 transition-colors group touch-manipulation">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-300">
              谈经论道
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Diskussion über Schriften und Lehren (Telling Bible stories and speak Christian truths)
            </p>
          </a>

          {/* Block 6 */}
          <a href="#" className="block bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 active:bg-gray-600 transition-colors group touch-manipulation">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-300">
              会规研习
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Studying the rules (Studium der Regeln)
            </p>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2024 聖本篤文化中心. 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
