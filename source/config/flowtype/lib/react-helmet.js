import React from 'react';

declare module 'react-helmet' {
    declare var exports: React.Component<*, *, *>;
}
