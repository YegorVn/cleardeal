import person1 from "./assets/images/slider/person1.png";
import person2 from "./assets/images/slider/person2.png";
import person3 from "./assets/images/slider/person3.png";
import person4 from "./assets/images/slider/person4.png";
import phone from "./assets/images/tickets/phone.png";
import girl from "./assets/images/tickets/girl.svg";
import shield from "./assets/images/tickets/shield.svg";
import cloud from "./assets/images/tickets/cloud.png";
import { Underline } from "./components1/pieces";
import bannerStroke from "./assets/images/banner/bannerStroke.svg";

export const ticketsContent = [
  {
    title: (
      <>
        Один чат для связи —<br className=""></br> прямо в вашем
        <br className=""></br> телефоне
      </>
    ),
    text: (
      <>
        Колл-центр ответит на<br className="d-none d-lg-block"></br> вопросы,
        менеджер по
        <br className="d-none d-lg-block"></br> продажам будет держать
        <br className="d-none d-lg-block"></br>в курсе сделки, юристы
        <br className="d-none d-lg-block"></br> скажут, какие документы
        <br className="d-none d-lg-block"></br>
        потребуются.
      </>
    ),
    img: phone,
    smallScreenImg:phone
  },
  {
    title: (
      <>
        Безопасная<br className="d-none d-lg-block"></br> сделка
      </>
    ),
    text: (
      <>
        Наша ответственность<br className="d-none d-lg-block"></br>{" "}
        застрахована.
        <br className="d-none d-lg-block"></br> С нами вы в полной безопасности.
      </>
    ),
    img: shield,
    smallScreenImg:shield
  },
  {
    title: (
      <>
        Вы всегда можете<br className="d-none d-lg-block"></br> передумать
      </>
    ),
    text: (
      <>
        У нас нет штрафов<br className="d-none d-lg-block"></br> за отказ от
        услуг.
        <br className="d-none d-lg-block"></br>
        Вы можете<br className=""></br> одновременно
        <br className="d-none d-lg-block"></br>
        продавать квартиру<br className="d-none d-lg-block"></br> с нами или
        сами.
      </>
    ),
    img: cloud,
  },
  {
    title: (
      <>
        Бесплатная<br className="d-none d-lg-block"></br> консультация
      </>
    ),
    text: (
      <>
        Разберёмся в ситуации,<br className="d-none d-lg-block"></br> предложим
        варианты
        <br className="d-none d-lg-block"></br> действий, чтобы вы
        <br className="d-none d-lg-block"></br>
        спокойно приняли<br className=""></br> взвешенное решение.
        <br className="d-none d-lg-block"></br> Бесплатно.
      </>
    ),
    img: girl,
    smallScreenImg:girl
  },
];

export const bannerContent = {
  title: (
    <>
      Поможем продать<br className="d-block d-lg-none"></br> или купить
      квартиру.<br className="d-block d-lg-none"></br>
      <br className="d-lg-block d-none"></br>
      Комиссия —<br className="d-block d-lg-none"></br>фиксированная.
    </>
  ),
  smallTitle: (
    <>
      Поможем продать<br></br> или купить квартиру
    </>
  ),
  highlight: <>Комиссия — фиксированная</>,
  annotation: (
    <>
      Помогаем выгодно продать, квартиру<br className="d-block d-lg-none"></br>{" "}
      и одобрить ипотеку{" "}
      <Underline img={bannerStroke} style={{left: '10%'}}>на ясных условиях:&nbsp;</Underline>
      <br className="d-block d-lg-none"></br>
      вы сразу
      <br className="d-lg-block d-none"></br>
      видите цену и что в неё входит.
    </>
  ),
};

export const dialogContent = [
  {
    val: "left",
    text: (
      <>
        Пытаюсь продать квартиру,<br className="d-block d-lg-none"></br> чтобы
        купить новую. Всё<br className="d-block d-lg-none"></br> кажется таким
        <br className="d-lg-block d-none"></br>
        запутанным,<br className="d-block d-lg-none"></br> боюсь что-то упустить
        и<br className="d-block d-lg-none"></br> потерять деньги. Агенты берут
        <br className="d-block d-lg-none"></br>
        <br className="d-lg-block d-none"></br>
        большие проценты, но говорят,<br className="d-block d-lg-none"></br> что
        это не окончательная цена,<br className="d-block d-lg-none"></br> могут
        <br className="d-lg-block d-none"></br> быть дополнительные
        <br className="d-block d-lg-none"></br> расходы.
      </>
    ),
  },
  {
    val: "right",
    text: (
      <>
        Очень вас понимаем! Наша<br className="d-block d-lg-none"></br> главная
        задача — дать вам<br className="d-block d-lg-none"></br> ясность
        <br className="d-lg-block d-none"></br> и превратить сделку
        <br className="d-block d-lg-none"></br> с недвижимостью в понятный
        <br className="d-block d-lg-none"></br> процесс,
        <br className="d-lg-block d-none"></br> где вы заранее знаете
        <br className="d-block d-lg-none"></br> цену, каждый следующий шаг
        <br className="d-block d-lg-none"></br> и решаете
        <br className="d-lg-block d-none"></br> свой вопрос
        <br className="d-block d-lg-none"></br> без риска.
      </>
    ),
  },
];

