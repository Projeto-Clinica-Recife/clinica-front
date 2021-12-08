export type TypeUser = 'admin' | 'doctor' | 'reception';

export interface User {
    id: number,
    name: string,
    email: string,
    cpf: string,
    type_user: TypeUser,
    first_access: boolean,
}
