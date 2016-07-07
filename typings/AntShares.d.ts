﻿declare function escape(s: string): string;
declare function unescape(s: string): string;

interface Algorithm
{
    hash?: Algorithm;
    iv?: ArrayBuffer | ArrayBufferView;
    length?: number;
    namedCurve?: string;
}

interface Crypto
{
    webkitSubtle?: SubtleCrypto;
}

interface Map<TKey, TValue>
{
    get(key: TKey): TValue;
    has(key: TKey): boolean;
    set(key: TKey, value: TValue): void;
}

interface MapConstructor
{
    new <TKey, TValue>(): Map<TKey, TValue>;
    prototype: Map<any, any>;
}

interface PromiseConstructor
{
    new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): PromiseLike<T>;
    all(iterable: PromiseLike<any>[]): PromiseLike<any[]>;
    resolve<T>(value: T | PromiseLike<T>): PromiseLike<T>;
    prototype: PromiseLike<any>;
}

interface SubtleCrypto
{
    digest(algorithm: string | Algorithm, data: ArrayBuffer): any;
}

interface Touch
{
    radiusX: number;
    radiusY: number;
    force: number;
}

interface Window
{
    msCrypto?: Crypto;
    Promise: PromiseConstructorLike;
    Map: MapConstructor;
}

declare var Map: MapConstructor;
declare var Promise: PromiseConstructor;
