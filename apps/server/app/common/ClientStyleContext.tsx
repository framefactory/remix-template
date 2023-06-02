/**
 * Remix Template
 * Copyright 2023 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import * as React from "react";

////////////////////////////////////////////////////////////////////////////////

export interface ClientStyleContextData {
    reset: () => void;
}

export default React.createContext<ClientStyleContextData>({
    reset: () => {},
});
