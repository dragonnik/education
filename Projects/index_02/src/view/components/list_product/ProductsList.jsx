import m from "mithril";

import "./_blog-product-list.scss";
import "../my-component/MyComponent.scss";
import { Product } from "./seventh_product/SeventhProduct.jsx";

export class ProductsList {
  // average(){
  //     let x = +prompt('Введите первое число: ', x)
  //     let y = +prompt('Введите второе число: ', y)
  //     let a, n
  //     if (Number.isInteger(x, y)) {
  //         a = (x + y) / 2
  //         console.log('Среднее арифметическое значение = ', a)
  //         n = Math.sqrt(Math.abs(x * y))
  //         console.log('Среднее геометрическое значение = ', n)
  //     }
  //     else{
  //         return;
  //     }
  // }
  // hypotenuse() {
  //     let katet1 = +prompt('Ваш первый катет: ', katet1)
  //     let katet2 = +prompt('Ваш второй катет: ', katet2)
  //     let hypo, sq
  //     hypo = Math.sqrt((katet1 ** 2) + (katet2 ** 2))
  //     sq = (katet1 * katet2) / 2
  //     console.log('Гипотенуза прямоугольного треугольника равна: ', hypo)
  //     console.log('Площадь прямоугольного треугольника равна: ', sq)
  // }
  view() {
    // this.average()
    // console.log('-------------------------------------------')
    // this.hypotenuse()
    return (
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Product name={post.content} png={post.img} price={post.priceFormatted}/>
            </li>
          ))}
        </ul>
        <div class="empty"></div>
      </div>
    );
  }
}

