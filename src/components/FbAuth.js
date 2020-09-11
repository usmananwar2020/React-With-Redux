import React, { Component} from 'react';
import './User.css'
import { FacebookProvider, Share } from 'react-facebook';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Tooltip from '@material-ui/core/Tooltip';
class FbAuth extends Component {
  render() {
    return (
      <FacebookProvider appId="312520539835461">
        <Share href={this.props.share}>
          {({ handleClick, loading }) => (
            <Tooltip title="Share on Facebook">
            <ShareOutlinedIcon  type="button" disabled={loading} onClick={handleClick}>Share
             </ShareOutlinedIcon></Tooltip>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}
export default FbAuth;