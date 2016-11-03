import React from 'react';

declare module 'nodemailer' {
    declare function exports(args: any): string;
}
