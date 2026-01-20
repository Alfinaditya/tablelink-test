import { Card, CardContent } from '@/components/ui/card';
import UsersDatatable from './components/datatable';

const DatatablePage = () => {
	return (
		<Card>
			<CardContent>
				<UsersDatatable />
			</CardContent>
		</Card>
	);
};

export default DatatablePage;
