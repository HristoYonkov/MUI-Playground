import SkeletonPage from '@/components/features/SkeletonPage'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import FormDialog from '@/components/shared/FormDialog'
import { SubmitHandler } from 'react-hook-form'
import UsersTable from '@/components/features/main/UsersTable'

export default function Users() {
  const { t: translate } = useTranslation()
  const [openDialog, setOpenDialog] = useState(false)

  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const onCloseDialog = () => {
    setOpenDialog(false)
  }

  // const handleSubmit: SubmitHandler<NewZoneFormData> = (data) => {
  //   console.log(data)
  //   onCloseDialog()
  // }

  return (
    <>
      <SkeletonPage
        // TODO: Add corect translation! Discuss it with Boyadzhiev.
        header={translate('Потребители')}
        description={translate('Управление на потребители')}
        buttonText={translate('нов потребител')}
        buttonClickHandler={handleClickOpen}
        table={<UsersTable />}
      />

      {/* <FormDialog<NewZoneFormData>
        open={openDialog}
        title={translate('newZone.title')}
        discardText={translate('newZone.labels.exit')}
        confirmText={translate('newZone.labels.create')}
        onCloseDialog={onCloseDialog}
        schema={newZoneSchema}
        onSubmit={handleSubmit}
        renderForm={(methods) => <NewZoneContentForm {...methods} />}
      /> */}
    </>
  )
}
