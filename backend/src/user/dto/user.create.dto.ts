import { IsEmail, IsNotEmpty } from "class-validator"

export class UserCreateDto {

	intraId: number

	@IsNotEmpty()
	username: string

	@IsEmail()
	email: string

	avatar: string
}
