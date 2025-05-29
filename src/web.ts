import { WebPlugin } from '@capacitor/core';

import type { PrinterPlugin, PrintOptions } from './definitions';

export class PrinterWeb extends WebPlugin implements PrinterPlugin {
  async print(options: PrintOptions): Promise<void> {
    console.log('Print not supported on web browsers!', options);
    throw new Error('Not implemented on web.');
  }
}
