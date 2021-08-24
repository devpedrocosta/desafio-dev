import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
export declare class MulterConfig implements MulterOptionsFactory {
    createMulterOptions(): MulterModuleOptions;
}