export const getServiceContent = [
  {
    header: <>Оставьте заявку</>,
    annotation: (
      <>
        Свяжемся с вами в течение<br></br> 5 минут и бесплатно<br></br>
        проконсультируем.
      </>
    ),
    val: "left",
  },
  {
    header: (
      <>
        Обсудим план<br></br> действий
      </>
    ),
    annotation: (
      <>
        Уточним вашу ситуацию,<br className="d-block d-lg-none"></br>
        <br className="d-lg-block d-none"></br> предложим решение и порядок
        <br className="d-block d-lg-none"></br>
        <br className="d-lg-block d-none"></br> действий. Согласуем условия
        <br className="d-block d-lg-none"></br>
        <br className="d-lg-block d-none"></br>и подпишем договор онлайн.
      </>
    ),
    val: "right",
  },
  {
    header: <>Начнём работу</>,
    annotation: (
      <>
        И доведём её до конца:<br className="d-lg-block d-none"></br> продадим
        <br className="d-block d-lg-none"></br>
        вашу квартиру,<br className="d-lg-block d-none"></br> проведём сделку по
        <br className="d-block d-lg-none"></br>
        покупке<br className="d-lg-block d-none"></br> или оформим ипотеку.
      </>
    ),
    val: "left",
  },
];

export const disclosureContent = [
  {
    header: (
      <>
        Почему у вас дешевле,<br className="d-block d-lg-none"></br> чем у
        других?
      </>
    ),
    text: (
      <>
        Потому что мы всё продумали. Разобрали
        <br className="d-block d-lg-none"></br> каждый этап сделки и нашли
        лишние расходы,<br className="d-block d-lg-none"></br> которые есть в
        стандартных агентствах<br className="d-block d-lg-none"></br>{" "}
        недвижимости. Сократили их до минимума,
        <br className="d-block d-lg-none"></br> а некоторые и вовсе убрали.
        Например,<br className="d-block d-lg-none"></br> отказались от аренды и
        содержания больших<br className="d-block d-lg-none"></br> и дорогих
        офисов, автоматизировали многие<br className="d-block d-lg-none"></br>
        процессы и сделали прозрачной систему
        <br className="d-block d-lg-none"></br> оплаты: вся команда работает на
        зарплату,<br className="d-block d-lg-none"></br> а не за процент от
        сделки.
      </>
    ),
  },
  {
    header: (
      <>
        С какой недвижимостью<br className="d-block d-lg-none"></br> вы
        работаете?
      </>
    ),
    text: (
      <>
        Мы работаем только с жилой недвижимостью и апартаментами. Не работаем с
        долями в квартире, домами, земельными участками и коммерческими
        помещениями.
      </>
    ),
    val: "",
  },
  {
    header: (
      <>
        Почему вы не<br className="d-block d-lg-none"></br> работете с подбором
        <br></br> и арендой<br className="d-block d-lg-none"></br> недвижимости?
        {/* Почему ипотечные брокеры не берут деньги
        <br className="d-none d-xl-block"></br> за одобрение ипотеки, а вы
        берёте? */}
      </>
    ),
    text: (
      <>
        Мы выбрали те услуги, в которых имеем опыт и можем помочь вам благодаря
        своей экспертности. Чаще всего квартиру для аренды или покупки люди
        выбирают сами. А помощь профессионалов нужна на этапе подготовки сделки
        по покупке. Поэтому мы можем провести юридическое сопровождение, если вы
        уже выбрали квартиру, которую хотите купить.
      </>
    ),
    val: "",
  },
  {
    header: (
      <>
        Вы присутствуете<br className="d-block d-lg-none"></br> на сделках?
      </>
    ),
    text: (
      <>
        Мы не только присутствуем на самой сделке, но и сопровождаем вас на
        каждом этапе: общаемся со всеми сторонами, запрашиваем данные у банков и
        госорганов. Сами выясняем все вопросы по квартире, готовим полный пакет
        документов, присутствуем на регистрации сделки и контролируем расчёты
        между сторонами.
      </>
    ),
    val: "",
  },
  {
    header: (
      <>
        Почему ипотечные<br className="d-block d-lg-none"></br> брокеры не берут
        <br className="d-block d-lg-none"></br> деньги
        <br className="d-none d-lg-block"></br> за одобрение
        <br className="d-block d-lg-none"></br> ипотеки, а вы берёте?
      </>
    ),
    text: (
      <>
        Ипотечный брокер не работает бесплатно. В его интересах подобрать для
        банк, который заплатит ему денежное вознаграждение за выдачу ипотеки для
        вас. Банк же закладывает это вознаграждение в вашу процентную ставку. Мы
        работаем в ваших интересах, а не в интересах банков. Поэтому берём
        фиксированную плату за услугу и подбираем самые выгодные условия по
        ипотеке.
      </>
    ),
    val: "",
  },
];

