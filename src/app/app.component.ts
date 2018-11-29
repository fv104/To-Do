import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  currentTask = "";

    newTask(){
      const currentTask = this.currentTask.trim();

      if(currentTask !== ""){
        const task = {
        inputTarea: this.currentTask
      }
      this.tasks.push(task)
      }

    }

}


