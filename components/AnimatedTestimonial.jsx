import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonial() {
  const testimonials = [
    {
      quote:
        "Excellent service! The driver was extremely polite, professional, and punctual. The entire journey was smooth, comfortable, and stress-free, making the overall experience truly satisfying.",
      name: "Shubham",
      designation: "",
      src: "img1.png",
    },
    {
      quote:
        "Very satisfied with the cars! The vehicle was clean, well-maintained, and comfortable. The service was reliable, the ride was smooth, and the overall experience exceeded expectations.",
      name: "Adarsh",
      designation: "",
      src: "img3.jpg",
    },
    {
      quote:
        "Pleasant experience from start to finish. The booking process was simple, the ride was comfortable, and the service was professional, making the journey enjoyable and hassle-free.",
      name: "Rudresh",
      designation: "",
      src: "img5.jpg",
    },
    {
      quote:
        "Good service with clean tours and friendly staff. Everything was well-organized, the journey was comfortable, and the support team was helpful throughout the trip.",
      name: "Prashant",
      designation: "",
      src: "img4.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
