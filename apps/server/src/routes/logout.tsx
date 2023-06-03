/**
 * Remix Template
 * Copyright 2023 Ralph Wiedemeier, Frame Factory GmbH
 *
 * License: MIT
 */

import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { logout } from "~/session.server";

////////////////////////////////////////////////////////////////////////////////

export const action = async ({ request }: ActionArgs) => logout(request);

export const loader = async () => redirect("/");
