import type { SchemaTypeDefinition } from "sanity";

import { blockContent } from "./blockContent";
import { jobPosting } from "./jobPosting";
import { page } from "./page";
import { project } from "./project";
import { service } from "./service";
import { siteSettings } from "./siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  service,
  project,
  jobPosting,
  blockContent,
];
