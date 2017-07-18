# ngx-textarea-autosize
The plugin for Angular 4 that automatically control height textarea to fit content

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
1. Import module to your @NgModule:

```typescript
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

@NgModule({
  imports: [
    TextareaAutosizeModule
  ]
})
```
2. Add directive to your textarea

```
<textarea autosize>Some text</textarea>
```
