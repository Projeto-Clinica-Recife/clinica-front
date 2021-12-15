export type TypeUser = 'admin' | 'doctor' | 'reception';

export interface User {
    id: number,
    name: string,
    email: string,
    cpf: string,
    type_user: TypeUser,
    first_access: boolean,
    user_information: Array<{
        telephone: string,
        crm?: string,
        crm_state?: string,
        user_id: number,
    }>
}
