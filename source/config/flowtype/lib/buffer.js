import React from 'react';

declare module 'buffer' {
    declare function exports(args: any): string;
}
