export default function Categories() {
    const categories = [
      { name: "Casual", image: "/images/dress-style-1.png" },
      { name: "Formal", image: "/images/dress-style-2.png" },
      { name: "Party", image: "/images/dress-style-3.png" },
      { name: "Gym", image: "/images/dress-style-4.png" },
    ];
  
    return (
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Browse by Dress Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-4 p-4 border bg-white rounded-lg hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-40 w-40 object-cover"
              />
              <span className="text-lg  font-sa">{category.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  