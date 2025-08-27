/* globals describe, it, expect */

import App from '../index.js';

describe('ExportComments Zapier Integration', () => {
  it('should have correct app structure', () => {
    expect(App.version).toBeDefined();
    expect(App.platformVersion).toBeDefined();
    expect(App.authentication).toBeDefined();
    expect(App.triggers).toBeDefined();
  });

  it('should have authentication configured', () => {
    expect(App.authentication.type).toBe('custom');
    expect(App.authentication.test).toBeDefined();
    expect(App.authentication.fields).toHaveLength(1);
    expect(App.authentication.fields[0].key).toBe('api_key');
  });

  it('should have export triggers defined', () => {
    expect(App.triggers.exportCreated).toBeDefined();
    expect(App.triggers.exportCompleted).toBeDefined();
    expect(App.triggers.exportFailed).toBeDefined();
  });

  it('should have correct trigger structure for exportCreated', () => {
    const trigger = App.triggers.exportCreated;
    expect(trigger.key).toBe('exportCreated');
    expect(trigger.noun).toBe('Export Started');
    expect(trigger.operation.type).toBe('hook');
    expect(trigger.operation.performSubscribe).toBeDefined();
    expect(trigger.operation.performUnsubscribe).toBeDefined();
    expect(trigger.operation.performList).toBeDefined();
  });

  it('should have correct trigger structure for exportCompleted', () => {
    const trigger = App.triggers.exportCompleted;
    expect(trigger.key).toBe('exportCompleted');
    expect(trigger.noun).toBe('Export Completed');
    expect(trigger.operation.type).toBe('hook');
    expect(trigger.operation.performSubscribe).toBeDefined();
    expect(trigger.operation.performUnsubscribe).toBeDefined();
    expect(trigger.operation.performList).toBeDefined();
  });

  it('should have correct trigger structure for exportFailed', () => {
    const trigger = App.triggers.exportFailed;
    expect(trigger.key).toBe('exportFailed');
    expect(trigger.noun).toBe('Export Failed');
    expect(trigger.operation.type).toBe('hook');
    expect(trigger.operation.performSubscribe).toBeDefined();
    expect(trigger.operation.performUnsubscribe).toBeDefined();
    expect(trigger.operation.performList).toBeDefined();
  });

  it('should have sample data in triggers', () => {
    expect(App.triggers.exportCreated.operation.sample).toBeDefined();
    expect(App.triggers.exportCreated.operation.sample.event).toBe('export.created');
    
    expect(App.triggers.exportCompleted.operation.sample).toBeDefined();
    expect(App.triggers.exportCompleted.operation.sample.event).toBe('export.done');
    
    expect(App.triggers.exportFailed.operation.sample).toBeDefined();
    expect(App.triggers.exportFailed.operation.sample.event).toBe('export.failed');
  });
});
