import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  content: string = "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500";
  products: any[] = [
    {
      id: 1,
      name: 'Dell',
      status: true
    },
    {
      id: 2,
      name: 'iPhone',
      status: false
    },
    {
      id: 3,
      name: 'Samsung',
      status: false
    },
    {
      id: 4,
      name: 'Asus',
      status: true
    },
    {
      id: 11,
      name: 'Panasonic',
      status: false
    },
    
  ]
  idFilter: string = '';
  nameFilter: string = '';
  statusFilter: string = '';
}
