export class AccessToken{
    constructor(public access_token: string, public token_type: string) { }
    public getToken(): string{
        return this.access_token
    }
}