export const kek1 = () => {
  return (
    <>
      <br className="d-block d-lg-none"></br>
      <br className="d-none d-lg-block"></br>
    </>
  );
};

export const hwwContent = [
  {
    header: (
      <>
        Общаемся с вами на равных<br className="d-block d-lg-none"></br>
        <br className="d-none d-lg-block"></br> и объясняем сложные вещи
        <br className="d-block d-lg-none"></br>
        <br className="d-none d-lg-block"></br>
        простым языком.
      </>
    ),
    annotation: (
      <>
        Консультируем вас столько,<br className="d-block d-lg-none"></br>{" "}
        сколько нужно,
        <br className="d-none d-lg-block"></br> чтобы вы приняли
        <br className="d-block d-lg-none"></br> взвешенное решение.
        <br className="d-block d-lg-none"></br>
        <br className="d-none d-lg-block"></br> Присылаем полезные материалы{" "}
        <br className="d-block d-lg-none"></br> и подробно
        <br className="d-none d-lg-block"></br> отвечаем на вопросы.{" "}
        <br className="d-block d-lg-none"></br>
        Сопровождаем вас на<br className="d-none d-lg-block"></br> всех этапах{" "}
        <br className="d-block d-lg-none"></br> и остаёмся на связи даже после{" "}
        <br className="d-block d-lg-none"></br>
        <br className="d-none d-lg-block"></br> сделки.
      </>
    ),
    val: "communicate",
  },
  {
    header: (
      <>
        Прозрачные условия<br></br> работы и оплаты услуг —<br></br> никакого
        мелкого шрифта<br></br> в договоре.
      </>
    ),
    annotation: (
      <>
        Работаем в белую и дорожим<br className="d-block d-lg-none"></br>{" "}
        репутацией.<br className="d-none d-lg-block"></br> Вы заранее видите
        <br className="d-block d-lg-none"></br>
        стоимость услуг, знаете<br className="d-none d-lg-block"></br> обо всех
        <br className="d-block d-lg-none"></br>
        этапах и о том, сколько времени<br className="d-none d-lg-block"></br>{" "}
        займёт<br className="d-block d-lg-none"></br> каждый шаг.
      </>
    ),
    val: "communicate1",
  },
  {
    header: (
      <>
        Вы платите только за нашу<br></br> работу, а не за бренд,<br></br>{" "}
        дорогой офис или высокую<br></br> комиссию агента.
      </>
    ),
    annotation: (
      <>
        Цена за услугу не зависит от<br></br> стоимости квартиры и сложности
        <br></br> сделки. Она не изменится потому,<br></br> что вы приехали на
        Мерседесе или<br></br> потому, что так захотел риелтор.
      </>
    ),
    val: "communicate2",
  },
];

export const hwwChat = [
  {
    text: (
      <>
        Здравствуйте, хочу продать квартиру,<br></br> но владею ею менее 5 лет.
        Это можно<br></br> сделать?
      </>
    ),
    val: "left",
  },
  {
    text: (
      <>
        Добрый день! Это единственное ваше<br></br> жильё? Сколько лет уже в
        собственности?
      </>
    ),
    val: "right",
  },
  {
    text: <>Да, единственное, купил три года назад.</>,
    val: "left",
  },
];

