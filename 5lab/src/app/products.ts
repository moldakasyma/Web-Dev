export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  source: string;
  rating: number;
  category: string;
  likes: number;

}

export const products = [
  {
    id: 1,
    category: "Gadget",
    name: 'IPad Air',
    rating: 5,
    price: 830.51,
    description: "A tablet that is lighter and thinner than Apple's previous tablets and runs iPadOS",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h93/h4a/64457638510622.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-djuim-8-gb-256-gb-sinii-104235792/?c=750000000",
    likes: 0
  },
  {
    id: 2,
    category: "Gadget",
    name: 'Apple MacBook Air 13 ',
    rating: 5,
    price: 927.70,
    description: "The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000",
    likes: 0
  },
  {
    id: 3,
    category: "TV,Audio,Video",
    name: 'TV Samsung',
    rating: 5,
    price: 629.49,
    description: "A television that includes an internal processor and onboard storage and enables internet connectivity, similar to a smartphone or personal computer",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hcc/hea/64098823536670.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/samsung-ue55au7100uxce-140-sm-chernyi-101625121/?c=750000000",
    likes: 0
  },
  {
    id: 4,
    category: "Gadget",
    name: 'iPhone 15 Pro Max',
    rating: 5,
    price: 1469.80,
    description: "Bigger screen, bigger battery. ",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hec/hec/84076539772958.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-dual-sim-seryi-113587942/?c=750000000",
    likes: 0
  },
  {
    id: 5,
    category: "TV,Audio,Video",
    name: 'Яндекс Станция Мини 2 ',
    rating: 5,
    price: 94.89,
    description: "A second—generation smart speaker with a new design, sound, smart home control center and Alice. Favorite music with a clear and deep sound",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h39/hca/63898629537822.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-yndx-00020-chernyi-102580021/?c=750000000",
    likes: 0
  },
  {
    id: 6,
    category: "Beauty and Health",
    name: "Dyson HS05 Airwrap Complete Long стайлер 1300 W",
    rating: 5,
    price: 572.08,
    description: "The only multi-styler to use Coanda airflow across its Smoothing brushes, Barrels and Coanda smoothing dryer. With no heat damage",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h17/hd9/82802441289758.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-stailer-1300-w-104498649/?c=750000000",
    likes: 0

  },
  {
    id: 7,
    category: "TV,Audio,Video",
    name: 'Виниловый проигрыватель Верный Saturn',
    rating: 5,
    price: 123.69,
    description: "Consist of a rotating disc to support the record, a tonearm to navigate the needle over the record's grooves",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc8/h12/83972599971870.jpg?format=gallery-large",
    source:"https://kaspi.kz/shop/p/vernyi-saturn-113435558/?c=750000000",
    likes: 0
  },
  {
    id: 8,
    category: "Gadget",
    name: 'Amazon Kindle Paper E-book ',
    rating: 5,
    price: 214.22,
    description: "Feel the pleasure of reading with clear text and comfortable size, perfect for reading anywhere. In an elegant blue color, this Kindle is presented without intrusive advertising.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h8b/hcb/64375762681886.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/amazon-kindle-paper-2021-chernyi-102838488/?c=750000000",
    likes: 0
  },
  {
    id: 9,
    category: "Household goods",
    name: 'Кухонный комбайн Thermomix TM6 ',
    rating: 5,
    price: 1954.80,
    description: "Thermomix TM6 is an innovative compact super—powerful device that combines the functions of more than 20 devices. With it, you can grind, beat, weigh, grind, knead the dough at the touch of a button.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h19/h69/63754424844318.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/thermomix-tm6-belyi-101073636/?c=750000000",
    likes: 0
  },
  {
    id: 10,
    category: "Household goods",
    name: 'Кофемашина Philips LatteGo EP3241  ',
    rating: 5,
    price: 839.32,
    description: "Latego cappuccino machine - gentle milk foam, easy cleansing, 12 degrees of grinding, auto-off, preparation of 2 cups of coffee at the same time, AquaClean filter included.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h65/h23/63831906779166.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/kofemashina-philips-lattego-ep3241-chernyi-4400565/?c=750000000",
    likes: 0
  },
  {
    id: 11,
    category: "Gadget",
    name: 'Samsung Galaxy S24 Ultra 5G Smartphone 12GB/512GB Black + Case',
    rating: 5,
    price: 1693.06,
    description: "The Samsung Galaxy S24 comes with 6.1-nch Dynamic AMOLED display with 120Hz refresh rate and Qualcomm Snapdragon 8 Gen 3 processor.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hba/h8d/84952667815966.png?format=gallery-large",
    source: "https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-podarok-116004807/?c=750000000",
    likes: 0
  },
  {
    id: 12,
    category: "TV,Audio,Video",
    name: 'Apple Earpods 3 Headphones with Lightning Charging Case White',
    rating: 5,
    price: 188.33,
    description: "AirPods are lightweight and offer a contoured design. They sit at just the right angle for comfort and to better direct audio to your ear.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000",
    likes: 0
  },
  {
    id: 13,
    category: "TV,Audio,Video",
    name: 'Marshall Major IV Headphones Black',
    rating: 5,
    price: 153.12,
    description: "MARSHALL Major IV is distinguished by its ease of use. The model has a folding design with an adjustable headband, which makes it easy to choose the optimal position of the headphones. The device is also equipped with soft ear pads made of high-quality materials that will give comfort even with prolonged use.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000",
    likes: 0
  },
  {
    id: 14,
    category: "Beauty and Health",
    name: 'Dr.Ceuracle Essence Vegan Kombucha Tea Essence',
    rating: 4.75,
    price: 26.63,
    description: "Vegan cream essence, created on the basis of kombucha tea extract, fermented black tea, effectively cleanses the skin from impurities and moisturizes it at the same time. A balanced creamy and moisturizing formula seamlessly combines in one product (tonic, essence and moisturizer at the same time), providing hydration and nutrition. Fermented black tea contains many probiotics and vitamins",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h3c/hfc/63995919597598.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/dr-ceuracle-essentsija-vegan-kombucha-tea-essence-150-ml-101239735/?c=750000000",
    likes: 0
  },
  {
    id: 15,
    category: "Beauty and Health",
    name: 'Anua Heartleaf 77 Clear Pad ',
    rating: 4.5,
    price: 18.64,
    description: "Anua's award-winning Heartleaf 77% Clear Pad is a toner pad/peeling pad version of the super popular Anua Heartleaf 77% Soothing Toner",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h36/hfe/84467596296222.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/anua-toner-diski-pedy-heartleaf-77-clear-pad-70-sht-114393257/?c=750000000",
    likes: 0
  },
  {
    id: 16,
    category: "Beauty and Health",
    name: 'Big Box Kz Organizer',
    rating: 5,
    price: 14.62,
    description: "A very convenient organizer.It will decorate your interior both on the dressing table and in the bathroom.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h71/h94/65131802296350.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/big-box-kz-organaizer-metall-104762430/?c=750000000",
    likes: 0
  },
  {
    id: 17,
    category: "Beauty and Health",
    name: 'Clinique Almost Lipstick Black Honey',
    rating: 5,
    price: 21.97,
    description: "Clinique Almost Lipstick: developed on the basis of a moisturizing balm; - contains high-quality pigments; - leaves a perfect glossy coating with a subtle shade on the skin; - makes lips perfectly smooth and expressive; - eliminates dryness; - it is comfortably applied and evenly distributed; - it has good resistance.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/he5/ha3/82885059051550.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/clinique-almost-lipstick-pomada-rozovyi-black-honey-112607931/?c=750000000",
    likes: 0
  },
  {
    id: 18,
    category: "Household goods",
    name: 'Immersion Blender Slaouwo HB-2075 white',
    rating: 4.8,
    price: 19.67,
    description: "The multifunctional 4–in-1 blender is a compact device for fast mixing, whipping, and grinding of various products.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/pogruzhnoi-slaouwo-hb-2075-belyi-108151055/?c=750000000",
    likes: 0
  },
  {
    id: 19,
    category: "Household goods",
    name: 'DREAME H12 Dual Vacuum Cleaner Black',
    rating: 5,
    price: 560.79,
    description: "Powered by an advanced brushless motor, the roller brush spins at 520RPM to scrub your floors. The H12 Dual's included serrated brush scraper maintains the brush roller clean, which can help to some extent prevent hair from winding on the brush roller.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hcf/h4f/82152929165342.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/dreame-h12-dual-chernyi-112027044/?c=750000000",
    likes: 0
  },
  {
    id: 20,
    category: "Household goods",
    name: 'Refrigerator DAUSCHER DRF-61NF2SS-D black',
    rating: 5,
    price: 1331.49,
    description: "The impressive volume is the main reason why Side–by-Side refrigerators are chosen. They are equally suitable for both a large family and for those who prefer to buy and prepare food for the future. The consumer has more than 600 liters of usable space at his disposal, which is twice as much as in classic devices",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h6f/h0a/63822396194846.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/dauscher-drf-61nf2ss-d-chernyi-100025035/?c=750000000",
    likes: 0
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/