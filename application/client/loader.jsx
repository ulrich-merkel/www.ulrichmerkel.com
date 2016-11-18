/**
 * Handle react client side file loading and take
 * care for performance.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.1
 *
 * @requires loader/offline
 * @requires loader/async
 *
 * @changelog
 * - 0.0.1 basic functions and structure
 */
import './loader/offline';
import loaderAsync from './loader/async';

loaderAsync.css('/css/app.css');
loaderAsync.js('/js/client.js');
