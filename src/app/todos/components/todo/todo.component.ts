import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TodoInterface } from "../../types/todo.interface";

@Component({
        selector: 'app-todos-todo',
        templateUrl: './todo.component.html',
})

export class TodoComponent {
        @Input('todo') todoProps: TodoInterface | undefined
        @Input('isEditing') isEditingProps: boolean;
        @Output('setEditingId') setEditingIdEvent: EventEmitter<
                string | null> = new EventEmitter();

        setTodoInEditMode(): void {
                console.log("Set in Edit Mode");
                this.setEditingIdEvent.emit(this.todoProps.id);
        }

        removeTodo(): void {
                console.log('removeTodo');
        }
}