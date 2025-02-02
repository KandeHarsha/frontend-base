export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2 text-indigo-600">Card {item}</h2>
            <p className="text-slate-600">This is some dummy content for Card {item}.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

