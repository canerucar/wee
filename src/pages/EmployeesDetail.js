import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoArrowBack } from 'react-icons/io5';

const EmployeesDetail = () => {
	const { workers } = useSelector( state => state.workers );
	const { id } = useParams();
	const worker = workers.filter( worker => worker.id === id );
	
	return (
		<div className="employee-detail">
			<h1>Employees Detail</h1>
			{worker && worker.map( worker => (
				<div key={worker.id}>
					<Link to="/">
						<IoArrowBack/>
					</Link>
					<h1>{worker.firstName} {worker.lastName}</h1>
					<div className="employee-detail-wrapper">
						<img src={worker.image} alt={worker.firstName}/>
						<div className={'content'}>
							<p>
								<b>{worker.phone}</b>
							</p>
							<p>
								<b>{worker.email}</b>
							</p>
							<p>
								<b>{worker.role}</b>
							</p>
							<p>
								<b>{worker.vote}</b>
							</p>
							<p>
								<b>{worker.street} / {worker.state}</b>
							</p>
						</div>
					</div>
				</div>
			) )}
		</div>
	)
}

export default EmployeesDetail;