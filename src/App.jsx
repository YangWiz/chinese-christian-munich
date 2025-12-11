function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-16 w-auto"
              />
              <h1 className="ml-4 text-2xl md:text-3xl font-bold text-white">
                聖本篤文化中心
              </h1>
            </div>
            <div className="text-right text-gray-400 text-sm">
              <div>Adress, E-Mail</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Six Blocks Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Block 1 */}
          <a href="#" className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-300">
              隐修世界
            </h2>
            <p className="text-gray-300 text-sm">
              The monastic world (Die monastische Welt)
            </p>
          </a>

          {/* Block 2 */}
          <a href="#" className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-300">
              溯本归源弘扬传统<br />务本笃行传承信仰
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              (Motto) Mit Bildern, Hintergrundmusik und Bewegung
            </p>
          </a>

          {/* Block 3 */}
          <a href="#" className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-300">
              圣人列传
            </h2>
            <p className="text-gray-300 text-sm">
              Biografien von Heiligen (Biographies of Saints)
            </p>
          </a>

          {/* Block 4 */}
          <a href="#" className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-300">
              神学课程
            </h2>
            <p className="text-gray-300 text-sm">
              Distance learning courses in theology (Fernkurse in Theologie)
            </p>
          </a>

          {/* Block 5 */}
          <a href="#" className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-300">
              谈经论道
            </h2>
            <p className="text-gray-300 text-sm">
              Diskussion über Schriften und Lehren (Telling Bible stories and speak Christian truths)
            </p>
          </a>

          {/* Block 6 */}
          <a href="#" className="block bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-300">
              会规研习
            </h2>
            <p className="text-gray-300 text-sm">
              Studying the rules (Studium der Regeln)
            </p>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 聖本篤文化中心. 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
