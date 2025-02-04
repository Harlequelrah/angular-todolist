export class RefreshToken
{
    constructor(private refresh_token: string, private token_type: string) { }
    public getToken(): string {
        return this.refresh_token
    }
}
