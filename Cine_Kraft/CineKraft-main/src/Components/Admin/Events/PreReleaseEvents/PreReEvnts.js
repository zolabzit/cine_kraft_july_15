import React from 'react';
import { Tabs } from 'antd';
import PreReEvntsList from './PreReEvntsList';
import PreReEvntsCards from './PreReEvntsCards';
import {Container} from "react-bootstrap";

const { TabPane } = Tabs;

const items = [
  {
    key: '1',
    label: 'Lists',
    children: <PreReEvntsList/>,
  },
  {
    key: '2',
    label: 'Cards',
    children: <PreReEvntsCards/>,
  },
];

const onChange = (key) => {
  console.log(key);
};

function PreReEvnts() {
  return (
    <Container>
      <div>
      <h4 className="mt-3 mb-3">Pre Release Events</h4>
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

export default PreReEvnts;
