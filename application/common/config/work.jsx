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
        i18nKey: 'PageWorkOptikLudewig',
        routerPath: url.workOptikLudewig
    },
    {
        i18nKey: 'PageWorkSummerInspiration',
        routerPath: url.workSummerInspiration
    },
    {
        i18nKey: 'PageWorkMomentariness',
        routerPath: url.workMomentariness
    },
    {
        i18nKey: 'PageWorkLebensweltSchule',
        routerPath: url.workLebensweltSchule
    },
    {
        i18nKey: 'PageWorkRevolution',
        routerPath: url.workRevolution
    },
    {
        i18nKey: 'PageWorkVerlegeserviceBunge',
        routerPath: url.workVerlegeserviceBunge
    },
    {
        i18nKey: 'PageWorkGedankenKollektiv',
        routerPath: url.workGedankenKollektiv
    }
];

export default work;
