import { AccessToken } from "./accessToken";

export class Token{
    constructor(private access_token: string, private refresh_token: string, private token_type: string) { }
    public getAccessToken()
    {
        return new AccessToken(
            this.access_token,
            this.token_type
        );
    }
    public getRefreshToken() {
        return new AccessToken(
            this.refresh_token,
            this.token_type
        );
    }
}
