import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  id:number;
  products:any;
  category:any;
  constructor(private route:ActivatedRoute, private router: Router,private http:HttpClient) { }

  ngOnInit(): void {

    let id3=this.route.snapshot.paramMap.get('id');


    this.http.get("http://localhost:3005/api/product/category/"+id3)
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;

           
    })).subscribe(posts =>{
        console.log("arry "+posts);
        this.products = posts;
     })
   
    ;

  }

  }


