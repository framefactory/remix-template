/**
 * Remix Template
 * Copyright 2023 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import createCache from '@emotion/cache';

////////////////////////////////////////////////////////////////////////////////

export default function createEmotionCache() {
  return createCache({ key: 'css' });
}