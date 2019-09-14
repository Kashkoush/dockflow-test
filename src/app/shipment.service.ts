import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ShipmentService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA1Y2I0NmJiOWM4YjlmYjc5ZWIyYmU0ZjgxNjUzYzc3OGUzMWJhYzM2M2ZhMjQ3Y2E5Nzc3YmE5OGU1OThhZmQ3MTBlZGQzODAwZmVhZjZjIn0.eyJhdWQiOiIyNiIsImp0aSI6IjA1Y2I0NmJiOWM4YjlmYjc5ZWIyYmU0ZjgxNjUzYzc3OGUzMWJhYzM2M2ZhMjQ3Y2E5Nzc3YmE5OGU1OThhZmQ3MTBlZGQzODAwZmVhZjZjIiwiaWF0IjoxNTY4MDM1MjE5LCJuYmYiOjE1NjgwMzUyMTksImV4cCI6MTU5OTY1NzYxOSwic3ViIjoiMTM5NSIsInNjb3BlcyI6W119.KCn8z9MoAJxz4Rew0se__IXwFgEgXiNJEae5S70fhePwz3whUhl0GfYdXYJgdQMUxVZRylOJXOZzLs3kpbsP49RUuug8-i8GNlTX7m-QzKAvi1BaOJe93ckHHk0PMPCpbkPsqoAm-l2Xgx0YUGTlLlFT0DHFw4AuGsDD1sV3Ol1wFKGqBDLN3c2KH_xcoiAO7UjwFJfBAyY9aKnTFBycNrUNFPfGq_c8CkfIGXuWDNqV4c-epFRJ9HuHAtELJkSqkdyHXsIl0UAj6cU2WfM7hO4sVT4tyJYfO1_ANWNShEfBzn9TYRMywdoYOvsifTBW1fYPRkcTpQiEXma36cjveZf5ekO5v3-U6iEqx77_s-0hVSiRwasDZpNWXuqgKzkoQ6ZjfKARhkGTneI-yuButSN1PQVwSVMBCsDTl3r0mILoqAoZC_-nX8Z-tlT7zb_K6gR6PNxTzNwKhYSJVOOQG2strqR8OYVKF5QNpcp7WfuxzBvcz11XzKGeHmEXv_4nd0dtbsA2hxD20AsqSi1cuoTEYn5XDvpiLiiIki9fZV3b8K3laUIqUJRG7LPkiOc6ZKC_XY-xw9e_15O9RNuKYqlCc6TFwKAJKFDPbALJqWYgJJ5NQSXSNZBwkPmoMnqW2tpYiK8skxeGil2FrIwDd7MUWnpyI0T8IF7skmQggUE'
  });

  constructor(private http: HttpClient) { }

  // Get all the shipments
  getShipments() {
    return this.http.get('https://run.dockflow.com/api/tradeflows?scopes=%5B%22DashboardFocus%22%5D&where=%5B%5B%22active%22,%22=%22,1%5D%5D&perPage=12', { headers: this.headers })
  }

  // Get a single shipment by passing the id
  getShimpent(shipmentId: number) {
    return this.http.get('https://run.dockflow.com/api/shipments/' + shipmentId + '?scopes=%5B%22TimelineData%22%5D', { headers: this.headers })
  }
}
