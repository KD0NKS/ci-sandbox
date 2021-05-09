import * as chai from 'chai'
import { Greeter } from '../src/Greeter'

const assert = chai.assert

describe('Test for greeter class', () => {
    it('Should return "Hello World!"', () => {
        const greeter = new Greeter()

        assert.equal('Hello World!', greeter.greet());
    })
})