export const sliderContent = [
  {
    header: (
      <>
        Узаконили<br className="d-lg-none d-block"></br> перепланировку и{" "}
        <br className="d-none d-lg-block"></br> продали
        <br className="d-lg-none d-block"></br> квартиру на 300 000 ₽{" "}
        <br className="d-none d-lg-block"></br> выше,
        <br className="d-lg-none d-block"></br> чем планировали.
      </>
    ),
    annotation: (
      <>
        Чтобы квартиру можно было купить<br className="d-block d-lg-none"></br>
        <br className="d-none d-lg-block"></br> в ипотеку, разобрались
        <br className="d-block d-lg-none"></br> с неузаконенной{" "}
        <br className="d-none d-lg-block"></br>
        перепланировкой.<br className="d-block d-lg-none"></br> Это же позволило
        <br className="d-none d-lg-block"></br> продать квартиру
        <br className="d-block d-lg-none"></br> дороже. Клиенты
        <br className="d-none d-lg-block"></br>
        оценили<br className="d-block d-lg-none"></br> современный уровень
        сделки:
        <br className="d-none d-lg-block"></br> без
        <br className="d-block d-lg-none"></br> МФЦ и очередей — с электронной
        <br className="d-block d-lg-none"></br>
        <br className="d-none d-lg-block"></br>
        регистрацией и поступлением денег<br className="d-block d-lg-none"></br>
        <br className="d-none d-lg-block"></br> на следующий день.
      </>
    ),
    val: "communicate",
  },
  {
    header: (
      <>
        Одобрили ипотеку без справки<br></br> от работодателя за 2 минуты.
      </>
    ),
    annotation: (
      <>
        Несмотря на то, что Надежда находится
        <br className="d-block d-lg-none"></br>
        <br className="d-none d-lg-block"></br> в отпуске по уходу за ребёнком,
        <br className="d-none d-lg-block"></br> а работодатель мужа отказался
        <br className="d-none d-lg-block"></br> подтвердить доход справками,
        <br className="d-none d-lg-block"></br> мы смогли быстро одобрить ипотек
        <br className="d-none d-lg-block"></br> на вторичное жильё под 9,5%.
      </>
    ),
    val: "communicate1",
  },
  {
    header: (
      <>
        Продали наследственную<br></br> квартиру без спешки по<br></br>{" "}
        максимальной цене.
      </>
    ),
    annotation: (
      <>
        Анастасия получила в наследство<br className="d-none d-lg-block"></br>{" "}
        квартиру в советском доме <br className="d-none d-lg-block"></br> в
        центре города.<br className="d-none d-lg-block"></br> Старый ремонт
        отпугивал
        <br className="d-none d-lg-block"></br> некоторых покупателей, но мы не
        <br className="d-none d-lg-block"></br> торопились и через 4 месяца
        продали
        <br className="d-none d-lg-block"></br> квартиру за 7 800 000 ₽.
      </>
    ),
    val: "communicate2",
  },
  {
    header: (
      <>
        Рефинансировали ипотеку<br></br> Оксаны и сэкономили ей<br></br> 1 000
        000 ₽.
      </>
    ),
    annotation: (
      <>
        Смогли учесть неофициальную<br className="d-lg-none d-block"></br>
        <br className="d-none d-lg-block"></br> подработку при анализе
        <br className="d-lg-none d-block"></br>
        <br className="d-none d-lg-block"></br> платёжеспособности
        <br className="d-lg-none d-block"></br> и
        <br className="d-none d-lg-block"></br>
        рефинансировали ипотеку<br className="d-lg-none d-block"></br> на
        вторичку:<br className="d-none d-lg-block"></br> сократили срок
        <br className="d-lg-none d-block"></br> выплаты, снизили
        <br className="d-none d-lg-block"></br>
        ставку<br className="d-lg-none d-block"></br> и переплату, сохранили
        <br className="d-lg-none d-block"></br>
        <br className="d-none d-lg-block"></br> комфортный ежемесячный платёж.
      </>
    ),
    val: "communicate3",
  },
];

