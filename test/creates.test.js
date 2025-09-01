/* globals describe, it, expect */

import createExport from '../creates/createExport.js';
import App from '../index.js';

describe('Create Export', () => {
  it('should be included in the app creates', () => {
    expect(App.creates.createExport).toBeDefined();
    expect(App.creates.createExport.key).toBe('createExport');
    expect(App.creates.createExport.noun).toBe('Export');
  });

  it('should have correct operation structure', () => {
    const create = createExport;
    expect(create.operation.perform).toBeDefined();
    expect(create.operation.inputFields).toBeDefined();
    expect(create.operation.outputFields).toBeDefined();
    expect(create.operation.sample).toBeDefined();
  });

  it('should have correct input fields defined', () => {
    const inputFields = createExport.operation.inputFields;
    
    expect(inputFields).toHaveLength(6);
    
    const urlField = inputFields.find(f => f.key === 'url');
    expect(urlField).toBeDefined();
    expect(urlField.required).toBe(true);
    
    const limitField = inputFields.find(f => f.key === 'limit');
    expect(limitField).toBeDefined();
    expect(limitField.required).toBe(false);
    
    const followersField = inputFields.find(f => f.key === 'followers');
    expect(followersField).toBeDefined();
    expect(followersField.type).toBe('boolean');
  });

  it('should have correct output fields defined', () => {
    const outputFields = createExport.operation.outputFields;
    expect(outputFields).toHaveLength(6);
    
    const guidField = outputFields.find(f => f.key === 'guid');
    expect(guidField).toBeDefined();
    expect(guidField.label).toBe('Export GUID');
    
    const statusField = outputFields.find(f => f.key === 'status');
    expect(statusField).toBeDefined();
    expect(statusField.label).toBe('Status');

    const idField = outputFields.find(f => f.key === 'id');
    expect(idField).toBeDefined();
    expect(idField.label).toBe('Job ID');
    expect(idField.type).toBe('integer');
  });

  it('should have correct sample data', () => {
    const sample = createExport.operation.sample;
    expect(sample.id).toBeDefined();
    expect(sample.guid).toBeDefined();
    expect(sample.status).toBeDefined();
    expect(sample.url).toBeDefined();
    expect(sample.json_url).toBeDefined();
    expect(sample.download_link).toBeDefined();
  });
});