import { z } from "zod";

export interface Tenant {
  id: string;
  name: string;
  plan: string;
  createdAt: string;
}

export interface Project {
  id: string;
  tenantId: string;
  name: string;
  githubRepo: string;
  defaultBranch: string;
  description: string | null;
  createdAt: string;
}

export interface ChangeRecord {
  id: string;
  tenantId: string;
  projectId: string;
  title: string;
  description: string | null;
  status: string;
  branchName: string | null;
  baseSha: string | null;
  modulePath: string | null;
  createdAt: string;
}

export interface Workspace {
  id: string;
  changeId: string;
  status: string;
  containerId: string | null;
  previewUrl: string | null;
  createdAt: string;
}

export interface AgentRun {
  id: string;
  changeId: string;
  intent: string;
  status: string;
  skillsUsed: string;
  logs: string;
  createdAt: string;
}

export interface ChangeTarget {
  id: string;
  changeId: string;
  type: string;
  selector: unknown;
  createdAt: string;
}

export interface ChangePatchOp {
  id: string;
  changeId: string;
  opType: string;
  payload: unknown;
  executedAt: string | null;
  createdAt: string;
}

export interface ModuleOverride {
  id: string;
  tenantId: string;
  installedModuleId: string;
  overrideType: string;
  targetRef: string;
  patch: unknown;
  version: string;
  status: string;
  changeId: string | null;
  createdBy: string;
  createdAt: string;
}

export interface WorkflowDefinition {
  id: string;
  tenantId: string;
  name: string;
  triggerType: string;
  status: string;
  version: number;
  createdAt: string;
}

export interface RecordType {
  id: string;
  tenantId: string;
  name: string;
  key: string;
}

export interface RecordInstance {
  id: string;
  recordTypeId: string;
  assignedTo: string | null;
  assignedGroup: string | null;
  createdBy: string;
  createdAt: string;
}

export interface WorkflowExecutionIntent {
  id: string;
  workflowDefinitionId: string;
  status: string;
  triggerPayload: unknown;
  error: string | null;
  createdAt: string;
}

export const insertProjectSchema = z.object({
  name: z.string(),
  githubRepo: z.string(),
  defaultBranch: z.string().default("main"),
  description: z.string().optional(),
});

export const insertChangeRecordSchema = z.object({
  projectId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  baseSha: z.string().optional(),
  modulePath: z.string().optional(),
});
