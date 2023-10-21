import { ReactNode, createContext, useState } from "react"
import { User } from "../interfaces/User"

type UserContextType = {
	user: User | null
	setUser: (user: User | null) => void
}

export const UserContext = createContext<UserContextType>({
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
