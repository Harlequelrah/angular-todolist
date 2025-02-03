import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";

@Injectable(
    {
        providedIn:'root'
    }
)
export class TodosService{
private todos = [
    new Todo(
        1,
        "Learning Angular",
        "I am now learning angular",
        true,
        new Date(),
        new Date(),
    ),
    new Todo(
        2,
        "Strike The blood",
        "Finir l'animé Strike The blood",
        false,
        new Date(),
        new Date()
    ),
    new Todo(
        3,
        "Continue TOEIC",
        "End my TOEIC courses in Global Exam",
        true,
        new Date()
    ),
    new Todo(
        4,
        "Learning TypeScript",
        "I am now learning angular",
        false,
        new Date(),
        new Date(),
    ),
    new Todo(
        5,
        "Bleach",
        "Finir l'animé Bleach",
        true,
        new Date(),
        new Date()
    ),
    new Todo(
        6,
        "Apprendre Spring boot",
        "End my TOEIC courses in Global Exam",
        false,
        new Date()
    )


]
    getTodos(): Todo[] {
    return [...this.todos]
    }
    getTodo(id:number): Todo{
        const todo = this.todos.find(todo => todo.id == id);
        if (!todo) {
            throw new Error("Todo Not Found")
        }
        return todo;

    }
    addTodo(formValue:{titre:string,description:string}): void
    {
        const todo: Todo = new Todo(
            this.todos[this.todos.length - 1].id + 1,
            formValue.titre,
            formValue.description,
            false,
            new Date(),
            new Date(),
        );
        this.todos.push(todo);
    }

}
