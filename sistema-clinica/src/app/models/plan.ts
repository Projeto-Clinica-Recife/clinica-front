export type TypeStatus = 'active' | 'inactive';

export interface Plan{
    description: string;
    period: number;
    value: number;
    status: TypeStatus;
}