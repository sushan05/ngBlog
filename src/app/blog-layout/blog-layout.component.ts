import { Component, OnInit } from '@angular/core';
import {Blog} from './blog';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.css']
})
export class BlogLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  blogs : Array<String> = [];
  
  newName : String = '4';
  
	addBlog(blogTitle, blogDescription)
	{
		const blog = blogTitle.value + " -- " + blogDescription.value;
		this.blogs.push(blog);
		blogTitle.value = '';
		blogDescription.value = '';

		console.log(blog);  
	}

}
