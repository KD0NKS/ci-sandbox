import { Greeter } from '../src/Greeter'
import assert from 'assert';

describe('Test for greeter class', () => {
    it('Should return "Hello World!"', () => {
        let greeter = new Greeter()

        assert.equal('Hello World!', greeter.greet());
    })
})