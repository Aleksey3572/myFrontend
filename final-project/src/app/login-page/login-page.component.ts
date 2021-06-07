import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../service/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('login') login;
  @ViewChild('password') password;

  constructor(private router: Router, private dataService: DataService) { }
  public showPassword: boolean = false;
  public flag: boolean = false;
  public iconImage: string = 'assets/eye_close.svg';
  public numberInput: number = 0;
  public form: FormGroup;
  public setFocus(numberInput: number): void{
    if (numberInput === 3) {
      this.flag = true;
    } else {
      this.numberInput = numberInput;
    }
  }
  public deleteFocus(focus: number): void{
    if (focus === 1) {
      this.numberInput = 0;
    }
    if (focus === 2 && this.flag === false) {
      this.numberInput = 0;
    }
    if (focus === 3) {
      this.flag = false;
    }
  }
  public viewPassword(): void{
    this.numberInput = 2;
    if (this.showPassword){
      this.showPassword = false;
      this.iconImage = 'assets/eye_close.svg';
    } else {
      this.showPassword = true;
      this.iconImage = 'assets/eye_open.svg';
    }
  }
  public signIn(): void{
    this.dataService.isLoggedIn = this.dataService.isLogged(this.form.value.login, this.form.value.password);
    if (this.dataService.isLoggedIn) {
      this.dataService.buttonSelect = 1;
      this.router.navigate(['/task/visualisation/1']);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

}
