export default function Newsletter() {
    return (
      <section className="py-12 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Up to Date About Our Latest Offers</h2>
        <p className="text-gray-400 mb-6">Sign up and get 20% off on your first order!</p>
        <form className="flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-full w-full max-w-md text-black"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </section>
    );
  }
  