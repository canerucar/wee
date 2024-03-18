import React from 'react';
import { useSelector } from 'react-redux';
import { EmployeeCard } from '../components';

const Employees = () => {
  const { workers } = useSelector( state => state.workers);
  const sortedWorkers = [...workers].sort((a, b) => b.vote - a.vote);
	
	const employees = sortedWorkers.map( worker => (
		<EmployeeCard key={worker.id} worker={worker}/>
	) )

  return (
    <main className='employees-wrapper'>
      <h1>Employees</h1>
      <div className="container">
        {employees.length ? (
          employees
        ) : (
          <p>No employees found.</p>
        )}
      </div>
    </main>
  );
}

export default Employees;