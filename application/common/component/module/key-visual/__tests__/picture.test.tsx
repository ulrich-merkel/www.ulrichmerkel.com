import * as React from 'react';
import { render } from '../../../../../__tests__/utils/test-utils';
import { ModuleKeyVisualPicture } from '../picture';

describe('ModuleKeyVisualPicture', function fnDescribe() {
    const props = {
        img: {
            name: 'keyvisual',
            ext: 'jpg',
            path: '/img/content/home/',
            alt: 'foo',
            sizes: [
                {
                    width: 2560,
                    height: 1600,
                    minWidth: 2560
                },
                {
                    width: 1680,
                    height: 1050,
                    minWidth: 1680
                },
                {
                    width: 1440,
                    height: 960,
                    minWidth: 1440
                }
            ]
        }
    };

    it('should render correctly', function fnIt() {
        const { asFragment } = render(<ModuleKeyVisualPicture {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render null if no content is provided', function fnIt() {
        const { asFragment } = render(
            <ModuleKeyVisualPicture
                {...props}
                img={{
                    alt: 'foo',
                    sizes: [
                        {
                            width: 2560,
                            height: 1600,
                            minWidth: 2560
                        },
                        {
                            width: 1680,
                            height: 1050,
                            minWidth: 1680
                        },
                        {
                            width: 1440,
                            height: 960,
                            minWidth: 1440
                        }
                    ]
                }}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render type and isCovered if given', function fnIt() {
        const { asFragment } = render(
            <ModuleKeyVisualPicture {...props} type="digital" isCovered />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
