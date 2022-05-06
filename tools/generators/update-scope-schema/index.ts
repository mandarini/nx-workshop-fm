import {
  formatFiles,
  getProjects,
  ProjectConfiguration,
  Tree,
  updateJson,
  updateProjectConfiguration,
} from '@nrwl/devkit';

function getScopes(tree: Tree) {
  const r = getProjects(tree);
  let tags = [];
  r.forEach((v) => tags.push(v.tags));
  const scopes = Array.from(new Set(tags.flat().values())).filter((v) =>
    v.startsWith('scope:')
  );
  return scopes;
}

function replaceScopes(content: string, scopes: string[]): string {
  const joinScopes = scopes.map((s) => `'${s}'`).join(' | ');
  const PATTERN = /interface Schema \{\n.*\n.*\n\}/gm;
  return content.replace(
    PATTERN,
    `interface Schema {
      name: string;
      directory: ${joinScopes};
    }`
  );
}

function addScopeIfMissing(host: Tree) {
  const projectMap = getProjects(host);
  Object.keys(projectMap).forEach((projectName) => {
    const project = projectMap[projectName];
    if (!project.tags.some((tag) => tag.startsWith('scope:'))) {
      const scope = projectName.split('-')[0];
      project.tags.push(`scope:${scope}`);
      updateProjectConfiguration(host, projectName, project);
    }
  });
}

export default async function (host: Tree) {
  const scopes = getScopes(host);
  updateJson(host, 'tools/generators/util-lib/schema.json', (schemaJson) => {
    schemaJson.properties.directory['x-prompt'].items = scopes.map((scope) => ({
      value: scope,
      label: scope,
    }));
    scopes.forEach((scope) => {
      schemaJson.properties.directory['enum'].push(scope.replace('scope:', ''));
    });
    return schemaJson;
  });
  const content = host.read('tools/generators/util-lib/index.ts', 'utf-8');
  const newContent = replaceScopes(content, scopes);
  host.write('tools/generators/util-lib/index.ts', newContent);
  addScopeIfMissing(host);
  await formatFiles(host);
}
