import '../styles/ResultTable.css'
const ResultTable = () => {
  return (
    <div className="container">
           <table>
                 <thead className="table-header">
                      <tr className="table-row" >
                           <td>Name</td>
                           <td>Attempt</td>
                           <td>Earn Points</td>
                           <td>Result</td>
                      </tr>
                 </thead>
                 <tbody>
                      <tr className="table-body" >
                            <td>Daily tution</td>
                            <td>03</td>
                            <td>20</td>
                            <td>Passed</td>
                      </tr>
                 </tbody>
           </table>
    </div>
  )
}

export default ResultTable
