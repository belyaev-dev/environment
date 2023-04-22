# Environment

[PRIVATE]

Библиотека для работы с окружением

## Установка через NPM
```
npm install https://gitlab.amgate.ru/gate/environment.git master
```

## Установка через Yarn
```
yarn add https://gitlab.amgate.ru/gate/environment.git master
```

## Использование
```ts
import { environment } from '@amgate/env';

const env = environment({
    PORT: 8080,
    MONGODB_URL: String
});
```
