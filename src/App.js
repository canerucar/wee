import { Home, Employees, EmployeesDetail } from './pages';
import { Routes, Route } from 'react-router-dom';
import Request from './services/request';
import { apiUrl } from './services/urls';

const App = () => {
	return (
		<>
			<Request url={apiUrl}/>
			<Routes>
				<Route path={'/'} element={<Home/>}>
					<Route index={true} element={<Employees/>}/>
					<Route path={':id'} element={<EmployeesDetail/>}/>
				</Route>
			</Routes>
		</>
	);
}
export default App;