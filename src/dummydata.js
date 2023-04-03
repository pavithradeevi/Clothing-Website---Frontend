const dresses =[
    {
      title: "Kurta",
      size: ["S", "L", "XL"],
      price: [
        {
          S: 499,
          L: 499,
          XL: 599,
        },
      ],
      category: "Traditional",
      img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000012414350-Pink-PINK-1000012414350_02-2100.jpg",
      desc: "Fabric is Cotten.Its Printed Design,3/4 sleeve length",
    },
    {
      title: "Kurta-Striped",
      size: ["S", "M", "L","XL","XXL"],
      price: [
        {
          S: 399,
          M: 399,
          L: 499,
          XL:499,
          XXL:599,
        },
      ],
      category: "Traditional",
      img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000012010278-Multicolour-M-1000012010278_01-2100.jpg",
      desc:
        "pice up your wardrobe with this striped kurta in a knee-length profile. It is fashioned with a collared neck, three-quarter sleeves, a button-down front, and a curved hem. Complete the look by styling this kurta with palazzos and sandals",
    },
    {
      title: "Tops",
      size: ["S", "M", "L","XL","XXL"],
      price: [
        {
            S: 399,
            M: 399,
            L: 499,
            XL:499,
            XXL:599,
        },
      ],
      category: "Western Outfits",
      desc:
        "Amp up your style with this tunic that is designed with floral prints. It features a tie-up neck, melon sleeves with tabs, and a curved hem. Style this tunic with jeans and flat sandals for a refined look",
      img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000012206452-Blue-LIGHTBLUE-1000012206452_01-2100.jpg",
    },
    {
        title: "Peasant Top",
        size: ["S", "M", "L","XL","XXL"],
        price: [
          {
            S: 399,
            M: 399,
            L: 499,
            XL:499,
            XXL:599,
          },
        ],
        category: "Western Outfits",
        img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000012205828-Beige-OFFWHITE-1000012205828_02-2100.jpg",
        desc:
          "ake a chic statement in this crop top with schiffli embroidery. It is designed with a round neck, raglan sleeves, and a smocked hem. Pair this top with ethnic pants and sneakers for an elegant look.",
      },
      {
        title: "A-line Kurta",
        size: ["S", "M", "L","XL","XXL"],
        price: [
          {
            S: 599,
            M: 599,
            L: 699,
            XL:699,
            XXL:1199,
          },
        ],
        category: "Traditional",
        img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000012392151-Beige-OFFWHITE-1000012392151_01-2100.jpg",
        desc:
          "Twirl in your ethnic wear with this printed a-line kurta which has a v-neck, three-quarter sleeves, and a calf-length construction. To make your outfit the highlight of any event team up this kurta with a pair of palazzos and heels.",
      },
      {
        title: "Printed PyjamaSets",
        size: ["S", "M", "L","XL","XXL"],
        price: [
          {
            S: 299,
            M: 299,
            L: 399,
            XL:399,
            XXL:399,
          },
        ],
        category: "Sleep wear",
        img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011588095-Grey-GREYMELANGE-1000011588095_01-2100.jpg",
        desc:
          "Style in comfort with this lounge set that comes with a printed top designed with a round neck and long sleeves and a pair of elasticated waistband pajamas.",
      },
      {
        title: "night dress 1",
        size: ["S", "M", "L","XL","XXL"],
        price: [
          {
            S: 399,
            M: 399,
            L: 499,
            XL:499,
            XXL:599,
          },
        ],
        category: "Sleep wear",
        img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011639242-Blue-BLUE-1000011639242_02-2100.jpg",
        desc:
          "Fabric is Cotten.Its Printed Design,3/4 sleeve length",
      },
      {
        title: "Maxi",
        size: ["S", "M", "L","XL","XXL"],
        price: [
          {
            S: 799,
            M: 799,
            L: 899,
            XL:999,
            XXL:999,
          },
        ],
        category: "New Arrivals",
        img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000012206998-Yellow-YELLOW-1000012206998_01-2100.jpg",
        desc:
          "Breeze through the day in style. This maxi-length skirt is designed with floral and ethnic prints to exude an elegant look. It features a partially elasticated waist, tie-up with tassels, button closure, and an A-line profile. For a chic look, style this skirt with a contrasting top and heels.",
      },
      {
        title: "Kaftan Maxi",
        size: ["S", "M", "L","XL","XXL"],
        price: [
          {
            S: 899,
            M: 899,
            L: 999,
            XL:1199,
            XXL:1199,
          },
        ],
        category: "New Arrivals",
        img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011473651-Multicolour-M-1000011473651-31072022_01-2100.jpg",
        desc:
          "Breezy and chic, this maxi dress in a kaftan profile features V-neckline, three-quarter sleeves, cinched waist, and all-over floral prints",
      },
      {
        title: "Ear Rings",
        size: [],
        price: [199],
        category: "Accessories",
        img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010952613-1000010952612-13042022_01-2100.jpg",
        desc:
          "Accessorize your ensemble with the elegance of this chic pair of earrings, that comes with an embellished design and a drop silhouette. Style it with your gown to make a statement.",
      },
      {
        title: "Bags",
        size: [],
        price: [299],
        category: "Accessories",
        img: "https://lmsin.net/cdn-cgi/image/h=1200,w=1200,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011607717-1000011607716-19082022_01-2100.jpg",
        desc:
          "Designed with a beautifully embroidered design, and zip closure, this pouch features a spacious compartment to keep all your things together, along with a stylish look and appeal to match your outfits.",
      },
   
  ];
  export default dresses