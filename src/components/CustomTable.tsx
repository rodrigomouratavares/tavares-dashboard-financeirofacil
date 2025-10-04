import styled from 'styled-components'
import { CustomTableProps } from '@/types'
import { pxToRem } from '@/utils'

export const TablleWrapper = styled.header`
  overflow-x: auto;
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;
  .ellipsis {
  display: block;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  }

  .ellipsis-sm {
    width: ${pxToRem(130)};
  }

   .ellipsis-xs {
    width: ${pxToRem(150)};
  }


    th,
    td {
      height: ${pxToRem(48)};
      padding: 0 ${pxToRem(8)} 0 0;
      text-align: left;
      &:last-child{
      text-align:right;
      padding:0;
      
      }
    }
      th {
        color:  background-color: ${(props) => props.theme.typographies.subtitle};
        font-weight:600;

      }

        tr{
        border-bottom : ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
         &:last-child{
      text-align:right;
         border-bottom:none;        }
  }
`
function CustomTable(props: CustomTableProps) {
  const { headers, rows } = props
  return (
    <TablleWrapper>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TablleWrapper>
  )
}

export default CustomTable
