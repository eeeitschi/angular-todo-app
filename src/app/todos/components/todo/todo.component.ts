import { Component, Input, Output } from "@angular/core";
import { TodoInterface } from "../../types/todo.interface";

@Component({
        selector: 'app-todos-todo',
        templateUrl: './todo.component.html',
})

export class TodoComponent {
        @Input('todo') todoProps: TodoInterface | undefined
        @Input('isEditing') isEditingProps: boolean;
        @Output('')

        setTodoInEditMode(): void {
                console.log("Set in Edit Mode");
        }
}