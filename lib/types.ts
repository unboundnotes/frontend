import { Workspace } from "./graphql/generated";

export type BaseWorkspace = Omit<Workspace, "pages">;
