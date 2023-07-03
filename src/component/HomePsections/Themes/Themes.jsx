import React from 'react'
import TheS from "./Themes.module.css"
const data = [
    {
      id: 1,
      content: [
        "Введение",
        "Ознакомление с биржей ",
        "Ордера ( лимитный , рыночный ) Стоп , тейк , ликвидация ",
        "Кросс , изолированная ",
        "Фьючи , спот , PNL",
        " Работа с Tradingview  Разбор инструментов ",
        "Ввод и вывод средств",
        "Привязка карты к Р2Р",
        "Переводы между кошельками и биржей",
      ]
    },
    {
      id: 2,
      content: [
        "Фундаментальный анализ +Структура рынка",
        "Восходящий , нисходящий , боковик",
        "Трех и пяти свечные формации ",
        "Определение смены тренда",
        "BOS , CONFIRM",
        "SUB+MINER +SMS "
      ]
    },
    {
      id: 3,
      content: [
        "Ликвидность ",
        "работа с ликвидностью старших и младших таймфреймов ",
        " Eqh , eql ",
        "Bsl , ssl"
      ]
    },
    {
      id: 4,
      content: [
        "Блоки",
        "Ордер ",
        "Брейкер ",
        "Имба ",
        "DEMAND ",
        "SYYPLAY ",
        "BTS,STB "
      ]
    },
    {
      id: 5,
      content: [
        "Работа с уровнями Фибоначчи ",
        "OTE",
      ]
    },
    {
      id: 6,
      content: [
        "Как работать в боковике ?",
        "Внутренняя и внешняя ликвидность внутри боковика",
        "Работа от дивиации к дивиации",
        "Вступительный урок по Вайкоффу",
        "Аккумульяция",
        "Дистрибюция"
      ]
    },
    {
      id: 7,
      content:[
        "Риск мани-менеджмент",
        "Объемы на сделку",
        "Демонстрация на бирже",
        "TTS",
        "TDP",
        "Квазимодо",
        "Индексы",
        "Геп",
        "Сме"
      ]
    },
    {
      id: 8,
      content:[
        "Психология трейдера",
        "Дневник трейдера",
        "Работа с новостьями"
      ]
    }
  ];
  
const Themes = () => {
    return (
        <section className={TheS.Themes} name="Themes">
            <h1>Темы уроков</h1>
            <div className={TheS.ThemesC}>
            {data.map((item) => (
        <ul className={TheS.blocks}>
            <li key={item.number}>
              <h3>Модуль {item.id}</h3>
              <ol className={TheS.ul}>
                {item.content.map((contentItem) => (
                  <li key={contentItem}>{contentItem}</li>
                ))} 
              </ol>
            </li>
        </ul>

          ))}
            </div>
        </section>
      );
}

export default Themes