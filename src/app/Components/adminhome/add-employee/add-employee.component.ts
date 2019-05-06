import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Classes/admintab';
import { AdminService } from 'src/app/Services/admin.service';


@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit 
{
  addEmpForm: FormGroup;
  nameVal: string;
  submitted: boolean = false;
  addemp: Employee = { "mobileNo": 0, "name": "", "age": 0, "password": "", "email": "", "address": "" };
  response: Response;


  constructor(private router: Router, private as: AdminService)
  { }

  ngOnInit() 
  {
    this.submitted = false;
    this.addEmpForm = new FormGroup
      ({
        name: new FormControl("", Validators.compose([
          Validators.required,

        ])
        ),

        password: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
        ),
        cpassword: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
        ),

        mobileNo: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
        ])
        ),
        email: new FormControl("", Validators.compose([
          Validators.required,
          Validators.email
        ])
        ),
        age: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required)
      }, {
          validators: [this.confirmPass, this.ageVal]
        }
      );
  }


  onSubmit(add) 
  {
    this.submitted = true;

    if (this.addEmpForm.invalid) 
      return;
    else 
    {
      this.addemp = new Employee(add.mobileNo, add.name, add.age, add.password, add.email, add.address)

      this.as.postEmp(this.addemp)
        .subscribe((response: Response) => {

          if (response.json()["Status"] === "true") 
          {
            this.addEmpForm.reset();
            alert("Employee added");
            
            //this.router.navigateByUrl("/userHome");
          }
          else
            alert(response.json()["Status"]);
        }
        )
    }
  }

  //  VALIDATORS ---------------------------------------------------------------------------------------------------------------------------

  get f() 
  {
    return this.addEmpForm.controls;
  }


  // mobVal: ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  // {
  //   const mobno = control.get('mobileNo');

  //     if( mobno.value < 10000000000 && mobno.value > 999999999)
  //        return  null ;
  //     else
  //     {
  //         mobno.setErrors({ 'mobVal' : true});
  //         return  ;
  //     }  
  // }

  ageVal: ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  {
    const age = control.get('age');

    if (!(age.value < 18 || age.value > 52))
      return null;
    else 
    {
      age.setErrors({ 'ageVal': true });
      return;
    }
  }


  confirmPass: ValidatorFn = (control: FormGroup): ValidationErrors | null => 
  {
    const pass = control.get('password');
    const cpass = control.get('cpassword');

    if (pass.value === cpass.value)
      return null;
    else
    {
      cpass.setErrors({ 'noMatch': true });
      return;
    }
  }



}
