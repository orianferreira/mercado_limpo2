import React from 'react'
import CourseCard from '../coursecard/CourseCard'
import './Caurses.css';
import { courses } from "../../database";
import Produto from '../../models/Produto';

const Courses = ({handleAddItemToCart }) => {
  return (
    <main>
                <section className='caurses-section'>
                  {courses.map((courses, index) => 
                  <CourseCard 
                  img={courses.url} 
                  title={courses.name} 
                  price={courses.price}
                  handleAddItemToCart={handleAddItemToCart}
                  /> )}
                  
                    
                    
                </section>
            </main>
  )
}

export default Courses