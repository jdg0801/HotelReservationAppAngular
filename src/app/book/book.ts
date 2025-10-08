import { Component } from '@angular/core';
import { BookObject } from '../models/app.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import  { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book implements OnInit{
     
  ngOnInit(): void {
    let booksData = localStorage.getItem("books");
    this.books = booksData ? JSON.parse(booksData) : []
  }
  
  
      bookID =new Date();
     bookTitle='';
     bookAuthor='';
     books: BookObject[] = [];

     addBook(){
          let newEntry: BookObject = {
                id: Date.now(),  
                title: this.bookTitle,                                                                                                                   
                author: this.bookAuthor  
          }
          this.books.push(newEntry)
          localStorage.setItem("books",JSON.stringify(this.books))
          alert("Book Added Successfully")
     }

     deleteBook(id:number){
         this.books.splice(id,1);
          localStorage.setItem("books",JSON.stringify(this.books))
         alert("Book Deleted Successfully")
     }
}
