import { Component, NgModule } from "@angular/core";
import { TodosService } from "src/app/todos/services/todos.service";

@Component({
        selector: 'app-todos-header',
        templateUrl: './header.component.html',
})

export class HeaderComponent {
        constructor(private todoService: TodosService) {}
                
        text: string = '';
        changeText(event: Event): void {
                const target = event.target as HTMLInputElement;
                this.text = target.value;
        }

        addTodo(): void {
                this.todoService.addTodo(this.text);
                this.text = '';
        }

}