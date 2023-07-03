import React from 'react'
import ResultsSwipers from '../../Swipers/ResultsSwipers'
import ResS from './Results.module.css'
const Results = () => {
  return (
    <section className={ResS.Results} name="Results">
    <h1 className='textC'>РЕЗУЛЬТАТЫ НАШИХ УЧЕНИКОВ ПОСЛЕДНЕГО НАБОРА.</h1>
    <ResultsSwipers/>
    </section>
  )
}

export default Results