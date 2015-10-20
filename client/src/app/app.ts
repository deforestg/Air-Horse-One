import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <h2>Horses</h2>
        <ul class="horses">
            <li *ng-for="#horse of horses" (click)="onSelect(horse)" [ng-class]="getSelectedClass(horse)">
                <span class="badge">{{horse.id}}</span> {{horse.name}}</a>
            </li>
        </ul>
        <div *ng-if="selectedHorse">
            <h2>{{selectedHorse.name}} details!</h2>
            <div><label>id: </label>{{selectedHorse.id}}</div>
            <div>
                <label>name: </label>
                <input [(ng-model)]="selectedHorse.name" placeholder="name"></input>
            </div>
        </div>
    `,
    styles:[`
      .horses {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
      .horses li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .horses li:hover {color: #369; background-color: #EEE; left: .2em;}
      .horses .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
    `],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

class AppComponent {
    public title = 'Tour of Horses';
    public selectedHorse: Horse;
    public horses = HORSES;
    onSelect(horse: Horse) { this.selectedHorse = horse; }
    getSelectedClass(horse: Horse) {
        return { 'selected': horse === this.selectedHorse };
    }
}

class Horse {
    id: number;
    name: string;
}

var HORSES: Horse[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];

bootstrap(AppComponent);
