import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [CUSTOM_VALUE_ACCESSOR],
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  public type: string;

  @Input()
  public label: string;

  @Input()
  public name: string;

  @Input()
  public formControl: FormControl;

  @Input()
  set formControlRequirements(control: any) {
    this.formControl = control;
  };

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;

  @Input()
  public txValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  // Function to call when the rating changes.
  onChange = (value: string) => {
    this.txValue = value
  };

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {
  };

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(value: string): void {
    this.onChange(value)
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
