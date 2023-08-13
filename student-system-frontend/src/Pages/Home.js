import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
   <>
    <div className="container-fluid h-100">
      <div className="row h-100 ">
        <main>
          <div className='wrapper'>
            <div className='spans'>
              <span>Student~</span>
              <span id='span1'>System</span>
            </div>
            <div className='links'>
              <Link to='/new-students' className='hover'>
                  New student? Join us! 
                </Link>
              <Link to='/student-db' className='hover' id='database'>
                Existing student? View database!
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
   </>
  );
}

export default Home;
