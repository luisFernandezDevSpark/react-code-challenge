import React from 'react'
import ListItem from './ListItem'
import DestList from './DestList'

class SrcList extends React.Component {
  state = {
    srcList: [
      'all their equipment and instruments are alive',
      'a red flare silhouetted the jagged edge of a wing',
      'they watched the storm, so beautiful yet terrific'
    ],
    destList: []
  }

  render () {
    return (
      <>
        <ul>
          {this.state.srcList.map(item => (
            <ListItem string={item} />
          ))}
        </ul>
        <DestList list={this.state.destList} />
      </>
    )
  }
}

export default SrcList