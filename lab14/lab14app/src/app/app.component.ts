import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NumberOfSentencesPipe } from './number-of-sentences.pipe';
import { CapitalWordsPipe } from './capital-words.pipe';
import { LimitToPipe } from './limit-to.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule,NumberOfSentencesPipe,LimitToPipe,CapitalWordsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  produkty = [
    {
    nazwa: "Krzesło sosnowe model P DĄB",
    cena: 134.89,
    waluta: "PLN",
    kodProd: 'KRZ-MOD-P-DĄB',
    dataSprzedazy: '2020-04-23',
    zdjecie: 'https://www.meblemeble.pl/dane/source/a/apie6d48a63e4774265a3c96d508eff1dc2.jpg'
    },
    {
    nazwa: "HERCULES Series Crown Back Stacking Banquet Chair in Navy Blue",
    cena: 59.23,
    waluta: "USD",
    kodProd: '114079438160',
    dataSprzedazy: '2019-12-09',
    zdjecie: 'https://i.ebayimg.com/images/g/fVcAAOSweoBbBUH-/s-l500.jpg'
    },
    {
    nazwa: "Mesh / stylish / office chair / 270,000 / ssx7371y",
    cena: 3100,
    waluta: "JPY",
    kodProd: 'ssx7371y',
    dataSprzedazy: '2020-04-23',
    zdjecie: 'https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0105/users/2f5d9c908ae8f2963f7103ef90c8a55ff64cd9f5/i-img600x450-1590393538mkzyk0237635.jpg'
    },
    {
    nazwa: "Schwingstuhl in Grau 'Juna'",
    cena: 69,
    waluta: "EUR",
    kodProd: '002857000601',
    dataSprzedazy: '2020-01-17',
    zdjecie: 'https://media.moemax.com/i/moemax/PIIs0LckrdytMNaClb1vpeAQ'
    }
  ];
  inwokacja: string =
`Litwo, Ojczyzno moja! ty jesteś jak zdrowie;
Ile cię trzeba cenić, ten tylko się dowie,
Kto cię stracił. Dziś piękność twą w całej ozdobie
Widzę i opisuję, bo tęsknię po tobie.`;

  liczbyPierwsze: number[] = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

  title = 'lab14app';
}
