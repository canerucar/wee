import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setVote } from '../stores/workersSlice';

const EmployeeCard = ( { worker } ) => {
	const dispatch = useDispatch();
	
	const updateVote = ( id ) => {
		dispatch( setVote( id ) )
	}
	
	return (
		<section className='employee-card'>
			<Link to={`/${worker.id}`}>
				<img src={worker.image} alt={worker.firstName}/>
				<div className={'description'}>
					<p>Name: <b>{worker.firstName} {worker.lastName}</b></p>
					<p>Role: <b>{worker.role}</b></p>
					<p>Vote: <b>{worker.vote}</b></p>
				</div>
			</Link>
			<button onClick={() => updateVote( worker.id )}>Oy ver</button>
		</section>
	)
}

export default EmployeeCard;