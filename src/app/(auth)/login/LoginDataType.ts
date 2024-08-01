export class LoginFormDTO {

    phone: string;
    role: USER_ROLE;
    code: string;
    password: string;

    constructor(phone: string, role: USER_ROLE, code: string, password: string) {
        this.phone = phone;
        this.role = role;
        this.code = code;
        this.password = password;
    }

}


export enum USER_ROLE {
    ROLE_CLIENT,
    ROLE_ENTERPRISE,
    ROLE_ADMIN
}

export function transNumIntoRole(num: number): USER_ROLE {
    switch (num) {
        case 0:
            return USER_ROLE.ROLE_CLIENT;
        case 1:
            return USER_ROLE.ROLE_ENTERPRISE;
        case 2:
            return USER_ROLE.ROLE_ADMIN;
        default:
            throw new Error("Invalid role number");
    }
}

export function transRoleIntoStr(role: USER_ROLE): string {
    switch (role) {
        case USER_ROLE.ROLE_CLIENT:
            return "client";
        case USER_ROLE.ROLE_ENTERPRISE:
            return "enterprise";
        case USER_ROLE.ROLE_ADMIN:
            return "admin";
        default:
            throw new Error("Invalid role");
    }

}


