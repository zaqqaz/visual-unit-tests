/// <reference types="react-scripts" />
interface LocalMatchers<R> {
    toMatchImageSnapshot(): R;
}

declare var expect: {
    <T = any>(actual: T): LocalMatchers<T>;
} & jest.Expect;
