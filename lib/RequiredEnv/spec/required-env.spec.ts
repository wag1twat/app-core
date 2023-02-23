import {describe, test} from '@jest/globals';
import { ValidationError } from 'runtypes';
import { RequiredEnv } from '../RequiredEnv';

describe('RequiredEnv', () => {
    const initialKeys = ['REACT_APP_API', 'REACT_APP_TOKEN', 'REACT_APP_SECRET_KEY']
    let keys = ['REACT_APP_API', 'REACT_APP_TOKEN', 'REACT_APP_SECRET_KEY']
    const proccessEnv = process.env

    beforeEach(() => {
        jest.resetModules() 
        process.env = { ...proccessEnv };
        keys = [...initialKeys]
    });

    afterEach(() => {
        process.env = proccessEnv;
        keys = [...initialKeys]
    });
    
    test('valid', () => {
        try {
            keys.push('REACT_APP_CI_TOKEN')

            keys.forEach(key => {
                process.env[key] = key
            })
            
            const requiredEnv = new RequiredEnv(keys)

            const env = requiredEnv.getVariables()

            expect(Object.keys(env).length).toBe(keys.length)

            keys.forEach(key => {
                expect(env[key]).toBe(key)
            })
        }
        catch(err) {
            expect(err).toBe(undefined)
        }
    })

    test('invalid checkOnInitializeClass = true', () => {
        try {
            keys.push('REACT_APP_CI_TOKEN')

            keys.forEach(key => {
                process.env[key] = key
            })
            
            new RequiredEnv([...keys, 'REACT_APP_UNDEFINED_VARIABLE'])
        }
        catch(err) {
            expect(err).toBeInstanceOf(ValidationError)
        }
    })

    test('invalid checkOnInitializeClass = false', () => {
        try {
            keys.push('REACT_APP_CI_TOKEN')

            keys.forEach(key => {
                process.env[key] = key
            })
            
            const env = new RequiredEnv([...keys, 'REACT_APP_UNDEFINED_VARIABLE'], { checkOnInitializeClass: false })

            const variables = env.getVariables()

            expect(Object.keys(variables).length).toBe(keys.length + 1)

            env.check()
        }
        catch(err) {
            expect(err).toBeInstanceOf(ValidationError)
        }
    })
})