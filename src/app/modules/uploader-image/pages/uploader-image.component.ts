import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { UploaderService } from '@uploader-service';

@Component({
  selector: 'app-uploader-image',
  templateUrl: './uploader-image.component.html',
  styleUrls: ['./uploader-image.component.css'],
})
export class UploaderImageComponent implements OnInit, AfterViewInit {
  @ViewChild('drogArea')
  drogArea!: ElementRef;
  private validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

  constructor(
    private renderer: Renderer2,
    private uploaderService: UploaderService
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  // Drag and drog events
  onDrop(event: any) {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    this.processFile(file);
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
  processFile(file: File) {
    if (this.validExtensions.includes(file.type)) {
      this.uploaderService
        .postImage(file)
        .then((img) => {
          console.log(img);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
