import { colors } from '@ui-orion/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
            fontFamily: 'monospace',
            justifyContent: 'space-between',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
