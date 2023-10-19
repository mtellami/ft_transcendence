import { ReactNode, createContext, useState } from "react";
import { User } from "../interfaces/User";

type Context = {
	user: User | null;
	setUser: (user: User | null) => void;
}

export const UserContext = createContext<Context>({
	user: null,
	setUser: () => {}
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<null | User>(null)

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
