UI component for UIIGateway powered by [Angular](https://angular.io/)

Pilar is a collection of components for Angular, built by BSI Developer with years of experince in developing open source UI components. According to one of our senior developer, Pilar is the 
best angular UI framework built with love from yogyakarta to the world.

## Installation

```bash
npm install pilar --registry https://npm.uii.ac.id
```

Import into a module
```ts
import { PilarModule } from 'pilar';
@NgModule({
    ...
    imports: [
        PilarModule.forRoot()
    ],
    ...
})
```

Replace the default styles in `angular.json`

```ts
    "styles": [
        "./node_modules/pilar/assets/stylesheets/styles.scss"
    ],
```

Add needed components, services, directives, pipes to your page

```html
<uii-pagination
    [amountOfData]="100"
    [dataPerPage]="10">
</uii-pagination>
```

## Links

- [Pilar Documentation](https://pilar-ng.web.app/)
- [Release Notes](https://gitlab-cloud.uii.ac.id/uii-gateway/frontend/lib-uii-gateway-pilar-angular/blob/master/CHANGELOG.md)
