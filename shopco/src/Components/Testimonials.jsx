export default function Testimonials() {
    const testimonials = [
      {
        name: "Sarah M.",
        review: "I'm blown away by the quality and style of the clothes I received from Shop.Co!",
        avatar: "/images/pic1.png",
      },
      {
        name: "John D.",
        review: "From casual wear to elegant dresses, every piece I've bought has exceeded expectations.",
        avatar: "/images/pic5.png",
      },
      {
        name: "Emily R.",
        review: "The attention to detail and the variety of styles are unmatched. Love this store!",
        avatar: "/images/pic12.png",
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Happy Customers</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-24 w-24 object-cover rounded-full mb-4"
              />
              <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              <span className="text-lg font-semibold">{testimonial.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  