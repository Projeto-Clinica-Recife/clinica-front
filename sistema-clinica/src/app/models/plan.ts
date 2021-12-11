export type TypeStatus = 'active' | 'inactive';

export interface Plan {
    id: number;
    description: string;
    period: number;
    value: number;
    status: TypeStatus;
}