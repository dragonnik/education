import React from 'react';
import type { FooterRender } from '@ant-design/pro-form/src/interface';
import './index.less';
declare type OnClick = (e?: React.MouseEvent) => void;
export declare type DropdownFooterProps = {
    onClear?: OnClick;
    onConfirm?: OnClick;
    disabled?: boolean;
    footerRender?: FooterRender;
};
declare const DropdownFooter: React.FC<DropdownFooterProps>;
export default DropdownFooter;
