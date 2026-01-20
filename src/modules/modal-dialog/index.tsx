import { useState } from 'react';
import { Modal } from './components/modal';
import { Button } from '@/components/ui/button';

const ModalDialogPage = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="p-8">
			<Button onClick={() => setOpen(true)}>Open Modal</Button>
			<Modal
				title="Modal Example"
				isOpen={open}
				onClose={() => setOpen(false)}
			>
				<p>Selamat Datang</p>
			</Modal>
		</div>
	);
};

export default ModalDialogPage;
