import { Component, OnInit,ElementRef,ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from "@angular/forms";
import { AdminService } from '../../shared/admin.service';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/admin/_helpers/must-match.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild("fileInput") fileInput: ElementRef;
  loading: boolean = false;
  valid: boolean = false;
  message: string = "";
  Image: File;

  signupForm: FormGroup;

    submitted = false;
  constructor(
    public fb: FormBuilder,
    public authService: AdminService,
    public router: Router,
    private formBuilder: FormBuilder
  )

  {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      password: ['']
    })
  }


  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.result) {
        console.log(res)
        this.signupForm.reset()
        this.router.navigate(['log-in']);

      }
    })

    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}
// convenience getter for easy access to form fields
get f() { return this.signupForm.controls; }
/*
onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
}*/

onReset() {
    this.submitted = false;
    this.signupForm.reset();
}

onFileChange(event) { //Method to set the value of the file to the selected file by the user
  this.Image = event.target.files[0]; //To get the image selected by the user
  this.valid = true;
}

onSubmit(event) { //Method to send the request to the server
  var image = new FormData(); //FormData creation
  image.append('Image', this.Image); //Adding the image to the form data to be sent
  this.authService //Sending the rquest from the service function
    .sendImage(image)
    .subscribe((res: any) => {
      console.log(res);
   });

 this.loading = true;
 setTimeout(() => {
   this.loading = false;
 }, 1000);

 this.message = "Uploaded"; //Message to be viewed in App page
}

clearFile() { // Method to clear the selected file
  this.valid = false;
  this.message = "Cleared";
 this.fileInput.nativeElement.value = "";
}
}
