import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Printer } from '../../interfaces/printer.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() submitText = 'Submit';
  @Input() statusList: Array<String> = [];
  @Input() item: Printer = {
    id: '',
    name: '',
    status: '',
    ip: '',
    description: '',
    colour: '',
    type: ''
  }
  @Output() submitAction: EventEmitter<any> = new EventEmitter();
  @Output() cancelAction: EventEmitter<any> = new EventEmitter();
  validationMessages: Object = {
    required: 'is required field',
    invalidIP: 'Invalid IP format. Example: 10.10.0.9'
  }
  printerFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initForm();

  }

  ngOnChanges(changes: any) {

    this.initForm();
    
  }

  ngDoCheck() {

    this.setItemValues();

  }

  private initForm(): void {

    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    this.printerFormGroup = this._formBuilder.group({
      itemName: [this.item.name, [Validators.required]],
      itemStatus: [this.item.status, [Validators.required]],
      itemIp: [this.item.ip, [
        Validators.required,
        Validators.pattern(ipPattern)]
      ],
      itemDescription: [this.item.description],
      itemColour: [this.item.colour, [Validators.required]],
      itemType: [this.item.type, [Validators.required]]
    }); 

  }
  
  setItemValues() {

    this.item.name = this.printerFormGroup.value.itemName;
    this.item.status = this.printerFormGroup.value.itemStatus;
    this.item.ip = this.printerFormGroup.value.itemIp;
    this.item.description = this.printerFormGroup.value.itemDescription;
    this.item.colour = this.printerFormGroup.value.itemColour;
    this.item.type = this.printerFormGroup.value.itemType;

  }

  onSubmit(event, item): void {

    this.submitAction.emit([event, item]);

  }

  onCancel(event): void {

    this.cancelAction.emit(event);
  }

}
