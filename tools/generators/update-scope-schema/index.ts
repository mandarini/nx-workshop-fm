import { Tree, formatFiles } from '@nrwl/devkit';
import { updateJson } from '@nrwl/devkit';

export default async function (tree: Tree, schema: any) {
  await updateJson(tree, 'nx.json', (nxJson) => {
    nxJson.defaultProject = 'api';
    return nxJson;
  });
  await formatFiles(tree);
}
