import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CDPortfolio');
  @ViewChild('hoverSound') hoverSoundRef!: ElementRef<HTMLAudioElement>
  playSound(): void {
    if(this.hoverSoundRef && this.hoverSoundRef.nativeElement) {
      this.hoverSoundRef.nativeElement.currentTime = 0;
      this.hoverSoundRef.nativeElement.volume = 0.2;
      this.hoverSoundRef.nativeElement.play();
    }
  }
}
