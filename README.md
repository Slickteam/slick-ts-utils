# Slick TS Utils

[![npm version](https://img.shields.io/npm/v/@slickteam/ts-utils.svg)](https://www.npmjs.com/package/@slickteam/ts-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Collection de fonctions utilitaires TypeScript sans dépendances externes.

## Installation

```bash
# npm
npm install @slickteam/ts-utils

# pnpm
pnpm add @slickteam/ts-utils

# yarn
yarn add @slickteam/ts-utils
```

## Utilisation

```ts
import { isBoolean, isNumber, roundNumber, sleep } from '@slickteam/ts-utils';
```

## API

### `roundNumber(input, precision?)`

Arrondit un nombre avec une précision donnée.

| Parametre   | Type     | Default | Description                    |
| ----------- | -------- | ------- | ------------------------------ |
| `input`     | `number` | -       | Le nombre a arrondir           |
| `precision` | `number` | `2`     | Nombre de decimales souhaitees |

```ts
roundNumber(516.528, 2); // 516.53
roundNumber(516.528, 1); // 516.5
roundNumber(516.528); // 516.53
```

### `sleep(duration)`

Retourne une Promise qui se resout apres un delai donne.

| Parametre  | Type     | Description            |
| ---------- | -------- | ---------------------- |
| `duration` | `number` | Duree en millisecondes |

```ts
await sleep(1000); // attend 1 seconde
```

### `isBoolean(value)`

Verifie si une chaine de caracteres represente un booleen (`"true"` ou `"false"`).

| Parametre | Type     | Description          |
| --------- | -------- | -------------------- |
| `value`   | `string` | La chaine a verifier |

```ts
isBoolean('true'); // true
isBoolean('false'); // true
isBoolean('yes'); // false
isBoolean('1'); // false
```

### `isNumber(value)`

Verifie si une valeur peut etre convertie en nombre valide.

| Parametre | Type                                               | Description          |
| --------- | -------------------------------------------------- | -------------------- |
| `value`   | `number \| string \| boolean \| undefined \| null` | La valeur a verifier |

```ts
isNumber(42); // true
isNumber('42'); // true
isNumber('3.14'); // true
isNumber(''); // false
isNumber(null); // false
isNumber(undefined); // false
isNumber(NaN); // false
```

## Developpement

```bash
# Installation des dependances
pnpm install

# Build
pnpm build

# Formatage du code
pnpm prettier:fix
```

## Licence

[MIT](https://opensource.org/licenses/MIT)
