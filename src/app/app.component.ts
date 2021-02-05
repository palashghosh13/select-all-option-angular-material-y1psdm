import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Project } from "./project";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  projects:Project[];
  form: FormGroup;

  last_selection = null;

  @ViewChild('matSelect') matSelect = null;

  constructor() { 
    // Create sample projects
    this.projects = [
      new Project("Volvo"),
      new Project("Saab"),
      new Project("Mercedes"),
      new Project("Audi")
    ]

    // Setup form
    this.form = new FormGroup({
      project: new FormControl(this.projects)      
    });
  }

  okClicked() {
    this.last_selection = this.form.controls.project.value
    this.matSelect.close()
  }

  cancelClicked() {
    this.form.controls.project.setValue(this.last_selection)
    this.matSelect.close()
  }

  OnSelectChanged(event_data) {
    console.log(event_data)
  }

  ngOnInit() {
    this.last_selection = this.form.controls.project.value
  }
}