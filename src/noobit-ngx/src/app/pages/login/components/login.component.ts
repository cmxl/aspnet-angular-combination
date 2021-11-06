import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'login.component.html'
})
export class LoginComponent { 

    private _username = new BehaviorSubject<string>('');
    username$ = this._username.asObservable();

    loginForm = new FormGroup({
        'username': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required)
    });

    login(): void {
        const value = this.loginForm.getRawValue();
        this._username.next(value.username);       
    }

}