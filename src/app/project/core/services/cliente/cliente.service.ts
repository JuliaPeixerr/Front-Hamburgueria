import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { LoginClienteCommand } from "../../domain/command/cliente";
import { Cliente } from "../../domain/models";
import { APIURL } from "../connection-constant";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    constructor(private http: HttpClient) { }

    login(command: LoginClienteCommand): Observable<Cliente> {
        var url = "/Cliente/login";
        return this.http.post<Cliente>(APIURL + url, command);
    }
}