import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy{

  @Input() news;
  @Output() edit = new EventEmitter();
  @Output() details = new EventEmitter();
  @Output() destroy = new EventEmitter();

  constructor(
  ) {
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroy.emit();
  }

}
