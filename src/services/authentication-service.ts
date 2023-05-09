import { resolve } from "dns";

export class AuthenticationService {
    static isAuthenticated: boolean = false;

    static login(username: string, password: string): Promise<boolean> {
        const isAuthenticated: boolean = (username === 'pikachu' && password === 'pikachu');

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuthenticated = isAuthenticated;
                resolve(isAuthenticated);
            }, 1000)
        })
    }
}