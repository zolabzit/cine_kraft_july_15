import React from 'react';
import { Tabs } from 'antd';
import AudioLaunchList from './AudioLaunchList';
import AudioLaunchCards from './AudioLaunchCards';
import {Container} from "react-bootstrap";

const { TabPane } = Tabs;

const items = [
  {
    key: '1',
    label: 'Lists',
    children: <AudioLaunchList/>,
  },
  {
    key: '2',
    label: 'Cards',
    children: <AudioLaunchCards/>,
  },
];

const onChange = (key) => {
  console.log(key);
};

function AudioLaunch() {
  return (
   <Container>
     <div>
      <h4 className="mt-3 mb-3">Audio Launch</h4>
      <Tabs defaultActiveKey="1" onChange={onChange} style={{fontFamily: "'Philosopher', sans-serif"}}>
        {items.map((item) => (
          <TabPane key={item.key} tab={item.label}>
            {item.children}
          </TabPane>
        ))}
      </Tabs>
      <hr />
    </div>
   </Container>
  );
}

export default AudioLaunch;
