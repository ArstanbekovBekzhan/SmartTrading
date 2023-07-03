import React from 'react'
import PassesS from "./PassesCourse.module.css";

const PassesCourse = () => {
  return (
    <section className={PassesS.Passes} name="courses">
        <h1 className='textC'><span>Как проходит курс?</span></h1>
        <div className={PassesS.boxs}>
        <div className={PassesS.box}>
            <h2 className='number'>1</h2>
            <h3>Шесть недель интенсивного обучения</h3>
            <div className="text">
                <p>Живые уроки на платформе. Уроки проходят в режиме реального времени , где вы сразу же получаете ответы на свои вопросы.</p>
            </div>
        </div>
        <div className={PassesS.box}>
            <h2 className='number'>2</h2>
            <h3>Проверка Д/З и обратная связь</h3>
            <div className="text">
                <p>Личная поддержка каждого ученика</p>
            </div>
        </div>
        <div className={PassesS.box}>
            <h2 className='number'>3</h2>
            <h3>Доступ к урокам у вас остается навсегда и месяц поддержки после окончание курсов</h3>
            <div className="text">
                <p>Итого: 2.5 месяц и интенсивного обучения</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default PassesCourse 