import { UserModel } from "../classes/user.model";

export interface LoginResponse{
    data: UserModel;
    message: string;
    tocken : string;
}
export interface IRole{
    roleId: number;
    roleName: string;
}
export interface ApiResponse{
    message: string;
    data: any;
}