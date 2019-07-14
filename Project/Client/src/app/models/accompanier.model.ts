import { user } from './user.model'

export interface accompanier extends user {
    accompanierid: number;
    loginName?: string;
    password?: string;
    userTypeId?: number;
    firstName?: string
    lastName?: string;
    phone?: number;
}