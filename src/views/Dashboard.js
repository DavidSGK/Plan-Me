import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { merge, slice } from 'ramda';
import AddEvent from '../components/AddEvent';

//Test code
var sample = new Array(672).fill(null);

sample[54] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[55] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[56] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};

sample[95] = {duration: 1, title: 'test2', description: 'this is a description', priority: 1};

sample[96] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};
sample[97] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};

sample[54] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[55] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[56] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};

sample[95] = {duration: 1, title: 'test2', description: 'this is a description', priority: 1};

sample[96] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};
sample[97] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};

sample[154] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[155] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[156] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};

sample[195] = {duration: 1, title: 'test2', description: 'this is a description', priority: 1};

sample[196] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};
sample[197] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};

sample[254] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[255] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[256] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};

sample[295] = {duration: 1, title: 'test2', description: 'this is a description', priority: 1};

sample[296] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};
sample[297] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};

sample[354] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[355] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[356] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};

sample[395] = {duration: 1, title: 'test2', description: 'this is a description', priority: 1};

sample[396] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};
sample[397] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};

sample[454] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[455] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[456] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};

sample[495] = {duration: 1, title: 'test2', description: 'this is a description', priority: 1};

sample[496] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};
sample[497] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};

sample[554] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[555] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[556] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};

sample[595] = {duration: 1, title: 'test2', description: 'this is a description', priority: 1};

sample[596] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};
sample[597] = {duration: 2, title: 'test3', description: 'this is a description', priority: 1};

sample[654] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[655] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};
sample[656] = {duration: 3, title: 'test1', description: 'this is a description', priority: 1};

const topSpace = {
  paddingTop : 64,
};

const fabStyle = {
  position : 'fixed',
  right : 0,
  bottom : 0,
  margin : '5%',
};

const tableStyle = {
  position : 'absolute',
  margin : '3%',
  marginTop : '0',
  border : '1 solid black',
  borderCollapse : 'collapse',
  tableLayout : 'fixed',
  width : '94%',
}

const headerTableStyle = {
  width : '94%',
  height : '5%',
  position : 'absolute',
  margin : '3%',
  marginBottom : '0',
  border : '1 solid black',
  borderCollapse : 'collapse',
  tableLayout : 'fixed',
}

const thContents = [
  '',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const emptyRow = ['', '', '', '', '', '', ''];

const cellStyle = {
  border : '1px solid black',
  borderCollapse : 'collapse',
  padding : 15,
  width : '12.5%',
  fontSize : '80%',
  fontWeight : 100,
};

const timeCellStyle = {
  border : '1px solid black',
  borderCollapse : 'collapse',
  padding : 3,
  textAlign : 'right',
  verticalAlign : 'top',
  width : 'auto',
  fontSize : '60%',
  fontWeight : 100,
}

const timeList = [
  '12 AM',
  '1 AM',
  '2 AM',
  '3 AM',
  '4 AM',
  '5 AM',
  '6 AM',
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 PM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
  '8 PM',
  '9 PM',
  '10 PM',
  '11 PM',
  '12 AM',
];

const calendarPane = {
  width : '65%',
  height : '80%',
  position : 'absolute',
  bottom : '7%',
  right : '5%',
};

const calendarDiv = {
  width : '100%',
  position : 'relative',
  overflow : 'auto',
};

const eventBlock = {
  width : '12.5%',
  position : 'absolute',
  background : 'red',
};

var i, j, k;

const days = new Array(7);
for(i = 0; i < 7; i++){
  console.log()
  days[i] = slice(i * 96, (i+1) * 96, sample);
  for(j = 0; j < 96; j++){
    if(j == 0 && days[i][0] != null && (days[i][days[i][0].duration-1] == null || days[i][0].title != days[i][days[i][0].duration-1].title)){
      days[i][0].duration--;
      j--;
      continue;
    } else if(j == 0){
      while(days[i][j] != null){
        j++;
        days[i][j] = null;
      }
      j = 0;
    }
    if(days[i][j] != null){
      if(j + days[i][j].duration <= 96){
        for(k = 1; k < days[i][j].duration; k++){
          days[i][j+k] = null;
        }
      } else {
        days[i][j].duration -= (j + days[i][j].duration - 96);
        j--;
        continue;
      }
    }
  }
};

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({isOpen: true});
  };

  handleClose() {
    this.setState({isOpen: false});
  };

  render() {
    return (
      <div style={topSpace}>
        <Paper style={calendarPane}>
          <div style={merge(calendarDiv, {height : '10%',})}>
            <table style={headerTableStyle}>
              <tbody>
                <tr>
                  {thContents.map((thContent, i) => <th key={i} style={merge(cellStyle, {padding : 3,})}>{thContent}</th>)}
                </tr>
              </tbody>
            </table>
          </div>
          <div style={merge(calendarDiv, {height : '90%',})}>
            <table style={tableStyle}>
              <tbody>
                {timeList.map(function(a, i){
                  return <tr key={i}>
                    <th key={i+200} style={timeCellStyle}>{a}</th>
                    {emptyRow.map((emptyRow, j) => <td key={j} style={cellStyle}>{emptyRow}</td>)}
                  </tr>
                })}
              </tbody>
              {days.map(function(a, i){
                return days[i].filter(b => b !== null).map(function(b, j){
                  /*console.log(eventBlock, b.duration * 4.167, j * 4.167, (i + 1) * 12.5);
            console.log('hi');*/
                  return <div key={j} style={merge(eventBlock, {
                    height : `${b.duration * 4.167}%`,
                    top : `${j * 4.167}%`,
                    left : `${(i + 1) * 12.5}%`})
                  }>Hello World</div>;})
                divs.map(function(b, j){
                  return b;
                })
              })}
            </table>
          </div>
        </Paper>

        <FloatingActionButton
          style={fabStyle}
          onClick={this.handleOpen}
        >
          <ContentAdd />
        </FloatingActionButton>

        <AddEvent
          isOpen={this.state.isOpen}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />

      </div>
    );
  }
}

export default Dashboard;
