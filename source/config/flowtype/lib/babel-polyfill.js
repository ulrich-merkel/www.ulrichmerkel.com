import React from 'react';

declare module 'babel-polyfill' {
    declare function exports(args: any): string;
}
