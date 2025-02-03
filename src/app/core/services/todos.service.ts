import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable(
    {
        providedIn:'root'
    }
)
export class TodosService{

    private  baseUrl: string = "http://localhost:8000/todos";

    constructor(private http: HttpClient) { }



    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.baseUrl}/read-all`);
    }
    getTodo(id: number): Observable<Todo>{
        return this.http.get<Todo>(`${this.baseUrl}/read-one/${id}`);
    }
    addTodo(formValue:{titre:string,description:string}): Observable<Todo>
    {
        return this.http.post<Todo>(`${this.baseUrl}/create`,formValue);
    }

}
