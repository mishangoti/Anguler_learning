import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-test1',
    template: `
        <p>11. Pipes</p>
        <p>lowercase pipe</p>
        <h4>{{ x | lowercase }}</h4>
        <p>uppercase pipe</p>
        <h4>{{ x | uppercase }}</h4>
        <p>titlecase pipe</p>
        <h4>{{ x | titlecase }}</h4>
        <p>slice pipe</p>
        <h4>{{ x | slice:3:5 }}</h4>
        <p>json pipe</p>
        <h4>{{ person | json }}</h4>
        <p>numbers pipe</p>
        <h4>{{ 5.678 | number:'1.2-3' }}</h4>
        <h4>{{ 5.678 | number:'3.4-5' }}</h4>
        <h4>{{ 5.678 | number:'3.1-2' }}</h4>
        <p>percent pipe</p>
        <h4>{{ 0.235 | percent }}</h4>
        <p>currency pipe</p>
        <h4>{{ 0.89 | currency: 'INR' }}</h4>
        <p>Date pipe</p>
        <p>original date</p>
        <h4>{{ date }}</h4>
        <p>short date</p>
        <h4>{{ date | date }}</h4>
        <p>short date with time</p>
        <h4>{{ date | date: 'short' }}</h4>
        <p>only short date</p>
        <h4>{{ date | date: 'shortDate' }}</h4>
        <p>only short time</p>
        <h4>{{ date | date: 'shortTime' }}</h4>
        <p>medium date</p>
        <h4>{{ date | date: 'mediumDate' }}</h4>
        <p>medium time</p>
        <h4>{{ date | date: 'mediumTime' }}</h4>
        <p>long date</p>
        <h4>{{ date | date: 'longDate' }}</h4>
        <p>long time</p>
        <h4>{{ date | date: 'longTime' }}</h4>


    `,
    styles: [`

    `]
})
export class Test1Component implements OnInit {
    public x = 'mIshAn goti';
    public person = {
        "firstname": "mishan",
        "lastname": "goti"
    }
    public date = new Date();

    constructor() { }

    ngOnInit() {

    }

}
