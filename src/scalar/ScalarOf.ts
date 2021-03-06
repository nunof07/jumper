import { Scalar } from '@src/scalar/Scalar';

export class ScalarOf<T> implements Scalar<T> {
    private readonly valueImpl: T;

    constructor(value: T) {
        this.valueImpl = value;
    }

    public get value(): T {
        return this.valueImpl;
    }
}
