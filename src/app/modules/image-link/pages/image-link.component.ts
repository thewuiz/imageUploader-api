import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
const baseUrl = environment.base_url;

@Component({
  selector: 'app-image-link',
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.css'],
})
export class ImageLinkComponent implements OnInit, AfterViewInit {
  public showSpinner = true;
  public imageUrl: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.getParamsHTTP();
  }

  getParamsHTTP() {
    this.activatedRoute.params.subscribe((params) => {
      const { image } = params;
      this.imageUrl = `${baseUrl}/src/image/${image}`;
    });
  }
}
