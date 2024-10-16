import PageHeader from '@/components/Common/PageHeader/PageHeader'
import EmpowerChat from '@/components/EmpowerChat/EmpowerChat'
import React from 'react'

export default function EmpowerChats() {
  return (
      <>
          <PageHeader title={'Empower Chat'} currentPage={'EmpowerChat'} description={''} />
          <EmpowerChat/>
      </>
  )
}
