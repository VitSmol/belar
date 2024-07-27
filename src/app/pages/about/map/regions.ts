const defaultColor = "#fb9100";
const sousColor = "#b11f24";
const belinsk = "#00ffbb";;
const hydroTakt = "#ab0270";
const filhydro = "#0b49de";
const techno = "#00ff00"

export const partners = {
  techno: {
    name: "ООО «ТехнокомплектТрейд»",
    general: [
      {
        name: "Артюшков Андрей Олегович",
        phones: ["+375 (232) 33-36-66", "+375 (29) 655-03-84"],
      }
    ],
    mail: "treyd_2016@mail.ru ",
    address: "Республика Беларусь, 246008, г. Гомель, ул. Шилова, д.8. "
  },
  sous: {
    name: "«ТД Союзгидравлика»",
    general: [
      {
        name: "Белецкий Алексей Васильевич",
        phones: ["+7 (4722) 21-13-59", "+7(919)225 55 80"],
      },
      {
        name: "Зарубин Александр Юрьевич",
        phones: ["+7 (4722) 56-81-36", " +7 (919) 280-55-80"],
      }
    ],
    mail: "unionhyd@mail.ru",
    address: "Российская Федерация, 308013, Белгородская обл., г. Белгород, ул. Рабочая, 14, Литер Б8, каб. 17",
    img: "assets/img/poster2.png"
  },
  belinsk: {
    name: "АО «Технический центр «Белинсксельмаш»",
    general: [{
      name: "Чураков Константин Юрьевич",
      phones: ["7 (863) 308-98-71", "+7 (863) 308-98-72", "+7(863)308-98-73", "+7 (863) 308-98-74"],
    }],
    mail: "6261918@gmail.ru",
    address: "Российская Федерация, 346886,Ростовская область, г. Батайск, ул.Производственная, д. 4Б."

  },
  hydroTakt: {
    name: "АО «ГИДРОТАКТ»",
    general: [{
      name: "Кожемякин Павел Александрович",
      phones: ["+7 (495) 500-10-30", " +7 (495) 500-10-40"],
    }],
    mail: "hydrotakt@mail.ru",
    address: "Российская Федерация, 140053, Московская область, г.Котельники,мкр-н. Силикат, д. 43."
  },
  filhydro: {
    name: "Филиал АО «ГИДРОТАКТ»",
    general: [{
      name: "Штерцер Евгений Вальдемирович",
      phones: ["+7 (3852) 33-59-76", "+7 (913) 211-80-80"]
    }],
    mail: "cpk_b@mail.ru",
    address: "Российская Федерация, 656000, г.Барнаул, пр. Космонавтов д.14/19"
  }
}

