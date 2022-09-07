import React from 'react';
import './ShowCards.css';
import { useEffect, useState } from 'react';
import Card from './Card'

function ShowCards() {
  const [courses, updateCourses] = useState ([]);
  const API_url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";

  function getApiCourses() {
    return new Promise((resolve, reject) => {
      fetch(API_url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data.communityCategories)
      })
    })
  }

  async function getCourses() {
    const courses = await getApiCourses();
    console.log(courses);
    updateCourses(courses);
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="Show">
      <div className="Show_container">
        {
          courses.map(e => {
            return <Card 
            name = {e.name}
            icon = {e.icon}
            background = {e.background}
            totalQuizzes = {e.totalQuizzes}
            users = {e.users}
            key = {e.id}
            />
          })
        }
      </div>
    </div>
  );
}

export default ShowCards;