import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/database/models/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userFormGroup: FormGroup = this.formBuilder.group({});
  user: User = new User();
  clientOperation: string = '';
  isCreateUser: boolean = true;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private routes: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.defineClientOperation();
    this.initForm();
    
    if(!this.isCreateUser) {
      this.initFormEdit()
      return; 
    } 
  }

  defineClientOperation() {
    if(this.routes.url.includes('editar')) {
      this.clientOperation = "Editar";
      this.isCreateUser = false;
      return;
    }

    this.clientOperation = "Cadastrar";
  }

  initFormEdit() {
    const id = this.route.snapshot.paramMap.get("id");
    
    this.userService.readById(id).subscribe(user => {
      
      this.userFormGroup = this.formBuilder.group({
        id: [user.id],
        name: [user.name, Validators.required],
        email: [user.email, [Validators.required, Validators.email]],
        password: [user.password, [Validators.required, Validators.minLength(8)]]
      });

      this.userFormGroup.patchValue({ user });
    });
  }

  initForm() {
    this.userFormGroup = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, Validators.minLength(8)]]
    });
  }
  
  formBindingFields() {
    const form = this.userFormGroup.value;
    
    this.user.id = form.id;
    this.user.name = form.name;
    this.user.email = form.email;
    this.user.password = form.password;
    this.user.active = true;
    this.user.group_id = 2;
  }
  
  submit() {
    this.formBindingFields();
    
    if(!this.userFormGroup.valid) {
      return;
    } 
    
    if(this.isCreateUser) {

      this.userService.create(this.user);
      this.goToUserList();

    } else {

      this.userService.update(this.user).subscribe(() => {
        console.log("Usuário editado com sucesso!");
        this.goToUserList();
      });

    }

  }

  goToUserList(): void{
    this.routes.navigate(['usuario']);
    return;
  }

}
