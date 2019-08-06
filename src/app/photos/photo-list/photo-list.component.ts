import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photos';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) {
  }
     
  ngOnInit(): void {   

    const username = this.activatedRoute.snapshot.params.username;
    this.photoService
      .listFromUser(username)
      .subscribe(photos => {
        // console.log(photos[0].description);
        this.photos = photos
      });
  }
}
