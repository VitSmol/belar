import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private mainUrl: string = `https://belar.pro/`

  constructor(
    private http: HttpClient
  ) { }
  getFromServer() {
    // this.mainUrl = `http://localhost:3000`
    return this.http.get(this.mainUrl)
  }
  sendEmail(req: any, file: any) {
    // this.mainUrl = `https://belar.pro/`
    return this.http.post(this.mainUrl + `send/mail.php`, req, file)
  }
  sendEmailFromCart(req: any) {
    // this.mainUrl = `http://localhost/`
    return this.http.post(this.mainUrl + `send/mailFromCart.php`, req)
  }
}
