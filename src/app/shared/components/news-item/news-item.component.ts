import { Component, Input, OnInit } from '@angular/core';
import { NewsModel } from '../../interfaces/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() news: NewsModel;

  constructor() { }

  ngOnInit() {}
}