export const map_data = {
  st0: {
    id: 0,
    name: "Республика Беларусь",

    link: "",
    comment: "",
    image: "",
    color_map: techno,
    company: partners.techno,
    color_map_over: "#366CA3"
  },
  st1: {
    id: 1,
    name: "Адыгея",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st2: {
    id: 2,
    name: "Республика Алтай",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st3: {
    id: 3,
    name: "Республика Башкортостан",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st4: {
    id: 4,
    name: "Республика Бурятия",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st5: {
    id: 5,
    name: "Дагестан",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st6: {
    id: 6,
    name: "Северная Осетия",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st7: {
    id: 7,
    name: "Кабардино-Балкария",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st8: {
    id: 8,
    name: "Калмыкия",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st9: {
    id: 9,
    name: "Карачаево-Черкесия",

    link: "",
    comment: ``,
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st10: {
    id: 10,
    name: "Республика Карелия",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st11: {
    id: 11,
    name: "Республика Коми",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st12: {
    id: 12,
    name: "Марий Эл",

    link: "",
    comment: '',
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st13: {
    id: 13,
    name: "Мордовия",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st14: {
    id: 14,
    name: "Саха (Якутия)",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st15: {
    id: 15,
    name: "Ингушетия",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st16: {
    id: 16,
    name: "Татарстан",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st17: {
    id: 17,
    name: "Республика Тыва",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st18: {
    id: 18,
    name: "Удмуртия",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st19: {
    id: 19,
    name: "Республика Хакасия",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st20: {
    id: 20,
    name: "Чечня",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st21: {
    id: 21,
    name: "Чувашия",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st22: {
    id: 22,
    name: "Алтайский край",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st23: {
    id: 23,
    name: "Забайкальский край",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st24: {
    id: 24,
    name: "Камчатский край",

    link: "",
    comment: "City name city name<br>City name city name",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st25: {
    id: 25,
    name: "Красноярский край",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st26: {
    id: 26,
    name: "Краснодарский край",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st27: {
    id: 27,
    name: "Пермский край",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st28: {
    id: 28,
    name: "Приморский край",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st29: {
    id: 29,
    name: "Ставропольский край",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st30: {
    id: 30,
    name: "Хабаровский край",
    partner: partners.filhydro
    ,
    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st31: {
    id: 31,
    name: "Амурская область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st32: {
    id: 32,
    name: "Архангельская область",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st33: {
    id: 33,
    name: "Астраханская область",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st34: {
    id: 34,
    name: "Белгородская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st35: {
    id: 35,
    name: "Брянская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st36: {
    id: 36,
    name: "Владимирская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st37: {
    id: 37,
    name: "Волгоградская область",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st38: {
    id: 38,
    name: "Вологодская область",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st39: {
    id: 39,
    name: "Воронежская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st40: {
    id: 40,
    name: "Ивановская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st41: {
    id: 41,
    name: "Иркутская область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st42: {
    id: 42,
    name: "Калининградская область",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st43: {
    id: 43,
    name: "Калужская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st44: {
    id: 44,
    name: "Кемеровская область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st45: {
    id: 45,
    name: "Кировская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st46: {
    id: 46,
    name: "Костромская область",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st47: {
    id: 47,
    name: "Курганская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st48: {
    id: 48,
    name: "Курская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st49: {
    id: 49,
    name: "Ленинградская область",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st50: {
    id: 50,
    name: "Липецкая область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st51: {
    id: 51,
    name: "Магаданская область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st52: {
    id: 52,
    name: "Московская область",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st53: {
    id: 53,
    name: "Мурманская область",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st54: {
    id: 54,
    name: "Нижегородская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st55: {
    id: 55,
    name: "Новгородская область",

    link: "",
    comment: "<strong>Центральный офис  ООО «Еврохимсервис»</strong><br>Великий Новгород, ул. Державина, 15<br>+7 (8162) 66 50 88, 66 50 99<br><br><strong> Центральный склад  в Великом Новгороде.</strong>",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st56: {
    id: 56,
    name: "Новосибирская область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st57: {
    id: 57,
    name: "Омская область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st58: {
    id: 58,
    name: "Оренбургская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st59: {
    id: 59,
    name: "Орловская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st60: {
    id: 60,
    name: "Пензенская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st61: {
    id: 61,
    name: "Псковская область",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st62: {
    id: 62,
    name: "Ростовская область",

    link: "",
    comment: "",
    image: "",
    color_map: belinsk, company: partners.belinsk,
    color_map_over: "#366CA3"
  },
  st63: {
    id: 63,
    name: "Рязанская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st64: {
    id: 64,
    name: "Самарская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st65: {
    id: 65,
    name: "Саратовская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st66: {
    id: 66,
    name: "Сахалинская область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st67: {
    id: 67,
    name: "Свердловская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st68: {
    id: 68,
    name: "Смоленская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st69: {
    id: 69,
    name: "Тамбовская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st70: {
    id: 70,
    name: "Тверская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st71: {
    id: 71,
    name: "Томская область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st72: {
    id: 72,
    name: "Тульская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st73: {
    id: 73,
    name: "Тюменская область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st74: {
    id: 74,
    name: "Ульяновская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st75: {
    id: 75,
    name: "Челябинская область",

    link: "",
    comment: "",
    image: "",
    color_map: sousColor, company:  partners.sous,
    color_map_over: "#366CA3"
  },
  st76: {
    id: 76,
    name: "Ярославская область",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st77: {
    id: 77,
    name: "Москва",
    partner: "МСК",
    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st78: {
    id: 78,
    name: "Санкт-Петербург",
    partner: "СПБ",
    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st79: {
    id: 79,
    name: "Еврейская автономная область",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st80: {
    id: 80,
    name: "Ненецкий",

    link: "",
    comment: "",
    image: "",
    color_map: hydroTakt, company: partners.hydroTakt,
    color_map_over: "#366CA3"
  },
  st81: {
    id: 81,
    name: "Ханты-Мансийский автономный округ",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st82: {
    id: 82,
    name: "Чукотский автономный округ",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st83: {
    id: 83,
    name: "Ямало-Ненецкий автономный округ",

    link: "",
    comment: "",
    image: "",
    color_map: filhydro, company: partners.filhydro,
    color_map_over: "#366CA3"
  },
  st84: {
    id: 84,
    name: "Республика Крым",

    link: "",
    comment: "",
    image: "",
    color_map: defaultColor,
    company: null,
    color_map_over: "#366CA3"
  },
  st85: {
    id: 85,
    name: "Севастополь",

    link: "",
    comment: "",
    image: "",
    color_map: defaultColor,
    color_map_over: "#366CA3"
  }
};
