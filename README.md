# unique-url

A TypeScript reference implementation for generating unique, deterministic URLs from text using UUID v5.

## Overview

`unique-url` provides a simple function to generate consistent, unique URLs based on text input. It uses UUID v5 
(namespace-based) to ensure that the same input text always produces the same URL, making it ideal for creating stable
identifiers for mentions or other text-based entities.

## The reference code

You can find the reference code in [src/main.ts](./src/main.ts).

## Usage

```typescript
import {mention_v5_from_text} from 'unique-url';

const url = mention_v5_from_text('example text');
// Returns: https://uri.dataeq.com/v1/[uuid-v5-hash]
```

The generated URL is *deterministic*: calling the function with the same text will always produce the same URL.

## License

See the [LICENSE file](./LICENSE).
