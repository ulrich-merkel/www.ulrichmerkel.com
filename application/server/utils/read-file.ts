/* eslint-disable promise/avoid-new */
/**
 * Es6 module for helper component.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const readFileOptions = {
    encoding: 'utf-8',
    flag: 'r' // @see {@link https://nodejs.org/api/fs.html#fs_file_system_flags}
};
const readFileAsync = promisify(fs.readFile);

/**
 * Helper function to read file async from disc.
 *
 * @param {string} fileName - The file name
 * @returns {Function<string>} The promise for this request
 */
export function readFile(fileName: string): Promise<string> {
    const filePath = path.resolve(__dirname, fileName);

    return readFileAsync(filePath, readFileOptions);
}
