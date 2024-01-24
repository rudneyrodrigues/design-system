import '../styles/tokens-grid.css'

interface TokensGridProps {
  hasRemValue?: boolean
  tokens: Record<string, string>
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Medida em Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr
            key={name}
            style={{
              height: '3rem',
            }}
          >
            <td>{name}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
