/**
 * Classe com os atributos enviados pelo servidor logo após o login do usuário se realizado com sucesso.
 */
export class ProfileModel {
    userId: number;
    userEmail: string;
    userName: string;
    token: string;

    load(obj: any) {
        this.userId = obj.userId;
        this.userEmail = obj.userEmail;
        this.userName = obj.userName;
        this.token = obj.token;
    }
}