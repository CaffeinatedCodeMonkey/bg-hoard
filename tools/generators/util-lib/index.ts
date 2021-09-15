import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: 'util-' + schema.name, directory: schema.directory, tags:  [...(schema.tags || '').split(','), 'type:util', 'scope:' + schema.directory].join(',')});
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
