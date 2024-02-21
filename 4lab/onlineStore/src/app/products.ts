export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  source: string;
  rating: number;

}

export const products = [
  {
    id: 1,
    name: 'IPad Air',
    rating: 5,
    price: 830.51,
    description: "A tablet that is lighter and thinner than Apple's previous tablets and runs iPadOS",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h93/h4a/64457638510622.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-djuim-8-gb-256-gb-sinii-104235792/?c=750000000"
  },
  {
    id: 2,
    name: 'Apple MacBook Air 13 ',
    rating: 5,
    price: 927.70,
    description: "The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000"
  },
  {
    id: 3,
    name: 'TV Samsung',
    rating: 5,
    price: 629.49,
    description: "A television that includes an internal processor and onboard storage and enables internet connectivity, similar to a smartphone or personal computer",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hcc/hea/64098823536670.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/samsung-ue55au7100uxce-140-sm-chernyi-101625121/?c=750000000"
  },
  {
    id: 4,
    name: 'iPhone 15 Pro Max',
    rating: 5,
    price: 1469.80,
    description: "Bigger screen, bigger battery. ",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hec/hec/84076539772958.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-dual-sim-seryi-113587942/?c=750000000"
  },
  {
    id: 5,
    name: 'Яндекс Станция Мини 2 ',
    rating: 5,
    price: 94.89,
    description: "A second—generation smart speaker with a new design, sound, smart home control center and Alice. Favorite music with a clear and deep sound",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h39/hca/63898629537822.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-yndx-00020-chernyi-102580021/?c=750000000"
  },
  {
    id: 6,
    name: "Dyson HS05 Airwrap Complete Long стайлер 1300 W",
    rating: 5,
    price: 572.08,
    description: "The only multi-styler to use Coanda airflow across its Smoothing brushes, Barrels and Coanda smoothing dryer. With no heat damage",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h17/hd9/82802441289758.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-stailer-1300-w-104498649/?c=750000000"

  },
  {
    id: 7,
    name: 'Виниловый проигрыватель Верный Saturn',
    rating: 5,
    price: 123.69,
    description: "Consist of a rotating disc to support the record, a tonearm to navigate the needle over the record's grooves",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc8/h12/83972599971870.jpg?format=gallery-large",
    source:"https://kaspi.kz/shop/p/vernyi-saturn-113435558/?c=750000000"
  },
  {
    id: 8,
    name: 'Amazon Kindle Paper E-book ',
    rating: 5,
    price: 214.22,
    description: "Feel the pleasure of reading with clear text and comfortable size, perfect for reading anywhere. In an elegant blue color, this Kindle is presented without intrusive advertising.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h8b/hcb/64375762681886.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/amazon-kindle-paper-2021-chernyi-102838488/?c=750000000"
  },
  {
    id: 9,
    name: 'Кухонный комбайн Thermomix TM6 ',
    rating: 5,
    price: 1954.80,
    description: "Thermomix TM6 is an innovative compact super—powerful device that combines the functions of more than 20 devices. With it, you can grind, beat, weigh, grind, knead the dough at the touch of a button.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h19/h69/63754424844318.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/thermomix-tm6-belyi-101073636/?c=750000000"
  },
  {
    id: 10,
    name: 'Кофемашина Philips LatteGo EP3241  ',
    rating: 5,
    price: 839.32,
    description: "Latego cappuccino machine - gentle milk foam, easy cleansing, 12 degrees of grinding, auto-off, preparation of 2 cups of coffee at the same time, AquaClean filter included.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h65/h23/63831906779166.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/kofemashina-philips-lattego-ep3241-chernyi-4400565/?c=750000000"
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/