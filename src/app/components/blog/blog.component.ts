import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INews } from '../../interfaces/inews.interface';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  arrNews: INews[] = [
    { title: 'The Substance Earns Five Academy Award Nominations', urlImg: 'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/1100x619+0+0/resize/1200/quality/75/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F6c%2F9a%2F8ead42f74b5fb070ad5b0b880afa%2Fimage-65.jpg', text: 'The movie, primarily relying on practical effects, centers on Elisabeth Sparkle (portrayed by Moore), a declining celebrity who takes an illicit drug that temporarily transforms her into a younger version of herself, Sue (played by Margaret Qualley), forcing her to deal with the consequences.', date: 'January 23, 2025' },  
    { title: 'A Complete Unknown honors Bob Dylans life and musical journey', urlImg: 'https://lobbyobserver.org/wp-content/uploads/2025/01/A-Complete-Unknown-860x489-1.jpg', text: 'A Complete Unknown,” now nominated for eight Academy Awards, including Best Picture, explores the captivating yet imperfect journey of Dylans rise to fame. Timothée Chalamet takes on the role of Bob Dylan, showcasing both his acting and singing skills—a performance that earned him his second Oscar nomination.', date: 'February 20, 2025' },  
    ]
}
