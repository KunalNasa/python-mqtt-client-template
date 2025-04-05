
const path = require('path');
const { readFile } = require('fs').promises;
const Generator = require('@asyncapi/generator');
const asyncapi_path = path.resolve(__dirname, './__fixtures__/asyncapi.yml');
const testResultPath = path.resolve(__dirname, './temp/snapshotTestResult');
const template = path.resolve(__dirname, '../');

describe('testing if generated client match snapshot', () => {
    jest.setTimeout(100000);
    it('generate simple client for postman echo', async () => {
        const testOutputFile = 'client.py';
    
        const generator = new Generator(template, testResultPath, {
          forceWrite: true,
          templateParams: {
            server: 'dev',
            clientFileName: testOutputFile
          }
        });
    
        await generator.generateFromFile(asyncapi_path);

        const filePath = path.join(testResultPath, testOutputFile);
        const content = await readFile(filePath, 'utf8');

        expect(content).toMatchSnapshot(testOutputFile);
      });
});