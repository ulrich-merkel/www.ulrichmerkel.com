/* eslint-disable max-len */
/**
 * Configuration for translation strings, this is also the main config which will
 * be merged as default when choosing other locales.
 *
 * @file
 * @module
 *
 * @author hello@ulrichmerkel.com (Ulrich Merkel), 2021
 */
const HTML5 = "<abbr title='HyperText Markup Language 5'>HTML5</abbr>";
const CSS3 = "<abbr title='Cascading Style Sheets Level 3'>CSS3</abbr>";
const JAVASCRIPT =
    "<abbr title='Lightweight scripting language for web pages'>JavaScript</abbr>";
const PHP = "<abbr title='PHP: Hypertext Preprocessor'>PHP</abbr>";

export const configIntlEnEn = {
    // Page Index
    'intl-page-index-head-title': 'Frontend Web Developer',
    'intl-page-index-head-description':
        'I love creating code and design that push the boundries of what the web can do.',
    'intl-page-index-section1-headline': 'Hello, my name is Ulrich Merkel',
    'intl-page-index-section1-lead': 'I am a (Frontend) Web Developer',
    'intl-page-index-section2-headline': 'What i do',
    'intl-page-index-section2-lead': 'I build fancy and fast websites',
    'intl-page-index-section2-text-1-content': `I am a web developer with a deeply understanding of design and ux.
        I love creating code and design that push the boundries of what the web can do.
        For me this means make it work for everyone
        on every device, pursue performance on each step and
        focus on solving problems with the right tools.
        With this in mind i create functional, beautiful and accessable
        websites.
        I believe that friendship, trust and loyalty are important values (of a team and in personal) - and these values are important
        to succeed and to push things forward. Every interest and new idea is welcomed and celebrated, there should be no barriers in thinking
        because learning on the go should be involved in every step in this fast moving development role.`,
    'intl-page-index-section2-btn-label': 'Learn more about my person',
    'intl-page-index-section2-btn-title': 'See my resume',
    'intl-page-index-section3-headline': 'Services',
    'intl-page-index-section3-lead': 'Some things i am able to do',
    'intl-page-index-section3-list-1-headline': 'Developing',
    'intl-page-index-section3-list-1-text': `Frontend and backend web development with ${HTML5}, ${CSS3}, ${JAVASCRIPT} and ${PHP}`,
    'intl-page-index-section3-list-2-headline': 'Frontend optimisation',
    'intl-page-index-section3-list-2-text':
        'Frontend optimisation for performance, search engines and mobile as well as test automation',
    'intl-page-index-section3-list-3-headline': 'Design and UX',
    'intl-page-index-section3-list-3-text':
        'Find creative solutions for user interfaces and fancy designs',
    'intl-page-index-section3-list-4-headline': 'Support and consulting',
    'intl-page-index-section3-list-4-text':
        'Helping you to get things done right, with the appropriate tools you need',

    'intl-page-index-section4-headline': 'Featured Work',

    // Could be removed?
    'intl-page-work-head-title': 'Work examples',
    'intl-page-work-head-description':
        'I love creating code and design that push the boundries of what the web can do.',
    'intl-page-work-section1-headline': 'Some work examples',
    'intl-page-work-section1-lead':
        "We can't find the page you are looking for",

    // Page Persona
    'intl-page-persona-head-title': 'Persona and Vita',
    'intl-page-persona-head-description':
        'I am a developer from Germany with a deeper love for design and usability.',
    'intl-page-persona-section1-headline': 'Some notes about my person',
    'intl-page-persona-section1-lead': 'Who i am and what i can do for you',
    'intl-page-persona-section1-text-1-content': `I am a frontend developer from Germany with a deeper love for design and usability.
        With this passion in mind i am creating fast and beautiful web applications and sites.
        I am trying to learn every week something new to push the boundries of what the web and
        all the new technologies are able to do.
        After a long experience with broadcast technologies with numerous productions for
        <a href='/broadcast' class='js-show-broadcast' title='Show my broadcast experiences' rel='noopener noreferrer'>international and national clients</a>,
        i decided to take a course of web technology studies to take my passion into profession.
        Now i project, draft and develop complex webapplications for international and national companies and brands
        in my daily worklive, where my strength are frontend technologies (${HTML5}, ${CSS3} and ${JAVASCRIPT}).`,
    'intl-page-persona-section1-btn-label': 'See some work',
    'intl-page-persona-section1-btn-title': 'See some work examples',

    'intl-page-persona-section2-headline': 'Personal Timeline',
    'intl-page-persona-section2-lead': 'Things i did in my live',
    'intl-page-persona-section2-professional-experience':
        'Professional Experience',
    'intl-page-persona-section2-professional-experience-list-1-headline':
        'Senior Software Engineer Frontend',
    'intl-page-persona-section2-professional-experience-list-1-description': `Design, implement and maintain
        web applications for <a href='http://www.tomtom.com/' target='_blank' title='TomTom website' rel='noopener noreferrer'>TomTom Telematics</a>
        with strong focus on code quality and continuously improving the technology stack with new ideas.`,
    'intl-page-persona-section2-professional-experience-list-2-headline':
        'Senior frontend developer',
    'intl-page-persona-section2-professional-experience-list-2-description': `Project, draft and develop complex webapplications for
        international companies and brands at <a href='http://www.pluspol-interactive.de/' target='_blank' title='Pluspol interactive website' rel='noopener noreferrer'>Pluspol interactive</a>.
        Building responsive and mobile websites including optimisations
        for offline mode and performance.
        Freelance frontend developer until 2014, afterwards full-time permanent.`,
    'intl-page-persona-section2-professional-experience-list-3-headline':
        'TV graphics operator',
    'intl-page-persona-section2-professional-experience-list-3-description': `Doing freelance work for operation and creation of TV graphics
        at the german television company <a href='http://www.mdr.de/' target='_blank' title='MDR website' rel='noopener noreferrer'>Mitteldeutscher Rundfunk</a>
        (<abbr title='Mitteldeutscher Rundfunk Leipzig'>MDR</abbr>), mainly for live studio productions
        with <a href='http://chyronhego.com/' target='_blank' rel='noopener noreferrer' title='Chyron'>Chyron</a>.`,
    'intl-page-persona-section2-professional-experience-list-4-headline':
        'Virtual graphics operator',
    'intl-page-persona-section2-professional-experience-list-4-description': `Teamleader, engineer and operator for TV graphics in live and studio
        mode at <a href='http://www.swisstiming.com/' target='_blank' title='ST Sportservice website' rel='noopener noreferrer'>Swiss Timing Sportservice</a>, notably virtual TV
        graphics with <a href='http://www.vizrt.com/' target='_blank' title='VizRT' rel='noopener noreferrer'>VizRT</a>, TV Draw
        and <a href='http://www.evs.com/' target='_blank' title='EVS' rel='noopener noreferrer'>EVS</a>.
        Numerous <a href='#' class='js-show-broadcast' title='Show my broadcast experiences'>international experiences</a> with broadcast productions for
        international and national clients. Freelance frontend developer and TV operator from 2010 till 2012.`,
    'intl-page-persona-section2-academic-education': 'Education',
    'intl-page-persona-section2-academic-education-list-1-headline':
        'Bachelor of Engineering',
    'intl-page-persona-section2-academic-education-list-1-lead':
        'Media Technology',
    'intl-page-persona-section2-academic-education-list-1-description': `Course of studies with focus on web technology, interactive media,
        computer science and interface design at <a href='http://www.htwk-leipzig.de/' target='_blank' title='HTWK website' rel='noopener noreferrer'>University
        of Applied Sciences</a> (<abbr title='Hochschule für Technik, Wirtschaft und Kultur Leipzig'>HTWK</abbr>) Leipzig.`,
    'intl-page-persona-section2-academic-education-list-1-place-name':
        'Germany (Leipzig)',
    'intl-page-persona-section2-academic-education-list-2-headline':
        'Apprenticeship',
    'intl-page-persona-section2-academic-education-list-2-lead':
        'Digital Media Designer',
    'intl-page-persona-section2-academic-education-list-2-description': `Skilled Engineering Worker with specialisation in digital & print. Schooling with focus on web technology
        via dual education (<a href='http://www.gutenbergschule-leipzig.de/' target='_blank' title='Gutenbergschule website' rel='noopener noreferrer'>Gutenbergschule
        Leipzig</a> and <a href='http://www.swisstiming.com/' target='_blank' title='ST Sportservice' rel='noopener noreferrer'>ST Sportservice</a>).`,
    'intl-page-persona-section2-academic-education-list-2-place-name':
        'Germany (Leipzig)',
    'intl-page-persona-section2-academic-education-list-3-headline':
        'Music school',
    'intl-page-persona-section2-academic-education-list-3-description':
        'Schooling in clarinet, piano and musical composition.',
    'intl-page-persona-section2-academic-education-list-3-place-name':
        'Germany (Zeitz)',
    'intl-page-persona-section2-academic-education-list-4-headline':
        'Grammar school',
    'intl-page-persona-section2-academic-education-list-4-place-name':
        'Germany (Zeitz)',
    'intl-page-persona-section2-academic-education-list-5-headline':
        'Elementary school',
    'intl-page-persona-section2-academic-education-list-5-place-name':
        'Germany (Pegau)',

    'intl-page-persona-section3-headline': 'What i can do for you',
    'intl-page-persona-section3-lead': 'Some detailed technical skills',
    'intl-page-persona-section3-list-1-headline': 'HTML5',
    'intl-page-persona-section3-list-1-text':
        "Mobile, Offline, <abbr title='Accessible Rich Internet Applications'>ARIA</abbr>, Microdata, Performance, <abbr title='Search Engine Optimization'>SEO</abbr>",
    'intl-page-persona-section3-list-2-headline': 'CSS3',
    'intl-page-persona-section3-list-2-text':
        "Responsive, <abbr title='Syntactically Awesome Style Sheets'>SCSS</abbr>/Less, <abbr title='Block, Element, Modifier methodology'>BEM</abbr>, <abbr title='Scalable and Modular Architecture for CSS'>SMACSS</abbr>, <abbr title='Object Oriented CSS'>OOCSS</abbr>, Foundation, Bootstrap",
    'intl-page-persona-section3-list-3-headline': 'JavaScript',
    'intl-page-persona-section3-list-3-text':
        'jQuery, Angular, Backbone, React, Node, object-oriented/functional',
    'intl-page-persona-section3-list-4-headline': 'Backend',
    'intl-page-persona-section3-list-4-text': `${PHP}, Zend, Kirby, MySQL, Ruby`,
    'intl-page-persona-section3-list-5-headline': 'Workflow',
    'intl-page-persona-section3-list-5-text':
        "Karma, Jasmine, Jest, QUnit, Grunt/Gulp, Git/<abbr title='Apache Subversion'>SVN</abbr>, <abbr title='Node Package Manager'>NPM</abbr>, Bower, Vagrant, Styleguides",
    'intl-page-persona-section3-list-6-headline': 'Design and UX',
    'intl-page-persona-section3-list-6-text':
        "Adobe <abbr title='Creative Cloud'>CC</abbr> like Photoshop, Illustrator, Fireworks, InDesign, After Effects",

    'intl-page-persona-section4-headline': 'Languages',
    'intl-page-persona-section4-lead': 'Languages to communicate with',
    'intl-page-persona-section4-list-1-headline': 'German',
    'intl-page-persona-section4-list-1-lead': 'Native',
    'intl-page-persona-section4-list-2-headline': 'English',
    'intl-page-persona-section4-list-2-lead': 'Fluent',
    'intl-page-persona-section4-list-3-headline': 'French',
    'intl-page-persona-section4-list-3-lead': 'Poor',

    'intl-page-persona-section5-headline': 'Recommended reading',
    'intl-page-persona-section5-lead':
        'Some books i read and could recommend to you',
    'intl-page-persona-section5-list-1-headline': "You don't know JS",
    'intl-page-persona-section5-list-1-lead': 'ES6 and beyond',
    'intl-page-persona-section5-list-1-creator': 'Simpson, Kyle',
    'intl-page-persona-section5-list-1-publisher': "O'Reilly 2015",
    'intl-page-persona-section5-list-2-headline':
        'Real-Life Responsive Web Design',
    'intl-page-persona-section5-list-2-lead': 'Smashing Book #5',
    'intl-page-persona-section5-list-2-creator': '',
    'intl-page-persona-section5-list-2-publisher': 'Smashing Magazine 2015',
    'intl-page-persona-section5-list-3-headline':
        'Data Structures and Algorithms with JavaScript',
    'intl-page-persona-section5-list-3-lead':
        'Bringing classic computing approaches to the Web',
    'intl-page-persona-section5-list-3-creator': 'McMillan, Michael',
    'intl-page-persona-section5-list-3-publisher': "O'Reilly 2014",
    'intl-page-persona-section5-list-4-headline':
        'New Perspectives on Web Design',
    'intl-page-persona-section5-list-4-lead': 'Smashing Book #4',
    'intl-page-persona-section5-list-4-creator': '',
    'intl-page-persona-section5-list-4-publisher': 'Smashing Magazine 2013',
    'intl-page-persona-section5-list-5-headline': 'Responsive Webdesign',
    'intl-page-persona-section5-list-5-lead':
        'Reaktionsf\u00E4hige Websites gestalten und umsetzen',
    'intl-page-persona-section5-list-5-creator': 'Zillgens, Christoph',
    'intl-page-persona-section5-list-5-publisher': 'Carl Hanser 2013',
    'intl-page-persona-section5-list-6-headline':
        'Secrets of the JavaScript Ninja',
    'intl-page-persona-section5-list-6-lead': '',
    'intl-page-persona-section5-list-6-creator': 'Resig, John & Bibeault, Bear',
    'intl-page-persona-section5-list-6-publisher': 'Manning, MITP 2012',
    'intl-page-persona-section5-list-7-headline': 'JavaScript Web Applications',
    'intl-page-persona-section5-list-7-lead':
        'jQuery Developer Guide to Moving State to the Client',
    'intl-page-persona-section5-list-7-creator': 'MacCaw, Alex',
    'intl-page-persona-section5-list-7-publisher': "O'Reilly 2011",
    'intl-page-persona-section5-list-8-headline': 'JavaScript Patterns',
    'intl-page-persona-section5-list-8-lead':
        'Mit Coding Patterns und Entwurfsmustern zu besseren JavaScript-Anwendungen',
    'intl-page-persona-section5-list-8-creator': 'MacCaw, Alex',
    'intl-page-persona-section5-list-8-publisher': "O'Reilly 2010",
    'intl-page-persona-section5-list-9-headline': 'High Performance JavaScript',
    'intl-page-persona-section5-list-9-lead':
        'Build Faster Web Application Interfaces',
    'intl-page-persona-section5-list-9-creator': 'Zakas, Nicholas C.',
    'intl-page-persona-section5-list-9-publisher': "O'Reilly 2010",

    // Page Contact
    'intl-page-contact-head-title': 'Contact me',
    'intl-page-contact-head-description': 'Get in touch and contact me',
    'intl-page-contact-section1-headline': 'Send me a message',
    'intl-page-contact-section1-lead': 'Get in touch',
    'intl-page-contact-section1-form-legend': 'Contactform',
    'intl-page-contact-section1-form-input-name': 'Your name',
    'intl-page-contact-section1-form-input-email': 'Your email',
    'intl-page-contact-section1-form-input-website': 'Your website address',
    'intl-page-contact-section1-form-input-subject': 'Your subject',
    'intl-page-contact-section1-form-input-message': 'Your message',
    'intl-page-contact-section1-form-btn-reset-label': 'Reset form',
    'intl-page-contact-section1-form-btn-reset-title': 'Reset form',
    'intl-page-contact-section1-form-btn-submit-label': 'Send message',
    'intl-page-contact-section1-form-btn-submit-title': 'Send message',
    'intl-page-contact-section1-form-btn-renew-label': 'Send another message',
    'intl-page-contact-section1-form-btn-renew-title': 'Write new message',
    'intl-page-contact-section1-form-thank-you-headline': 'Thank you',
    'intl-page-contact-section1-form-thank-you-text':
        'Your message has been send and i will contact you soon.',
    'intl-page-contact-section1-form-error-headline': 'Oops!',
    'intl-page-contact-section1-form-error-text':
        "I'm sorry but something went wrong.",
    'intl-page-contact-section1-form-btn-try-again-label': 'Try again',
    'intl-page-contact-section1-form-btn-try-again-title':
        'Try to send a new message',

    // Page Disclaimer
    'intl-page-disclaimer-head-title': 'Disclaimer and legal restrictions',
    'intl-page-disclaimer-head-description':
        'Some information about legal restrictions.',
    'intl-page-disclaimer-section1-headline': 'Disclaimer',
    'intl-page-disclaimer-section1-lead': 'Legal restrictions',
    'intl-page-disclaimer-section1-text-1-headline':
        'Limitation of liability for internal content',
    'intl-page-disclaimer-section1-text-1-content-1': `The content of our website has been compiled with meticulous care and to the best of our
        knowledge. However, we cannot assume any liability for the up-to-dateness, completeness or
        accuracy of any of the pages.`,
    'intl-page-disclaimer-section1-text-1-content-2': `Pursuant to section 7, para. 1 of the TMG (Telemediengesetz – Tele Media Act by German law),
        we as service providers are liable for our own content on these pages in accordance with
        general laws. However, pursuant to sections 8 to 10 of the TMG, we as service providers are
        not under obligation to monitor external information provided or stored on our website. Once
        we have become aware of a specific infringement of the law, we will immediately remove the
        content in question. Any liability concerning this matter can only be assumed from the point
        in time at which the infringement becomes known to us.`,
    'intl-page-disclaimer-section1-text-2-headline':
        'Limitation of liability for external links',
    'intl-page-disclaimer-section1-text-2-content-1': `Our website contains links to the websites of third parties (“external links”).
        As the content of these websites is not under our control, we cannot assume any
        liability for such external content. In all cases, the provider of information of
        the linked websites is liable for the content and accuracy of the information provided.
        At the point in time when the links were placed, no infringements of the law were
        recognisable to us. As soon as an infringement of the law becomes known to us, we will
        immediately remove the link in question.`,
    'intl-page-disclaimer-section1-text-3-headline': 'Copyright',
    'intl-page-disclaimer-section1-text-3-content-1': `The content and works published on this website are governed by the copyright laws of
        Germany. Any duplication, processing, distribution or any form of utilisation beyond the
        scope of copyright law shall require the prior written consent of the author or authors in question.`,
    'intl-page-disclaimer-section1-text-4-headline': 'Data protection',
    'intl-page-disclaimer-section1-text-4-content-1': `A visit to our website can result in the storage on our server of information about the access
        (date, time, page accessed). This does not represent any analysis of personal data (e.g., name,
        address or e-mail address). If personal data are collected, this only occurs – to the extent
        possible – with the prior consent of the user of the website. Any forwarding of the data to
        third parties without the express consent of the user shall not take place.`,
    'intl-page-disclaimer-section1-text-4-content-2': `We would like to expressly point out that the transmission of data via the Internet (e.g.,
        by e-mail) can offer security vulnerabilities. It is therefore impossible to safeguard the
        data completely against access by third parties. We cannot assume any liability for damages
        arising as a result of such security vulnerabilities.`,
    'intl-page-disclaimer-section1-text-4-content-3': `The use by third parties of all published contact details for the purpose of advertising is
        expressly excluded. We reserve the right to take legal steps in the case of the unsolicited
        sending of advertising information; e.g., by means of spam mail.`,

    // Page Privacy
    'intl-page-privacy-head-title': 'Privacy information',
    'intl-page-privacy-head-description':
        'How i handle your personal data on this site.',
    'intl-page-privacy-section1-headline': 'Privacy Statement',
    'intl-page-privacy-section1-lead': 'Handling of your personal data',
    'intl-page-privacy-section1-text-1-headline': 'General',
    'intl-page-privacy-section1-text-1-content-1': `Your personal data (e.g. title, name, house address, e-mail address, phone number,
        bank details, credit card number) are processed by us only in accordance with
        the provisions of German data privacy laws. The following provisions describe
        the type, scope and purpose of collecting, processing and utilizing personal data.
        This data privacy policy applies only to our web pages. If links on our pages
        route you to other pages, please inquire there about how your data are handled
        in such cases.`,
    'intl-page-privacy-section1-text-2-headline': 'Inventory data',
    'intl-page-privacy-section1-text-2-content-1': `(1) Your personal data, insofar as these are necessary for this contractual relationship
        (inventory data) in terms of its establishment, organization of content and modifications,
        are used exclusively for fulfilling the contract. For goods to be delivered, for instance,
        your name and address must be relayed to the supplier of the goods.`,
    'intl-page-privacy-section1-text-2-content-2': `(2) Without your explicit consent or a legal basis, your personal data are not passed on
        to third parties outside the scope of fulfilling this contract. After completion of the
        contract, your data are blocked against further use. After expiry of deadlines as per
        tax-related and commercial regulations, these data are deleted unless you have expressly
        consented to their further use.`,
    'intl-page-privacy-section1-text-3-headline':
        'Web analysis with Google Analytics',
    'intl-page-privacy-section1-text-3-content-1': `This website uses Google Analytics, a web analysis service of Google Inc. (Google).
        Google Analytics uses cookies, i.e. text files stored on your computer to enable analysis
        of website usage by you. Information generated by the cookie about your use of this
        website is usually transmitted to a Google server in the United States and stored
        there. In case of activated IP anonymization on this website, however, your IP address
        is previously truncated by Google within member states of the European Union or in other
        states which are party to the agreement on the European Economic Area. Only in exceptional
        cases is a full IP address transmitted to a Google server in the United States and
        truncated there. On behalf this website's owner, Google will use this information to
        evaluate your use of the website, compile reports about website activities, and provide
        the website's operator with further services related to website and Internet usage.
        The IP address sent from your browser as part of Google Analytics is not merged with
        other data by Google. You can prevent storage of cookies by appropriately setting your
        browser software; in this case, however, please note that you might not be able to fully
        use all functions offered by this website. In addition, you can prevent data generated by
        the cookie and relating to your use of the website (including your IP address) from being
        collected and processed by Google, by downloading and installing a browser plug-in from
        the following link: <a href='http://tools.google.com/dlpage/gaoptout?hl=en' target='_blank' rel='noopener noreferrer'>http://tools.google.com/dlpage/gaoptout?hl=en</a>`,
    'intl-page-privacy-section1-text-3-content-2': `This website uses Google Analytics with the extension "anonymizeIP()", IP addresses being
        truncated before further processing in order to rule out direct associations to persons.`,
    'intl-page-privacy-section1-text-4-headline': 'Information about cookies',
    'intl-page-privacy-section1-text-4-content-1': `(1) To optimize our web presence, we use cookies. These are small text files stored in
        your computer's main memory. These cookies are deleted after you close the browser. Other
        cookies remain on your computer (long-term cookies) and permit its recognition on your
        next visit. This allows us to improve your access to our site.`,
    'intl-page-privacy-section1-text-4-content-2': `(2) You can prevent storage of cookies by choosing a "disable cookies" option in your
        browser settings. But this can limit the functionality of our Internet offers as a result.`,
    'intl-page-privacy-section1-text-5-headline': 'Disclosure',
    'intl-page-privacy-section1-text-5-content-1': `According to the Federal Data Protection Act, you have a right to free-of-charge information
        about your stored data, and possibly entitlement to correction, blocking or deletion of such
        data. Inquiries can be directed to the following e-mail addresses:
        <a href='mailto:hello@ulrichmerkel.com' title='Send email to hello@ulrichmerkel.com'>hello@ulrichmerkel.com</a>`,

    // Page Imprint
    'intl-page-imprint-head-title': 'Imprint',
    'intl-page-imprint-head-description':
        'Legal details and information in accordance with section 5 TMG.',
    'intl-page-imprint-section1-headline': 'Imprint',
    'intl-page-imprint-section1-lead':
        'Legal details and information in accordance with section 5 TMG.',
    'intl-page-imprint-section1-text-1-headline': 'Publisher information',
    'intl-page-imprint-section1-text-1-content-1':
        'Person responsible for content in accordance with 55 Abs. 2 RStV:',
    'intl-page-imprint-section1-text-1-content-2': `Ust. (VAT) - Idnr. DE  235 248 02155<br />
        Amtsgericht Borna`,
    'intl-page-imprint-section1-address-name': 'Ulrich Merkel',
    'intl-page-imprint-section1-address-street-address': 'Neuer Weg 4B',
    'intl-page-imprint-section1-address-locality': 'Groitzsch, Germany',
    'intl-page-imprint-section1-address-postal-code': '04539',
    'intl-page-imprint-section1-address-email': 'hello@ulrichmerkel.com',
    'intl-page-imprint-section1-address-phone': '+49 (0) 178 300 4282',
    'intl-page-imprint-section1-address-phone-numbers': '+491783004282',
    'intl-page-imprint-section1-address-website': 'http://www.ulrichmerkel.com',

    'intl-page-imprint-section1-text-2-headline':
        'Indication of source for images and graphics',
    'intl-page-imprint-section1-text-2-content-1': `<a href='http://www.adrian-kuehne.de/' target='_blank' title='Show Adrian Kühne website' rel='noopener noreferrer'>
        <i aria-hidden='true' class='c-font-icon--earth'></i> http://www.adrian-kuehne.de/ (Adrian Kühne)
        </a>`,
    'intl-page-imprint-section1-text-3-headline': 'Technology',
    'intl-page-imprint-section1-text-3-content-1': `This website is build with React.js, Node.js, ${HTML5}, ${CSS3}, love and 100% recycled pixels.
        View <a href='https://github.com/ulrich-merkel/www.ulrichmerkel.com' target='_blank' title='Show source code on GitHub' rel='noopener noreferrer'>source code</a> on Github.`,

    // Page Notfound
    'intl-page-not-found-head-title': 'Page not found',
    'intl-page-not-found-head-description':
        "We can't find the page you are looking for",
    'intl-page-not-found-section1-headline': 'Oops - Page not found',
    'intl-page-not-found-section1-lead':
        "We can't find the page you are looking for",

    // Page
    'intl-work-optik-ludewig-head-title': 'Optik Ludewig Website',
    'intl-work-optik-ludewig-headline': 'Optik Ludewig',
    'intl-work-optik-ludewig-subline': 'Webdevelopment & Design',
    'intl-work-optik-ludewig-lead': 'Some coding and design',
    'intl-work-optik-ludewig-description':
        'Clean design with super simple Kirby CMS, focus on performance and microdata for good search rankings.',
    'intl-work-optik-ludewig-alt': 'Optik Ludewig website',
    'intl-work-optik-ludewig-link-title': 'Show Optik Ludewig website',

    // Page
    'intl-work-summer-inspiration-head-title': 'Summer Inspiration',
    'intl-work-summer-inspiration-headline': 'Summer Inspiration',
    'intl-work-summer-inspiration-subline':
        'Webdesign, coding and print design',
    'intl-work-summer-inspiration-lead': 'Some coding and design',
    'intl-work-summer-inspiration-description':
        'Coding, design and concept work for a small electronic open air.',
    'intl-work-summer-inspiration-alt': 'Summer Inspiration website',
    'intl-work-summer-inspiration-link-title':
        'Show Summer Inspiration website',

    // Page
    'intl-work-momentariness-head-title': 'Momentariness',
    'intl-work-momentariness-headline': 'Momentariness',
    'intl-work-momentariness-subline': 'Free design work',
    'intl-work-momentariness-lead': 'Digital collage',
    'intl-work-momentariness-description':
        'Design experiment dealing with momentariness.',
    'intl-work-momentariness-alt': 'Momentariness digital collage',

    // Page
    'intl-work-lebenswelt-schule-head-title': 'Lebenswelt Schule',
    'intl-work-lebenswelt-schule-headline': 'Lebenswelt Schule',
    'intl-work-lebenswelt-schule-subline': 'Webdesign',
    'intl-work-lebenswelt-schule-lead': 'Webdesign and coding',
    'intl-work-lebenswelt-schule-description':
        'Pro bono webdesign and coding for local montessori school, using zend based backend technologies.',
    'intl-work-lebenswelt-schule-alt': 'Lebenswelt Schule website',
    'intl-work-lebenswelt-schule-link-title': 'Show Lebenswelt Schule website',

    // Page
    'intl-work-revolution-head-title': 'Revolution',
    'intl-work-revolution-headline': 'Revolution',
    'intl-work-revolution-subline': 'Free design work',
    'intl-work-revolution-lead': 'Digital collage',
    'intl-work-revolution-description':
        'Design experiment for a song from Gil Scott Heron, completely build with type characters and some help from nasty brushes.',
    'intl-work-revolution-alt': 'Revolution digital collage',
    'intl-work-revolution-link-title': 'Show Lebenswelt Schule website',

    // Page
    'intl-work-verlegeservice-bunge-head-title': 'Verlegeservice Bunge',
    'intl-work-verlegeservice-bunge-headline': 'Verlegeservice Bunge',
    'intl-work-verlegeservice-bunge-subline': 'Webdevelopment & Design',
    'intl-work-verlegeservice-bunge-lead': 'Some coding and design',
    'intl-work-verlegeservice-bunge-description':
        'Small static website for local business Verlegeservice Peter Bunge - nothing special, just focused on providing information for all devices.',
    'intl-work-verlegeservice-bunge-alt': 'Verlegeservice Bunge website',
    'intl-work-verlegeservice-bunge-link-title':
        'Show Verlegeservice Bunge website',

    // Page
    'intl-work-gedanken-kollektiv-head-title': 'Gedanken Kollektiv',
    'intl-work-gedanken-kollektiv-headline': 'Gedanken Kollektiv',
    'intl-work-gedanken-kollektiv-subline': 'Webdesign and logo work',
    'intl-work-gedanken-kollektiv-lead': 'Some coding and design',
    'intl-work-gedanken-kollektiv-description':
        'Webdesign case study and logo work for a notional agency.',
    'intl-work-gedanken-kollektiv-alt': 'Gedanken Kollektiv website',
    'intl-work-gedanken-kollektiv-link-title':
        'Show Gedanken Kollektiv website',

    // Page
    'intl-broadcast-head-title': 'Some broadcast experiences',
    'intl-broadcast-head-description': 'Some broadcast experiences',
    'intl-broadcast-section1-headline': 'Some broadcast experiences',
    'intl-broadcast-section1-lead':
        'International and national broadcast productions',
    'intl-broadcast-virtual-graphics': 'Virtual Graphics',
    'intl-broadcast-tv-graphics': 'TV Graphics',
    'intl-broadcast-virtual-graphics-tv-graphics':
        'Virtual Graphics & TV Graphics',
    'intl-broadcast-tv-graphics-gps-tracking': 'TV Graphics & GPS Tracking',
    'intl-broadcast-timing-support': 'Timing & Support',
    'intl-broadcast-technical-supervisor': 'Technical Supervisor',
    'intl-broadcast-2012-list-1-name': '',
    'intl-broadcast-2012-list-1-job': '',
    'intl-broadcast-2012-list-1-place': '',

    // Page
    'intl-search-head-title': 'Search',
    'intl-search-head-description': 'Find page content by keywords',
    'intl-search-section1-headline': 'Search',
    'intl-search-section1-lead': 'Find page content by keywords',
    'intl-search-section1-no-results': 'Found 0 search results',
    'intl-search-section1-form-legend': 'Insert your search',
    'intl-search-section1-form-input-name': 'Your search term',

    // Menu
    'intl-menu-main-link-1-label': 'Work',
    'intl-menu-main-link-1-title': 'Show some work',
    'intl-menu-main-link-2-label': 'Persona',
    'intl-menu-main-link-2-title': 'Show information about my persona',
    'intl-menu-main-link-3-label': 'Contact',
    'intl-menu-main-link-3-title': 'Get in touch',

    'intl-menu-language-link-1-label': 'en',
    'intl-menu-language-link-1-title': 'Switch to english',
    'intl-menu-language-link-2-label': 'de',
    'intl-menu-language-link-2-title': 'Sprache in deutsch \u00E4ndern',

    'intl-menu-social-link-1-label': 'Xing',
    'intl-menu-social-link-1-title': 'Ulrich Merkel @ Xing',
    'intl-menu-social-link-2-label': 'Facebook',
    'intl-menu-social-link-2-title': 'Ulrich Merkel @ Facebook',
    'intl-menu-social-link-3-label': 'GitHub',
    'intl-menu-social-link-3-title': 'Ulrich Merkel @ GitHub',
    'intl-menu-social-link-4-label': 'Delicious',
    'intl-menu-social-link-4-title': 'Ulrich Merkel @ Delicious',

    'intl-menu-imprint-link-1-label': 'Disclaimer',
    'intl-menu-imprint-link-1-title': 'Disclaimer',
    'intl-menu-imprint-link-2-label': 'Imprint',
    'intl-menu-imprint-link-2-title': 'Imprint',
    'intl-menu-imprint-link-3-label': 'Privacy',
    'intl-menu-imprint-link-3-title': 'Privacy',

    'intl-menu-button-toggle-label': 'Menu',
    'intl-menu-button-toggle-title': 'Show or hide menu',
    'intl-menu-button-search-label': 'Show search',
    'intl-menu-button-search-title': 'Search',

    // Common
    'intl-default-title': 'Ulrich Merkel - Web Developer',
    'intl-default-description':
        'Hello, my name is Ulrich Merkel. I am a Frontend Developer. I love creating code and design that push the boundries of what the web can do.',
    'intl-default-keywords': 'Ulrich Merkel, Webdesign, Design, UX, Coding',
    'intl-btn-scroll-down-label': 'Scroll down',
    'intl-btn-scroll-down-title': 'Scroll down',
    'intl-btn-scroll-top-label': 'Scroll to top',
    'intl-btn-scroll-top-title': 'Scroll to top',
    'intl-btn-back-to-start-page-label': 'Back to startpage',
    'intl-btn-back-to-start-page-title': 'Go to startpage',
    'intl-btn-close-dialog-label': 'Close dialog',
    'intl-btn-open-dialog-title': 'Close dialog',

    'intl-now': 'Now',
    'intl-today': 'Today',
    'intl-loading': 'Loading',
    'intl-frontend-web-developer': 'Frontend Web Developer',
    'intl-ulrich-merkel': 'Ulrich Merkel',
    'intl-img-alt': 'Ulrich Merkel'
};
/* eslint-enable max-len */
