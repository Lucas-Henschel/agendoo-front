import type { Collaborator } from "./Collaborator";
import type { Service } from "./Service";

export interface CollaboratorService {
  id: number;
  service: Service;
  employee: Collaborator;
  active: boolean;
}
