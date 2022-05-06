import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
export interface FeatureLibrarySchema {
  name: string;
  directory: string;
}
export default async function (tree: Tree, schema: FeatureLibrarySchema) {
  await libraryGenerator(tree, {
    name: `feature-${schema.name}`,
    directory: schema.directory,
    tags: `type:feature,scope:${schema.directory}`,
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
