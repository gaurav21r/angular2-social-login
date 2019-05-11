import { Observable } from "rxjs";
export interface IProvider {
    clientId: string;
    apiVersion?: string;
}
export interface IProviders {
    [provider: string]: IProvider;
}
export declare class AuthService {
    gauth: any;
    login(provider: string): Observable<Object>;
    logout(): Observable<boolean>;
    private _fetchGoogleUserDetails();
}
