import { Type } from "class-transformer"
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional } from "class-validator"

export class UserUpdateDto {

	@IsOptional()
	avatar: string

	@IsOptional()
	@IsNotEmpty()
	username: string

	@IsOptional()
	@Type(() => Boolean)
	@IsBoolean()
	twoFactor: boolean

	@IsOptional()
	fullName: string

	@IsOptional()
	@IsEmail()
	email: string

	@IsOptional()
	@Type(() => Number)
	@IsNumber()
	phoneNumber: number
}
