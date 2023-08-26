import React from 'react'
import CodehubNavMenu from '../../Components/Menu/CodehubNavMenu'
import { CodeManagerPageWrapper } from './CodeHub.styles'

import AlgorithmTypeTabs from '../../Components/Tabs/CodeManagementSystemTabs/AlgorithmsTabs'


export default function CodeHub() {
  return (
    <CodeManagerPageWrapper>
        <CodehubNavMenu />
        <div className='codePage_base_container'>
            <AlgorithmTypeTabs/>
        </div>
    </CodeManagerPageWrapper>
  )
}
