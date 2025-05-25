import React from "react";
import TitleSection from "./TitleSection";

const blogPosts = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Automatiseer je facturatie zonder gedoe",
    date: "24 mei 2025",
    time: "10:00",
    author: "Jasper de Vries",
  },
  {
    image:
      "https://thecontentpanel.com/wp-content/uploads/2021/03/business-blog-feat-1024x576.jpg",
    title: "5 manieren waarop AppName je tijd bespaart",
    date: "20 mei 2025",
    time: "14:30",
    author: "Sofie van Dongen",
  },
  {
    image: "https://blog.shift4shop.com/hubfs/iStock-1035778336.jpg",
    title: "Zo optimaliseer je jouw webshop processen",
    date: "18 mei 2025",
    time: "09:15",
    author: "Noah Visser",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <TitleSection title=" AppName kiezen" highlight="& updates" />
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-shadow duration-300 cursor-pointer group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 space-y-2">
                <p className="text-sm text-gray-400">
                  {post.date} • {post.time} •{" "}
                  <span className="text-[#F41DA4] font-medium">
                    {post.author}
                  </span>
                </p>
                <h3 className="text-xl font-semibold text-[#F41DA4] group-hover:underline">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
