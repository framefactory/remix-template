/**
 * Remix Template
 * Copyright 2023 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Button from "@mui/material/Button";

import { useOptionalUser } from "~/common/utils";

////////////////////////////////////////////////////////////////////////////////

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

////////////////////////////////////////////////////////////////////////////////

export default function Index()
{
    const user = useOptionalUser();

    return (
        <main>
            <Button variant="contained">Hello, World</Button>
        </main>
    );
}
