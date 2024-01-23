import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$primary300',
  color: '$zinc50',
  borderRadius: '$full',
  padding: '$4',
  '&:hover': {
    backgroundColor: '$primary500',
  },
})

export function App() {
  return <Button>Olá mundo</Button>
}
