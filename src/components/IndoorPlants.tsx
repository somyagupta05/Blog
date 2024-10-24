export default function IndoorPlants() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-20">
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-blue-800 mb-10">
          Benefits of Indoor Plants
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Indoor plants not only enhance your living spaces, but they also improve air quality and boost your mood. Here is why you should have them in your home.
        </p>

        <div className="space-y-8">
          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-blue-700 text-xl mb-2">
              🍃 Purify the Air
            </h2>
            <p>
              Many indoor plants act as natural air filters, absorbing toxins and releasing clean oxygen into your space.
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-blue-700 text-xl mb-2">
              🌿 Boost Mental Health
            </h2>
            <p>
              Studies show that indoor plants can reduce stress and improve focus, creating a calm and relaxing environment.
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-blue-700 text-xl mb-2">
              💧 Increase Humidity
            </h2>
            <p>
              Plants naturally increase humidity, which can help with dry skin and respiratory issues, especially in winter months.
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-blue-700 text-xl mb-2">
              🌼 Add Natural Beauty
            </h2>
            <p>
              The presence of plants adds a touch of beauty and vibrancy to any room, making your home feel fresh and alive.
            </p>
          </div>

          <div className="text-lg text-gray-600">
            <h2 className="font-semibold text-blue-700 text-xl mb-2">
              🌱 Improve Sleep Quality
            </h2>
            <p>
              Certain plants like lavender and jasmine have calming effects that can improve sleep quality by promoting relaxation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
