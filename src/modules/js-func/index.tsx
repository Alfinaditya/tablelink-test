import { users } from "@/data/users";
import {
	findMaxAgeUser,
	findMinAgeUser,
	sortByMaxAgeUsers,
	sortByMinAgeUsers,
} from "./lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const maxAgeUser = findMaxAgeUser(users);
const minAgeUser = findMinAgeUser(users);

const JsFuncPage = () => {
	return (
		<div className="space-y-4">
			<Card>
				<CardHeader>
					<CardTitle>1. Find min age, show the name</CardTitle>
				</CardHeader>
				<CardContent>
					<h1>Name :{minAgeUser.name}</h1>
					<h1>Age :{minAgeUser.age}</h1>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>2. Find max age, show the name</CardTitle>
				</CardHeader>
				<CardContent>
					<h1>Name :{maxAgeUser.name}</h1>
					<h2>Age :{maxAgeUser.age}</h2>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>3. Sort by min age</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{sortByMinAgeUsers(users).map((user) => (
							<div key={user.id}>
								<h1>Name :{user.name}</h1>
								<h2>Age :{user.age}</h2>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>4. Sort by max age</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{sortByMaxAgeUsers(users).map((user) => (
							<div key={user.id}>
								<h1>Name :{user.name}</h1>
								<h2>Age :{user.age}</h2>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default JsFuncPage;
