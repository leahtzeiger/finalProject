export interface user {
    userId: number;
    loginName?: string;
    password?: string;
    userTypeId?: number;
    firstName?: string;
    lastName?: string;
}

export interface loginRequest{
    loginName: string;
    password: string;
}

export interface loginResponse{
    userId: number;
    moduleId: userModule;
}

export enum userModule{
    None = 0,
    Manager = 1,
    Accompanier = 2,
    Driver = 3
}