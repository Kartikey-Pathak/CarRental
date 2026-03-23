export default async function sitemap() {
  const baseUrl = "https://aaradhyatourandtravels.com";

  // 🔹 Fetch dynamic car data
  const res = await fetch(`${baseUrl}/api/cars`, {
    cache: "no-store",
  });
  const cars = await res.json();

  // 🔹 Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];

  // 🔹 Dynamic car routes
  const carRoutes = cars.map((car) => ({
    url: `${baseUrl}/cars/${encodeURIComponent(car.name)}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...carRoutes];
}
