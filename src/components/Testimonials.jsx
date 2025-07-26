import Image from "next/image";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-amber-500">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-amber-500/20 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {testimonial.clientName}
              </h3>
              <p className="text-gray-300 mb-4 italic">{testimonial.content}</p>
              <div className="flex justify-center gap-4">
                {testimonial.beforeImage && (
                  <a
                    href={testimonial.beforeImage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={testimonial.beforeImage}
                      alt="Before"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </a>
                )}
                {testimonial.afterImage && (
                  <a
                    href={testimonial.afterImage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={testimonial.afterImage}
                      alt="After"
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
