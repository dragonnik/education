import type { NamePath } from 'antd/lib/form/interface';
import React from 'react';
declare const ProFormContext: React.Context<{
    getFieldsFormatValue?: ((nameList?: true | NamePath[] | undefined) => any) | undefined;
    getFieldFormatValue?: ((nameList?: NamePath | undefined) => any) | undefined;
}>;
export default ProFormContext;
