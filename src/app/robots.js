export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"], // optional improvement
      },
    ],
    sitemap: "https://aaradhyatourandtravels.com/sitemap.xml",
  };
}