/**
 * Setup work pages routing.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2016
 * @version 0.0.2
 *
 * @changelog
 * - 0.0.2 rewritten for es2015
 * - 0.0.1 basic functions and structure
 */
import { url } from './application';

const work = [
    {
        intlKey: 'PageWorkOptikLudewig',
        routerPath: url.workOptikLudewig
    },
    {
        intlKey: 'PageWorkSummerInspiration',
        routerPath: url.workSummerInspiration
    },
    {
        intlKey: 'PageWorkMomentariness',
        routerPath: url.workMomentariness
    },
    {
        intlKey: 'PageWorkLebensweltSchule',
        routerPath: url.workLebensweltSchule
    },
    {
        intlKey: 'PageWorkRevolution',
        routerPath: url.workRevolution
    },
    {
        intlKey: 'PageWorkVerlegeserviceBunge',
        routerPath: url.workVerlegeserviceBunge
    },
    {
        intlKey: 'PageWorkGedankenKollektiv',
        routerPath: url.workGedankenKollektiv
    }
];

export default work;
