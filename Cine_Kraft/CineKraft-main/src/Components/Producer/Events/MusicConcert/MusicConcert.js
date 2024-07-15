import React from 'react';
import { Tabs } from 'antd';
import MusicConcertsList from './MusicConcertsList';
import MusicConcertsCards from './MusicConcertsCards';
import { Container } from 'react-bootstrap';

const { TabPane } = Tabs;

const items = [
  {
    key: '1',
    label: 'Concert Lists',
    children: <MusicConcertsList/>,
  },
  {
    key: '2',
    label: 'Concert Cards',
    children: <MusicConcertsCards/>,
  },
];

const onChange = (key) => {
  console.log(key);
};

function MusicConcert() {
  return (
  <Container>
      <div>
      <h4 className="mt-3 mb-3">Music Concert</h4>
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

export default MusicConcert;