const posts = [
  {
    content: "Samsung Galaxy Tab A 8.0 SM-T295 32Gb черный",
    shopLink:
      "https://kaspi.kz/shop/p/samsung-galaxy-tab-a-8-0-sm-t295-32gb-chernyi-1201504/?c=750000000",
    createdTime: "2019-09-03T10:30:16.931Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/samsung-galaxy-tab-a-8-0-sm-t295-32gb-chernyi-1201504/?c=750000000&tab=reviews",
    reviewsQuantity: 482,
    priceFormatted: "64 280 ₸",
    mods: "",

    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/h0f/h96/26855514931230/samsung-galaxy-tab-a-8-0-sm-t295-32gb-cernyj-1201504-1.png",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 24,
      formattedPerMonth: "4 067 ₸",
      installment: false,
    },
    id: "1201504",
    currency: "KZT",
    creditMonthlyPrice: 4067,
    brand: "Samsung",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 64280,
    discount: 0,
    unitSalePrice: 64280,
    rating: 5,
    adjustedRating: 10,
    category: ["Компьютеры", "Планшеты и аксессуары", "Планшеты"],
    categoryId: "01325",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/hd5/h87/26855514996766/samsung-galaxy-tab-a-8-0-sm-t295-32gb-cernyj-1201504-1.png",
  },
  {
    content: "TP-LINK TD-W8961N белый",
    shopLink:
      "https://kaspi.kz/shop/p/tp-link-td-w8961n-belyi-7600132/?c=750000000",
    createdTime: "2016-06-28T14:02:12.117Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/tp-link-td-w8961n-belyi-7600132/?c=750000000&tab=reviews",
    reviewsQuantity: 353,
    priceFormatted: "10 679 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/h27/hde/27020993757214/tp-link-td-w8961n-belyj-7600132-1.png",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 3,
      formattedPerMonth: "3 560 ₸",
      installment: true,
    },
    id: "7600132",
    currency: "KZT",
    creditMonthlyPrice: 3560,
    brand: "TP-LINK",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 10679,
    discount: 0,
    unitSalePrice: 10679,
    rating: 5,
    adjustedRating: 10,
    category: [
      "Компьютеры",
      "Сетевое оборудование",
      "Беспроводное оборудование",
    ],
    categoryId: "03042",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/hf0/h31/27020993953822/tp-link-td-w8961n-belyj-7600132-1.png",
  },
  {
    content: "Kingston SA400S37 240Gb",
    shopLink:
      "https://kaspi.kz/shop/p/kingston-sa400s37-240gb-6800658/?c=750000000",
    createdTime: "2017-05-25T14:04:02.216Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/kingston-sa400s37-240gb-6800658/?c=750000000&tab=reviews",
    reviewsQuantity: 370,
    priceFormatted: "16 640 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/h58/h53/9149791305758/kingston-sa400s37-240gb-6800658-1.jpg",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 6,
      formattedPerMonth: "2 774 ₸",
      installment: true,
    },
    id: "6800658",
    currency: "KZT",
    creditMonthlyPrice: 2774,
    brand: "Kingston",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 16640,
    discount: 0,
    unitSalePrice: 16640,
    rating: 5,
    adjustedRating: 10,
    category: [
      "Компьютеры",
      "Комплектующие",
      "Жесткие диски и твердотельные накопители",
    ],
    categoryId: "02647",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/h79/hfe/9149791469598/kingston-sa400s37-240gb-6800658-1.jpg",
  },
  {
    content: "Apple iPad 2020 10.2 32Gb Wi-Fi MYL92RK/A серый",
    shopLink:
      "https://kaspi.kz/shop/p/apple-ipad-2020-10-2-32gb-wi-fi-myl92rk-a-seryi-100580440/?c=750000000",
    createdTime: "2020-09-22T09:34:47.967Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/apple-ipad-2020-10-2-32gb-wi-fi-myl92rk-a-seryi-100580440/?c=750000000&tab=reviews",
    reviewsQuantity: 97,
    priceFormatted: "168 980 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/h97/h17/26984271904798/apple-ipad-2020-10-2-32gb-wi-fi-myl92rk-a-seryj-100580440-1.jpg",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 24,
      formattedPerMonth: "10 691 ₸",
      installment: false,
    },
    id: "100580440",
    currency: "KZT",
    creditMonthlyPrice: 10691,
    brand: "Apple",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 168980,
    discount: 0,
    unitSalePrice: 168980,
    rating: 5,
    adjustedRating: 10,
    category: ["Компьютеры", "Планшеты и аксессуары", "Планшеты"],
    categoryId: "01325",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/h3b/hf3/26984271937566/apple-ipad-2020-10-2-32gb-wi-fi-myl92rk-a-seryj-100580440-1.jpg",
  },
  {
    content: "Apple MacBook Air 2020 13.3 MGN63 серый",
    shopLink:
      "https://kaspi.kz/shop/p/apple-macbook-air-2020-13-3-mgn63-seryi-100797845/?c=750000000",
    createdTime: "2020-11-30T06:05:37.120Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/apple-macbook-air-2020-13-3-mgn63-seryi-100797845/?c=750000000&tab=reviews",
    reviewsQuantity: 56,
    priceFormatted: "512 500 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/hdd/hcc/30045322215454/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1.jpg",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 24,
      formattedPerMonth: "32 425 ₸",
      installment: false,
    },
    id: "100797845",
    currency: "KZT",
    creditMonthlyPrice: 32425,
    brand: "Apple",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 512500,
    discount: 0,
    unitSalePrice: 512500,
    rating: 5,
    adjustedRating: 10,
    category: ["Компьютеры", "Ноутбуки и аксессуары", "Ноутбуки"],
    categoryId: "00588",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/h06/hba/30045322117150/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1.jpg",
  },
  {
    content: "Samsung Galaxy Tab A7 10.4 SM-T505 серый",
    shopLink:
      "https://kaspi.kz/shop/p/samsung-galaxy-tab-a7-10-4-sm-t505-seryi-100750660/?c=750000000",
    createdTime: "2020-11-16T05:07:43.528Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/samsung-galaxy-tab-a7-10-4-sm-t505-seryi-100750660/?c=750000000&tab=reviews",
    reviewsQuantity: 92,
    priceFormatted: "95 019 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/ha0/h92/26977971273758/samsung-galaxy-tab-a7-10-4-sm-t505-seryj-100750660-1.png",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 24,
      formattedPerMonth: "6 012 ₸",
      installment: false,
    },
    id: "100750660",
    currency: "KZT",
    creditMonthlyPrice: 6012,
    brand: "Samsung",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 95019,
    discount: 0,
    unitSalePrice: 95019,
    rating: 5,
    adjustedRating: 10,
    category: ["Компьютеры", "Планшеты и аксессуары", "Планшеты"],
    categoryId: "01325",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/h6d/hcb/26977971306526/samsung-galaxy-tab-a7-10-4-sm-t505-seryj-100750660-1.png",
  },
  {
    content: "Logitech G102 Lightsync черный",
    shopLink:
      "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    createdTime: "2021-01-20T13:47:35.560Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000&tab=reviews",
    reviewsQuantity: 58,
    priceFormatted: "11 700 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/h8c/h67/26684269363230/logitech-g102-lightsync-cernyj-100956618-1.jpg",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 3,
      formattedPerMonth: "3 900 ₸",
      installment: true,
    },
    id: "100956618",
    currency: "KZT",
    creditMonthlyPrice: 3900,
    brand: "Logitech",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 11700,
    discount: 0,
    unitSalePrice: 11700,
    rating: 5,
    adjustedRating: 10,
    category: ["Компьютеры", "Периферия", "Мыши"],
    categoryId: "00111",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/h53/h27/26684269428766/logitech-g102-lightsync-cernyj-100956618-1.jpg",
  },
  {
    content: "Lenovo IdeaPad 3 15IGL05 81WQ000JRK серый",
    shopLink:
      "https://kaspi.kz/shop/p/lenovo-ideapad-3-15igl05-81wq000jrk-seryi-101007044/?c=750000000",
    createdTime: "2021-02-02T14:13:55.192Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/lenovo-ideapad-3-15igl05-81wq000jrk-seryi-101007044/?c=750000000&tab=reviews",
    reviewsQuantity: 31,
    priceFormatted: "149 990 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/h1b/h6a/27059164938270/lenovo-ideapad-3-15igl05-81wq000jrk-seryj-101007044-1.png",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 24,
      formattedPerMonth: "9 490 ₸",
      installment: false,
    },
    id: "101007044",
    currency: "KZT",
    creditMonthlyPrice: 9490,
    brand: "Lenovo",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 149990,
    discount: 0,
    unitSalePrice: 149990,
    rating: 4.5,
    adjustedRating: 9,
    category: ["Компьютеры", "Ноутбуки и аксессуары", "Ноутбуки"],
    categoryId: "00588",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/had/h6d/27059165003806/lenovo-ideapad-3-15igl05-81wq000jrk-seryj-101007044-1.png",
  },
  {
    content: "Altel L02Hi (2020) L02Hi белый",
    shopLink:
      "https://kaspi.kz/shop/p/altel-l02hi-2020-l02hi-belyi-100397539/?c=750000000",
    createdTime: "2020-07-15T15:58:23.194Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/altel-l02hi-2020-l02hi-belyi-100397539/?c=750000000&tab=reviews",
    reviewsQuantity: 107,
    priceFormatted: "17 490 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/h4e/he7/13701753503774/altel-l02hi-2020-l02hi-belyj-100397539-1.jpg",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 6,
      formattedPerMonth: "2 915 ₸",
      installment: true,
    },
    id: "100397539",
    currency: "KZT",
    creditMonthlyPrice: 2915,
    brand: "ALTEL",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 17490,
    discount: 0,
    unitSalePrice: 17490,
    rating: 4.5,
    adjustedRating: 9,
    category: [
      "Компьютеры",
      "Сетевое оборудование",
      "Беспроводное оборудование",
    ],
    categoryId: "03042",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/ha8/hd1/13701753569310/altel-l02hi-2020-l02hi-belyj-100397539-1.jpg",
  },
  {
    content: "Apple Pencil 2nd Generation MU8F2ZM белый",
    shopLink:
      "https://kaspi.kz/shop/p/apple-pencil-2nd-generation-mu8f2zm-belyi-60900001/?c=750000000",
    createdTime: "2019-11-07T04:51:33.785Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/apple-pencil-2nd-generation-mu8f2zm-belyi-60900001/?c=750000000&tab=reviews",
    reviewsQuantity: 68,
    priceFormatted: "66 300 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/h5d/h64/11852627738654/apple-pencil-2nd-generation-mu8f2zm-belyj-60900001-1.png",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 24,
      formattedPerMonth: "4 195 ₸",
      installment: false,
    },
    id: "60900001",
    currency: "KZT",
    creditMonthlyPrice: 4195,
    brand: "Apple",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 66300,
    discount: 0,
    unitSalePrice: 66300,
    rating: 5,
    adjustedRating: 10,
    category: ["Компьютеры", "Планшеты и аксессуары", "Стилусы"],
    categoryId: "01294",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/h22/h7a/11852627771422/apple-pencil-2nd-generation-mu8f2zm-belyj-60900001-1.png",
  },
  {
    content: "GIGABYTE GP-GSTFS31120GNTD 120Gb Black",
    shopLink:
      "https://kaspi.kz/shop/p/gigabyte-gp-gstfs31120gntd-120gb-black-6801081/?c=750000000",
    createdTime: "2018-12-06T04:58:59.631Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/gigabyte-gp-gstfs31120gntd-120gb-black-6801081/?c=750000000&tab=reviews",
    reviewsQuantity: 118,
    priceFormatted: "10 300 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/h29/h3c/9666935226398/gigabyte-gp-gstfs31120gntd-120gb-black-6801081-1.png",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 3,
      formattedPerMonth: "3 434 ₸",
      installment: true,
    },
    id: "6801081",
    currency: "KZT",
    creditMonthlyPrice: 3434,
    brand: "GIGABYTE",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 10300,
    discount: 0,
    unitSalePrice: 10300,
    rating: 5,
    adjustedRating: 10,
    category: [
      "Компьютеры",
      "Комплектующие",
      "Жесткие диски и твердотельные накопители",
    ],
    categoryId: "02647",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/hfb/hae/9666935291934/gigabyte-gp-gstfs31120gntd-120gb-black-6801081-1.png",
  },
  {
    content: "TP-LINK Archer C6 черный",
    shopLink:
      "https://kaspi.kz/shop/p/tp-link-archer-c6-chernyi-7600480/?c=750000000",
    createdTime: "2018-12-26T09:17:08.772Z",
    reviewsLink:
      "https://kaspi.kz/shop/p/tp-link-archer-c6-chernyi-7600480/?c=750000000&tab=reviews",
    reviewsQuantity: 236,
    priceFormatted: "17 250 ₸",
    mods: "",
    img: {
      src: "https://cdn-kaspi.kz/medias/sys_master/images/images/hab/h30/28273310990366/tp-link-archer-c6-cernyj-7600480-1.jpg",
      invertSrc: null,
      alt: "",
    },
    monthlyInstallment: {
      id: 6,
      formattedPerMonth: "2 875 ₸",
      installment: true,
    },
    id: "7600480",
    currency: "KZT",
    creditMonthlyPrice: 2875,
    brand: "TP-LINK",
    stock: 1,
    promo: [
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h0c/26712463638558/badge84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/hc7/26712463704094/badge65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
      {
        img: {
          large: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h20/10030824783902/badge-84x45.svg",
            width: 84,
            height: 45,
          },
          small: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          medium: {
            src: "https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hfb/h28/10016111755294/badge-65x35.svg",
            width: 65,
            height: 35,
          },
          alt: null,
        },
        text: null,
      },
    ],
    unitPrice: 17250,
    discount: 0,
    unitSalePrice: 17250,
    rating: 5,
    adjustedRating: 10,
    category: [
      "Компьютеры",
      "Сетевое оборудование",
      "Беспроводное оборудование",
    ],
    categoryId: "03042",
    thumbnailUrl:
      "https://cdn-kaspi.kzhttps://cdn-kaspi.kz/medias/sys_master/images/images/hc7/ha9/28273310892062/tp-link-archer-c6-cernyj-7600480-1.jpg",
  },
];
