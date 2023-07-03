import React from 'react'
import S1 from "./Section.module.css"
import { NavLink } from 'react-router-dom'
import Img from '../../../image/JPG/bg1.jpg'

const Section1 = () => {
  return (
    <section className={S1.HomePsection} name="section1">
    <div className={S1.left}>
                    <h1>Начни зарабатывать на<span>  инвестициях и  в трейдинге.</span></h1>
        <div className="text">
                    <h5>Через 2 месяца ты сможешь торговать на биржах криптовалюты, а так же соберешь инвестиционный портфель.</h5>
        </div>
        <NavLink to="/Sign_up" target='_black' >
          <button class="btn">Записаться на урок</button>
          </NavLink>
        </div>
    <div className={S1.right}>
      <img className={S1.rightImg} src={Img} alt="" />
    </div>
  </section>
  )
}

export default Section1