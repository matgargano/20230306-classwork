import { describe, it, expect } from 'vitest';
import reverser from './reverser';

describe('Test that a string is reversed', () => {
    it('abc is reversed to cba when passed into reverser', () => {
        expect(reverser('abc')).toBe('cba');
    })
});