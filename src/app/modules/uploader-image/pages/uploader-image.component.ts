import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UploaderService } from '@uploader-service';

@Component({
  selector: 'app-uploader-image',
  templateUrl: './uploader-image.component.html',
  styleUrls: ['./uploader-image.component.css'],
})
export class UploaderImageComponent implements OnInit, AfterViewInit {
  @ViewChild('drogArea')
  drogArea!: ElementRef;

  @ViewChild('inputUploader')
  inputUploader!: ElementRef;

  @ViewChild('btnInput')
  btnInput!: ElementRef;

  private validExtensions = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
  ];
  public showSpinner = false;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private uploaderService: UploaderService
  ) {}

  ngAfterViewInit(): void {
    this.inputUploaderFile();
  }

  ngOnInit(): void {}

  inputUploaderFile() {
    this.renderer.listen(this.btnInput.nativeElement, 'click', (evt) => {
      this.inputUploader.nativeElement.click();
    });

    this.renderer.listen(this.inputUploader.nativeElement, 'change', (evt) => {
      const image = evt.srcElement.files[0];
      this.uploadImage(image);
    });
  }

  // Drag and drog events
  onDrop(event: any) {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    this.uploadImage(file);
    this.renderer.removeClass(this.drogArea.nativeElement, 'active');
  }

  onDragleave(event: any) {
    event.preventDefault();
    this.renderer.removeClass(this.drogArea.nativeElement, 'active');
  }

  onDragover(event: any) {
    event.preventDefault();
    this.renderer.addClass(this.drogArea.nativeElement, 'active');
  }

  //Upload image
  uploadImage(file: File) {
    this.showSpinner = true;
    if (this.validExtensions.includes(file.type)) {
      this.uploaderService
        .postImage(file)
        .then((img) => {
          this.showSpinner = false;
          this.router.navigate(['upload/view', img]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
