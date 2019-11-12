import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Tab, TabList, TabPanel} from '../..';

class FancyDemo extends React.Component {
  render() {
    return (
      <Wrapper letterNavigation={true}>
        <TabList>
          <ul className='FancyTabs-tablist'>
            <li className='FancyTabs-tablistItem'>
              <Tab id='t1' className='FancyTabs-tab'>
                {demoTab.bind(null, (
                  <div>
                    <span className='FancyTabs-tabIcon FancyTabs-tabIcon--map' />
                    <span className='FancyTabs-tabText'>
                      Maps
                    </span>
                  </div>
                ))}
              </Tab>
            </li>
            <li className='FancyTabs-tablistItem'>
              <Tab id='t2' className='FancyTabs-tab'>
                {demoTab.bind(null, (
                  <div>
                    <span className='FancyTabs-tabIcon FancyTabs-tabIcon--megaphone' />
                    <span className='FancyTabs-tabText'>
                      Megaphones
                    </span>
                  </div>
                ))}
              </Tab>
            </li>
            <li className='FancyTabs-tablistItem'>
              <Tab id='t3' className='FancyTabs-tab'>
                {demoTab.bind(null, (
                  <div>
                    <span className='FancyTabs-tabIcon FancyTabs-tabIcon--trophy' />
                    <span className='FancyTabs-tabText'>
                      Trophies
                    </span>
                  </div>
                ))}
              </Tab>
            </li>
          </ul>
        </TabList>
        <div className='FancyTabs-panel'>
          <TabPanel tabId='t1'>
            <div className='FancyTabs-panelInner'>
              Lorem <a href='#'>ipsum</a> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </TabPanel>
          <TabPanel tabId='t2'>
            <div className='FancyTabs-panelInner'>
              Ut <a href='#'>enim</a> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </TabPanel>
          <TabPanel tabId='t3'>
            <div className='FancyTabs-panelInner'>
              Duis <a href='#'>aute</a> irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </TabPanel>
        </div>
      </Wrapper>
    );
  }
}

ReactDOM.render(
  <FancyDemo />,
  document.getElementById('fancy-demo')
);

function demoTab(content, tabState) {
  let cl = 'FancyTabs-tabInner';
  if (tabState.isActive) cl += ' is-active';
  return (
    <div className={cl}>
      {content}
    </div>
  );
}
