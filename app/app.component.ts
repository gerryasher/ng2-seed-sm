import { Component } from '@angular/core';

// additional imports

@Component({
    selector: 'gasher-app',
    template: `
        <div>
            <h1>{{pageTitle}}</h1>
        </div>
    ` ,
    directives: [],
    providers: []
})
export class AppComponent {
    pageTitle: string = 'Gasher Seed App';
}
