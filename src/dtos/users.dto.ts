import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 100)
  public username: string;

  @IsString()
  public password: string;
}
