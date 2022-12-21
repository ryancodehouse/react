import React from 'react';
import Tabs from '.';
import Tab from './Tab'
import TabPanel from './TabPanel'


function TabsPage() {
    return (
        <div>
            <Tabs id={1} ariaLabel="miscellaneous">
                <Tab>First Tab</Tab>
                <Tab>Second Tab</Tab>
                <Tab>Third Tab</Tab>
                <TabPanel>
                    <p>First Hidden Text Area</p>
                </TabPanel>
                <TabPanel>
                    <p>Second Hidden Text Area</p>
                </TabPanel>
                <TabPanel>
                    <p>Third Hidden Text Area</p>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default TabsPage;
