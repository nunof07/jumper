import { Scalar } from '@src/scalar/Scalar';

export class AsyncScalar<T> implements Scalar<T> {
    private readonly func: () => T;

    constructor(func: () => T) {
        this.func = func;
    }

    public get value(): T {
        return this.func();
    }
}
