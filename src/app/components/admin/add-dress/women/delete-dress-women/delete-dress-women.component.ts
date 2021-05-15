import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DressService } from 'src/app/services/dress.service';

@Component({
  selector: 'app-delete-dress-women',
  templateUrl: './delete-dress-women.component.html',
  styleUrls: ['./delete-dress-women.component.css']
})
export class DeleteDressWomenComponent implements OnInit {
id: number;
name: string;
  constructor(
    private toastr: ToastrService,
    private dressService: DressService,
  ) { }

  ngOnInit() {
    this.id = this.dressService.getId();
    this.name = this.dressService.getName();
  }
  onDeleteDress(){
this.dressService.deleteMenDress(this.id).subscribe(next =>{
  this.toastr.success('Dress deleted successfully');
}, error => {

  this.toastr.error('Dress deleting failed');
});
  
}
}
