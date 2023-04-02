export class User {
    id: string;
    email: string;
    password: string;
}

export interface CreateUserDTO extends Omit<User,'id'>
{

}