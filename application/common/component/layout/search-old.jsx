// import React, { Component } from 'react';
// import classnames from 'classnames';
// import { connect } from 'react-redux';
// import get from 'lodash/get';
// import toArray from 'lodash/toArray';
//
// import addContent from './../decorator/addContent';
// //import { getConfig } from './../../state/intl/utils';
// import { getContentSection } from './../../helper/content';
// import flatten from './../../helper/flatten';
// import configRoutes from './../../config/routes';
// import configI18n from './../../config/i18n/en-EN'
// /**
//  *
//  */
// function getIndexOfPageName(page, escapedInput) {
//     return page.toLowerCase.indexOf(escapedInput)//page.name.toLowerCase().indexOf(escapedInput);
// }
//
// function getSearchResults(searchTerm, source) {
//
//     if (!searchTerm || !searchTerm.length) {
//         return [];
//     }
//
//     const escapedInput = searchTerm.trim().toLowerCase();
//     const matchRegex = new RegExp(`\\b${escapedInput}`, 'i');
//
//     const suggestions = flatten(source).filter((page) => {
//             return matchRegex.test(page);
//         })
//         // .sort((page1, page2) => {
//         //     return getIndexOfPageName(page1, escapedInput) - getIndexOfPageName(page2, escapedInput);
//         // })
//         .slice(
//             0, 7
//         )
//         .map((page) => {
//             return page.name;
//         });
//
//     return suggestions;
// }
//
// /**
// * Class representing a component.
// *
// * @class
// * @extends React.Component
// */
// function LayoutSearch(props) {
//
//     const { intlLocale, searchTerm, content } = props;
//     const source = getContentSection(null, intlLocale)
//
//     const searchResults = getSearchResults(searchTerm, content);
//
//     if (!searchResults || !searchResults.length) {
//         return null;
//     }
//
//     let componentClassName = classnames({
//         'l-search': true
//     });
//
//     return (
//         <dialog className={componentClassName} id='l-search' itemScope itemType='' role='banner'>
//             <nav className='m-nav--search' itemScope itemType='http://schema.org/ItemList' role='navigation'>
//
//                 <div className='l-grid'>
//                     <div className='l-grid__spaced'>
//                         <div className='l-grid__row'>
//                             <div className='l-grid__col--12'>
//
//                                 <ul className='m-menu--search' role='menu'>
//
//                                     {searchResults.map((value, index) => {
//                                         return (
//                                             <li key={index} className='m-menu__list-item' itemProp='itemListElement' itemScope itemType='http://www.schema.org/SiteNavigationElement'>
//                                                 <a className='m-menu__item'>
//                                                     {value}
//                                                 </a>
//                                             </li>
//                                         );
//                                     })}
//
//                                 </ul>
//
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//             </nav>
//         </dialog>
//     )
//
// }
//
// /**
// * The component will subscribe to Redux store updates. Any time it updates,
// * mapStateToProps will be called, Its result must be a plain object,
// * and it will be merged into the component’s props.
// *
// * @function
// * @param {Object.<*>} state The redux store state
// * @param {Object.<*>} [ownProps] The current component props
// * @returns {Object}
// */
// const mapStateToProps = (state, ownProps) => {
//     return {
//         intlLocale: get(state, 'intl.locale') || ownProps.intlLocale,
//         searchTerm: get(state, 'search.term') || ownProps.searchTerm
//     }
// };
//
// /**
// * Connects a React component to a Redux store. It does not modify the
// * component class passed to it. Instead, it returns a new, connected component class.
// */
// const LayoutSearchContainer = connect(
//     mapStateToProps
// )(addContent()(LayoutSearch));
//
// export default LayoutSearchContainer;
