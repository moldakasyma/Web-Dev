export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img2: string;
  img3: string;
  source: string;
  rating: number;

}

export const products = [
  {
    id: 1,
    name: 'IPad Air',
    rating: 5,
    price: 375999 ,
    description: "A tablet that is lighter and thinner than Apple's previous tablets and runs iPadOS",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h93/h4a/64457638510622.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h97/h9c/64457640771614.jpg?format=gallery-large",
    img3: "https://resources.cdn-kaspi.kz/img/m/p/h69/hc7/64457644638238.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-djuim-8-gb-256-gb-sinii-104235792/?c=750000000"
  },
  {
    id: 2,
    name: 'Apple MacBook Air 13 ',
    rating: 5,
    price: 420000,
    description: "The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h9b/hed/64082975653918.jpg?format=gallery-large",
    img3: "https://resources.cdn-kaspi.kz/img/m/p/hf8/he3/64082978111518.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000"
  },
  {
    id: 3,
    name: 'TV Samsung',
    rating: 5,
    price: 284990,
    description: "A television that includes an internal processor and onboard storage and enables internet connectivity, similar to a smartphone or personal computer",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hcc/hea/64098823536670.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h7f/h93/64098838544414.jpg?format=gallery-medium",
    img3: "https://resources.cdn-kaspi.kz/img/m/p/h8d/h44/64098848178206.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/samsung-ue55au7100uxce-140-sm-chernyi-101625121/?c=750000000"
  },
  {
    id: 4,
    name: 'iPhone 15 Pro Max',
    rating: 5,
    price: 665426,
    description: "Bigger screen, bigger battery. ",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hec/hec/84076539772958.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hde/hf1/84076539838494.jpg?format=gallery-medium",
    img3: "https://resources.cdn-kaspi.kz/img/m/p/hf3/h81/84076539904030.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-dual-sim-seryi-113587942/?c=750000000"
  },
  {
    id: 5,
    name: 'Яндекс Станция Мини 2 ',
    rating: 5,
    price: 42960,
    description: "A second—generation smart speaker with a new design, sound, smart home control center and Alice. Favorite music with a clear and deep sound",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h39/hca/63898629537822.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h8b/h43/63898631897118.jpg?format=gallery-medium",
    img3: "https://resources.cdn-kaspi.kz/img/m/p/h8c/hab/63898634649630.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-yndx-00020-chernyi-102580021/?c=750000000"
  },
  {
    id: 6,
    name: "Dyson HS05 Airwrap Complete Long стайлер 1300 W",
    rating: 5,
    price: 258998,
    description: "The only multi-styler to use Coanda airflow across its Smoothing brushes, Barrels and Coanda smoothing dryer. With no heat damage",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h17/hd9/82802441289758.jpg?format=gallery-large",
    img2:"https://resources.cdn-kaspi.kz/img/m/p/h18/h70/82802441322526.jpg?format=gallery-large",
    img3: "https://resources.cdn-kaspi.kz/img/m/p/h4f/hc8/67104332939294.jpg?format=gallery-large",
    source: "https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-stailer-1300-w-104498649/?c=750000000"

  },
  {
    id: 7,
    name: 'Виниловый проигрыватель Верный Saturn',
    rating: 5,
    price: 56000,
    description: "Consist of a rotating disc to support the record, a tonearm to navigate the needle over the record's grooves",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc8/h12/83972599971870.jpg?format=gallery-large",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/hc2/hcc/83972600004638.jpg?format=gallery-large",
    img3: "https://resources.cdn-kaspi.kz/img/m/p/h2e/hbb/83972599578654.jpg?format=gallery-large",
    source:"https://kaspi.kz/shop/p/vernyi-saturn-113435558/?c=750000000"
  },
  {
    id: 8,
    name: 'Amazon Kindle Paper E-book ',
    rating: 5,
    price: 96984,
    description: "Feel the pleasure of reading with clear text and comfortable size, perfect for reading anywhere. In an elegant blue color, this Kindle is presented without intrusive advertising.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h8b/hcb/64375762681886.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h16/h88/64375765434398.jpg?format=gallery-medium",
    img3: "https://ir.ozone.ru/s3/multimedia-5/c1000/6494038697.jpg",
    source: "https://kaspi.kz/shop/p/amazon-kindle-paper-2021-chernyi-102838488/?c=750000000"
  },
  {
    id: 9,
    name: 'Кухонный комбайн Thermomix TM6 ',
    rating: 5,
    price: 885000,
    description: "Thermomix TM6 is an innovative compact super—powerful device that combines the functions of more than 20 devices. With it, you can grind, beat, weigh, grind, knead the dough at the touch of a button.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h19/h69/63754424844318.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h2b/h40/63754425237534.jpg?format=gallery-medium",
    img3: "https://resources.cdn-kaspi.kz/img/m/p/h10/he4/63754425499678.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/thermomix-tm6-belyi-101073636/?c=750000000"
  },
  {
    id: 10,
    name: 'Кофемашина Philips LatteGo EP3241  ',
    rating: 5,
    price: 379985,
    description: "Latego cappuccino machine - gentle milk foam, easy cleansing, 12 degrees of grinding, auto-off, preparation of 2 cups of coffee at the same time, AquaClean filter included.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h65/h23/63831906779166.jpg?format=gallery-medium",
    img2: "https://resources.cdn-kaspi.kz/img/m/p/h87/hc7/63831909236766.jpg?format=gallery-medium",
    img3: "https://resources.cdn-kaspi.kz/img/m/p/h01/hf9/63831912710174.jpg?format=gallery-medium",
    source: "https://kaspi.kz/shop/p/kofemashina-philips-lattego-ep3241-chernyi-4400565/?c=750000000"
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/