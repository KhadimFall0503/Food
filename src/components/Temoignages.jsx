import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Awa Ndiaye",
    role: "Client fidèle",
    text: "Une expérience incroyable ! Les plats sont délicieux et le service est impeccable.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Mamadou Fall",
    role: "Client",
    text: "Ambiance chaleureuse et plats savoureux, je recommande vivement ce restaurant.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Fatou Diop",
    role: "Client",
    text: "Service rapide et plats excellents, un vrai régal !",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Seynabou Diallo",
    role: "Client",
    text: "Plats délicieux et service chaleureux. Je reviendrai sans hésiter !",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

export default function Temoignages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center border-2 border-amber-400 rounded-xl p-8 bg-white/90 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-amber-600 mb-12">Témoignages</h2>

        <div className="flex flex-col gap-12 max-w-3xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-24 h-24 rounded-full border-2 border-amber-400 shadow"
              />
              <div className="text-left md:text-left">
                <p className="text-gray-800 italic mb-2 text-lg leading-relaxed">
                  "{item.text}"
                </p>
                <h3 className="text-lg font-bold text-amber-600">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
