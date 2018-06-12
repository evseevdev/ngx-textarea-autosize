# ngx-textarea-autosize
Angular 2+ plugin to automatic height control of textarea to fit the content.

## Installation:

NPM:
```bash
npm install --save ngx-textarea-autosize
```
Yarn:
```bash
yarn add ngx-textarea-autosize
```

## Usage:
Import module to your @NgModule:

```typescript
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

@NgModule({
  imports: [
    TextareaAutosizeModule
  ]
})
```

Add directive to your textarea
```
<textarea autosize>Some text</textarea>
```
