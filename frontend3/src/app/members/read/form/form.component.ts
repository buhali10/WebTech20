import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Data } from '../../../shared/data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data: Data;
  @Output() updateEvent = new EventEmitter<Data>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.form.patchValue({
      idControl: this.data?.id,
      firstNameControl: this.data?.firstname,
      lastNameControl: this.data?.lastname,
      emailControl: this.data?.email
    });
  }

  onSubmit(): void {
    const values = this.form.value;
    this.data.id = values.idControl;
    this.data.firstname = values.firstNameControl;
    this.data.lastname = values.lastNameControl;
    this.data.email = values.emailControl;
    this.updateEvent.emit(this.data);
  }

  cancel(): void {
    this.location.back();
  }
}
