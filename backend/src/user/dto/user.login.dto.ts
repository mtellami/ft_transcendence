import { IsString } from "class-validator"

export class UserLoginDto {
	@IsString()
	username: string

	@IsString()
	password: string
}
