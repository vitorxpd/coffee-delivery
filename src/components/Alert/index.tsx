import * as AlertDialog from '@radix-ui/react-alert-dialog'

import * as S from './styles'

interface AlertProps {
  description: string
  onToggleAlert: () => void
}

export function Alert({ description, onToggleAlert }: AlertProps) {
  function handleToggleAlert() {
    onToggleAlert()
  }

  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay />
      <S.Content>
        <S.Title>Atenção!</S.Title>
        <S.Description>{description}</S.Description>
        <S.Cancel onClick={handleToggleAlert}>OK</S.Cancel>
      </S.Content>
    </AlertDialog.Portal>
  )
}
