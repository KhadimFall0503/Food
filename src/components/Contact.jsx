import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message envoyé :", formData);
    alert("Merci pour votre message !");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contactez-nous
        </h2>

        {/* Grid pour la map et le formulaire */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Google Map */}
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map Burger House"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d-122.41941548468134!3d37.77492977975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2c5e1e3f%3A0x9b2c1c5e0b123456!2sBurger%20House!5e0!3m2!1sfr!2s!4v1694280800000!5m2!1sfr!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Formulaire */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-semibold">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Votre email"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-400 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-amber-500 transition"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
