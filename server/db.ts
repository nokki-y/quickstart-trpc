type User = {
	id: string;
	name: string;
};

class DB {
	private users: User[] = [];

	user = {
		findMany: async () => this.users,
		findById: async (id: string) => this.users.find((user) => user.id === id),
		create: async ({ name }: { name: string }) => {
			const user = { id: String(this.users.length + 1), name };
			this.users.push(user);
			return user;
		},
	};
}

export const db = new DB();
