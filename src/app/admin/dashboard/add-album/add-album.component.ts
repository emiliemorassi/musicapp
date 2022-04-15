import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/shared/services/album.service';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss'],
})
export class AddAlbumComponent implements OnInit {
  albumForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.albumForm = this.formBuilder.group({
      ref: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
      like: new FormControl('', [Validators.required]),
      tags: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
    this.albumForm.valueChanges.subscribe((changes: any) => {
      // console.log('changes : ', changes);
    });
  }

  ngOnInit(): void {
    // console.log(this.albumForm);
  }

  validPattern(pattern: any) {
    console.log(pattern.actualValue.match(pattern.requiredPattern));
    return pattern ? pattern.actualValue.match(pattern.requiredPattern) : false;
  }

  validInput(name: string, errorName: string) {
    return (
      (this.albumForm.get(name)?.dirty && //
        // this.albumForm.get(name)?.touched &&
        this.albumForm.get(name)?.hasError(errorName)) ||
      (this.albumForm.get(name)?.touched &&
        this.albumForm.get(name)?.hasError(errorName))
    );
  }

  submit() {
    console.log('on submit : ', this.albumForm.value);
  }
}