export const sliderCards = [
  {
    name: "Любовь",
    region: "Кемерово",
    text: (
      <>
        Продали мою квартиру<br className="d-block d-lg-none"></br> быстро,{" "}
        грамотно, да
        <br className="d-lg-block d-none"></br> ещё
        <br className="d-block d-lg-none"></br> и покупателю помогли
        <br className="d-block d-lg-none"></br> оформить ипотеку.
        <br className="d-block d-lg-none"></br>
        <br className="d-lg-block d-none"></br> Лёгкий, понятный и
        <br className="d-block d-lg-none"></br> приятный процесс.
        <br className="d-block d-lg-none"></br> Если
        <br className="d-lg-block d-none"></br> буду ещё связываться с
        <br className="d-block d-lg-none"></br> недвижимостью, то
        <br className="d-lg-block d-none"></br> только
        <br className="d-block d-lg-none"></br> в сопровождении
        <br className="d-block d-lg-none"></br> Ясной сделки.
      </>
    ),
    avatar: person1,
  },
  {
    name: "Надежда",
    region: "Москва",
    text: (
      <>
        Ипотека для нас тёмный лес,<br className="d-block d-lg-none"></br>{" "}
        думали
        <br className="d-lg-block d-none"></br> не разберёмся.
        <br className="d-block d-lg-none"></br> В итоге быстро и понятно
        <br className="d-block d-lg-none"></br>
        <br className="d-lg-block d-none"></br> получили ответы на все
        <br className="d-block d-lg-none"></br>
        вопросы и<br className="d-lg-block d-none"></br> одобренную ставку!
      </>
    ),
    avatar: person2,
  },
  {
    name: "Анастасия",
    region: "Кемерово",
    text: (
      <>
        С Ясной сделкой продали<br className="d-block d-lg-none"></br> квартиру
        чётко,
        <br className="d-lg-block d-none"></br> быстро
        <br className="d-block d-lg-none"></br> и по хорошей цене.
        <br className="d-block d-lg-none"></br>
        Спокойствие<br className="d-lg-block d-none"></br> команды
        <br className="d-block d-lg-none"></br> передавалось и нам, мы
        <br className="d-block d-lg-none"></br> точно
        <br className="d-lg-block d-none"></br> знали, что проблем
        <br className="d-block d-lg-none"></br> не будет. Всем
        <br className="d-lg-block d-none"></br>
        рекомендую!
      </>
    ),
    avatar: person3,
  },
  {
    name: "Оксана",
    region: "Мытищи",
    text: (
      <>
        Я человек старой закалки<br className="d-block d-lg-none"></br> и была
        против
        <br className="d-lg-block d-none"></br> всяких сделок
        <br className="d-block d-lg-none"></br> онлайн. Благодаря агентству
        <br className="d-block d-lg-none"></br>
        <br className="d-lg-block d-none"></br> рефинансирование нашей
        <br className="d-block d-lg-none"></br>
        ипотеки прошло
        <br className="d-lg-block d-none"></br> просто супер!
      </>
    ),
    avatar: person4,
  },
];

export const servicesPricesCards = [
  {
    header: (
      <>
        Продажа<br></br> квартиры
      </>
    ),
    text: (
      <>
        Найдём покупателя<br></br> и проведём безопасную<br></br> сделку.
      </>
    ),
    moscow: "49 900 ₽",
    kemerovo: "49 900 ₽",
    annotation: (
      <>
        Займёмся рекламой квартиры и<br></br> договоримся о просмотрах. Когда
        <br></br> покупатель будет найден,<br></br> проверим его надёжность,
        <br></br> подготовим документы для<br></br> сделки, сопроводим вас на
        <br></br> сделке и проведём безопасный<br></br> расчёт. Обременения —
        <br></br> не проблема.
      </>
    ),
  },
  {
    header: (
      <>
        Юридическое<br></br> сопровождение
      </>
    ),
    text: (
      <>
        Изучим вашу кредитную<br></br> историю, подберём выгодную<br></br>{" "}
        ставку.
      </>
    ),
    moscow: "19 900 ₽",
    kemerovo: "49 900 ₽",
    annotation: (
      <>
        Если вы нашли покупателя или<br></br> квартиру, которую хотите купить,
        <br></br> мы сами свяжемся со всеми<br></br> сторонами и сопроводим вас
        <br></br> на каждом этапе сделки. Юристы<br></br> согласуют условия,
        подготовят<br></br> документы и проведут сделку,<br></br> а при покупке
        проверят объект<br></br> и его владельца.
      </>
    ),
  },

  {
    header: (
      <>
        Одобрение<br></br> ипотеки
      </>
    ),
    text: (
      <>
        Подберём выгодную ставку<br></br> и получим одобрение.
      </>
    ),
    moscow: "19 900 ₽",
    kemerovo: "49 900 ₽",
    annotation: (
      <>
        Изучим вашу кредитную<br></br> историю, подберём ипотечные<br></br>{" "}
        программы, заполним заявку<br></br> и направим в подходящие<br></br>{" "}
        банки. Получим одобрение<br></br> за 1-3 дня и выберем лучшее<br></br>{" "}
        предложение от банков.
      </>
    ),
  },
];
