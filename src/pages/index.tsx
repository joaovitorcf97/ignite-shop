import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 8,
  border: 'none',
  padding: '4px 8px',

  '&:hover': {
    filter: 'brightness(0.8)',
    cursor: 'pointer'
  }
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}
