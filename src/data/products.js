// ============================================================
// PRODUCT DATA
// ------------------------------------------------------------
// Edit prices, names, descriptions, image paths and sizes
// right here. The whole website updates automatically —
// you never need to touch any component or page file.
//
// To add your own photos, replace the files inside:
//   public/images/couple/
//   public/images/unisex/
//   public/images/boys/
// using the SAME file names, or update the paths below.
// ============================================================

const products = {
  couple: [
    {
      id: 1,
      name: "Couple Set 01",
      price: 2499,
      description:
        "Premium matching couple set, cut from soft heavyweight cotton for a fit that feels as good as it looks together.",
      images: ["/images/couple/c1.jpg", "/images/couple/c2.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Couple",
    },
    {
      id: 2,
      name: "Couple Set 02",
      price: 2599,
      description:
        "Premium matching couple set, cut from soft heavyweight cotton for a fit that feels as good as it looks together.",
      images: ["/images/couple/c2.jpg", "/images/couple/c2.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Couple",
    },
    {
      id: 3,
      name: "Couple Set 03",
      price: 2699,
      description:
        "Premium matching couple set, cut from soft heavyweight cotton for a fit that feels as good as it looks together.",
      images: ["/images/couple/c3.jpg", "/images/couple/c3.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Couple",
    },
    {
      id: 4,
      name: "Couple Set 04",
      price: 2799,
      description:
        "Premium matching couple set, cut from soft heavyweight cotton for a fit that feels as good as it looks together.",
      images: ["/images/couple/c4.jpg", "/images/couple/c4.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Couple",
    },
    {
      id: 5,
      name: "Couple Set 05",
      price: 2899,
      description:
        "Premium matching couple set, cut from soft heavyweight cotton for a fit that feels as good as it looks together.",
      images: ["/images/couple/c5.jpg", "/images/couple/c5.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Couple",
    },
    {
      id: 6,
      name: "Couple Set 06",
      price: 2999,
      description:
        "Premium matching couple set, cut from soft heavyweight cotton for a fit that feels as good as it looks together.",
      images: ["/images/couple/c6.jpg", "/images/couple/c6.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Couple",
    },
  ],

  unisex: [
    {
      id: 1,
      name: "Unisex Essential 01",
      price: 1899,
      description:
        "A relaxed, everyday piece built for anyone — clean lines, easy fit, made to move through your whole week.",
      images: ["/images/unisex/u1.jpg", "/images/unisex/u1.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Unisex",
    },
    {
      id: 2,
      name: "Unisex Essential 02",
      price: 1999,
      description:
        "A relaxed, everyday piece built for anyone — clean lines, easy fit, made to move through your whole week.",
      images: ["/images/unisex/u2.jpg", "/images/unisex/u2.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Unisex",
    },
    {
      id: 3,
      name: "Unisex Essential 03",
      price: 2099,
      description:
        "A relaxed, everyday piece built for anyone — clean lines, easy fit, made to move through your whole week.",
      images: ["/images/unisex/u3.jpg", "/images/unisex/u3.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Unisex",
    },
    {
      id: 4,
      name: "Unisex Essential 04",
      price: 2199,
      description:
        "A relaxed, everyday piece built for anyone — clean lines, easy fit, made to move through your whole week.",
      images: ["/images/unisex/u4.jpg", "/images/unisex/u4.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Unisex",
    },
    {
      id: 5,
      name: "Unisex Essential 05",
      price: 2299,
      description:
        "A relaxed, everyday piece built for anyone — clean lines, easy fit, made to move through your whole week.",
      images: ["/images/unisex/u5.jpg", "/images/unisex/u5.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Unisex",
    },
    {
      id: 6,
      name: "Unisex Essential 06",
      price: 2399,
      description:
        "A relaxed, everyday piece built for anyone — clean lines, easy fit, made to move through your whole week.",
      images: ["/images/unisex/u6.jpg", "/images/unisex/u6.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Unisex",
    },
  ],

  boys: [
    {
      id: 1,
      name: "Boys Fit 01",
      price: 1699,
      description:
        "A sharp, comfortable fit designed for boys who like their fashion bold and their comfort non-negotiable.",
      images: ["/images/boys/b1.jpg", "/images/boys/b1.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Boys",
    },
    {
      id: 2,
      name: "Boys Fit 02",
      price: 1799,
      description:
        "A sharp, comfortable fit designed for boys who like their fashion bold and their comfort non-negotiable.",
      images: ["/images/boys/b2.jpg", "/images/boys/b2.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Boys",
    },
    {
      id: 3,
      name: "Boys Fit 03",
      price: 1899,
      description:
        "A sharp, comfortable fit designed for boys who like their fashion bold and their comfort non-negotiable.",
      images: ["/images/boys/b3.jpg", "/images/boys/b3.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Boys",
    },
    {
      id: 4,
      name: "Boys Fit 04",
      price: 1999,
      description:
        "A sharp, comfortable fit designed for boys who like their fashion bold and their comfort non-negotiable.",
      images: ["/images/boys/b4.jpg", "/images/boys/b4.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Boys",
    },
    {
      id: 5,
      name: "Boys Fit 05",
      price: 2099,
      description:
        "A sharp, comfortable fit designed for boys who like their fashion bold and their comfort non-negotiable.",
      images: ["/images/boys/b5.jpg", "/images/boys/b5.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Boys",
    },
    {
      id: 6,
      name: "Boys Fit 06",
      price: 2199,
      description:
        "A sharp, comfortable fit designed for boys who like their fashion bold and their comfort non-negotiable.",
      images: ["/images/boys/b6.jpg", "/images/boys/b6.jpg"],
      sizes: ["S", "M", "L", "XL"],
      collection: "Boys",
    },
  ],
};

export default products;
