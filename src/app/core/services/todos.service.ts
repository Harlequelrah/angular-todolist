import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { HttpClient } from "@angular/common/http";
import { map, Observable, switchMap } from "rxjs";
import { environment } from "../../environements/environnement";

@Injectable(
    {
        providedIn:'root'
    }
)
export class TodosService{

    private apiUrl: string = environment.apiUrl;
    private  baseUrl: string = `${this.apiUrl}/todos`;

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
    deteleTodo(todoId: number):Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/delete/${todoId}`);
    }

    updateTodoStatutById(todoId: number):Observable<Todo> {
        return this.getTodo(todoId).pipe(
            map((todo) => {
                todo.est_fini = !todo.est_fini;
                return todo;
            }),
            switchMap(
                updateTodo=>
                this.http.put<Todo>(`${this.baseUrl}/update/${todoId}`,updateTodo)
            )
        );
    }

}
