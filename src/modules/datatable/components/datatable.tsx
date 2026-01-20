import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useState, useMemo } from 'react';
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
	Search,
} from 'lucide-react';
import { users } from '@/data/users';

const UsersDatatable = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const [searchTerm, setSearchTerm] = useState('');

	const filteredUsers = useMemo(() => {
		return users
			.filter((user) =>
				user.name.toLowerCase().includes(searchTerm.toLowerCase()),
			)
			.sort((a, b) => a.id - b.id);
	}, [searchTerm]);

	const totalPages = Math.ceil(filteredUsers.length / pageSize);
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const currentUsers = filteredUsers.slice(startIndex, endIndex);

	const handlePrevious = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 1));
	};

	const handleNext = () => {
		setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	};

	const handleSearch = (value: string) => {
		setSearchTerm(value);
		setCurrentPage(1);
	};

	const handlePageSizeChange = (value: string) => {
		setPageSize(Number(value));
		setCurrentPage(1);
	};

	return (
		<div className="space-y-4">
			<div className="flex flex-col sm:flex-row gap-4 justify-between">
				<div className="flex items-center gap-2">
					<span className="text-sm text-muted-foreground whitespace-nowrap">
						Rows per page
					</span>
					<Select
						value={pageSize.toString()}
						onValueChange={handlePageSizeChange}
					>
						<SelectTrigger className="w-[70px]">
							<SelectValue placeholder={pageSize} />
						</SelectTrigger>
						<SelectContent>
							{[5, 10, 20, 50].map((size) => (
								<SelectItem key={size} value={size.toString()}>
									{size}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="relative w-full sm:w-72">
					<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search user..."
						value={searchTerm}
						onChange={(e) => handleSearch(e.target.value)}
						className="pl-8"
					/>
				</div>
			</div>

			<Table className="border rounded-md">
				<TableCaption>A list of your users.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Id</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Age</TableHead>
						<TableHead>Occupation</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{currentUsers.length > 0 ? (
						currentUsers.map((user) => (
							<TableRow key={user.id}>
								<TableCell className="text-left">
									{user.id}
								</TableCell>
								<TableCell className="text-left">
									{user.name}
								</TableCell>
								<TableCell className="text-left">
									{user.age}
								</TableCell>
								<TableCell className="text-left">
									{user.occupation}
								</TableCell>
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={4} className="h-24 text-center">
								No results found.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<div className="flex items-center justify-between">
				<div className="text-sm text-muted-foreground">
					Showing {filteredUsers.length > 0 ? startIndex + 1 : 0} to{' '}
					{Math.min(endIndex, filteredUsers.length)} of{' '}
					{filteredUsers.length} entries
				</div>
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="icon"
						onClick={() => setCurrentPage(1)}
						disabled={currentPage === 1}
						title="First Page"
						className="cursor-pointer"
					>
						<ChevronsLeft className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={handlePrevious}
						disabled={currentPage === 1}
						className="cursor-pointer"
					>
						<ChevronLeft className="h-4 w-4 mr-1" />
					</Button>
					<div className="text-sm font-medium">
						Page {totalPages > 0 ? currentPage : 0} of {totalPages}
					</div>
					<Button
						variant="outline"
						className="cursor-pointer"
						size="sm"
						onClick={handleNext}
						disabled={
							currentPage === totalPages || totalPages === 0
						}
					>
						<ChevronRight className="h-4 w-4 ml-1" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						onClick={() => setCurrentPage(totalPages)}
						disabled={
							currentPage === totalPages || totalPages === 0
						}
						title="Last Page"
						className="cursor-pointer"
					>
						<ChevronsRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default UsersDatatable;
