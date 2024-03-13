import { createPermission } from '@backstage/plugin-permission-common';

/**
 * Common functionalities for the gitlab plugin.
 *
 * @packageDocumentation
 */

export const GITLAB_PROJECT_RESOURCE_TYPE = 'gitlab-project';

/**
 * Permission to view Gitlab Project
 */
export const GitlabViewProjectPermission = createPermission({
  name: 'gitlab.view.project',
  attributes: { action: 'read' },
  resourceType: GITLAB_PROJECT_RESOURCE_TYPE,
});

/**
 * Permission to access Gitlab wide resources (for example users)
 */
export const GitlabViewGlobalResourcesPermission = createPermission({
  name: 'gitlab.view.global.resources',
  attributes: { action: 'read' },
});

/**
 * All Gitlab Mode Permissions
 */
export const gitlabPermissions = [
  GitlabViewProjectPermission,
  GitlabViewGlobalResourcesPermission,
];

export const GITLAB_PROJECT_SLUG = 'gitlab.com/project-slug';
export const GITLAB_PROJECT_ID = 'gitlab.com/project-id';
export const GITLAB_INSTANCE = 'gitlab.com/instance';
