import { controller, module, router, service } from '../../../templates/dynamic-named';
import { FileType } from '../interfaces/file-type.constant';
import { IGeneratorDetails } from '../interfaces/generator-details.interface';

export function getGeneratorFn(key: string): IGeneratorDetails {
  switch (key) {
    case 'routes':
    case 'router':
    case 'route':
    case 'r':
      return {
        generate: router.generate,
        type: FileType.ROUTER
      };
    case 'controller':
    case 'c':
      return {
        generate: controller.generate,
        type: FileType.CONTROLLER
      };
    case 'service':
    case 's':
      return {
        generate: service.generate,
        type: FileType.SERVICE
      };
    case 'm':
    case 'module':
    default:
      return {
        generate: module.generate,
        type: FileType.MODULE
      };
  }
}
