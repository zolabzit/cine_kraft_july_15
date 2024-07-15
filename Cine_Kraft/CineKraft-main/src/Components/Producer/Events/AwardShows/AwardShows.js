import React from 'react';
import { Tabs } from 'antd';
import AwardShowsList from './AwardShowsList';
import AwardShowsCards from './AwardShowsCards';
import { Container } from 'react-bootstrap';

const { TabPane } = Tabs;

const items = [
  {
    key: '1',
    label: 'List',
    children: <AwardShowsList/>,
  },
  {
    key: '2',
    label: 'Cards',
    children: <AwardShowsCards/>,
  },
];

const onChange = (key) => {
  console.log(key);
};

function AwardShows() {
  return (
   <Container>
     <div>
      <h4 className="mt-3 mb-3">Award Shows</h4>
    
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

export default AwardShows;
