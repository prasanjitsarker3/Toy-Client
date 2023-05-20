import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Category = () => {
    return (
        <div>
            <Tabs className="text-center">
                <TabList>
                    <Tab>Engineering Toys</Tab>
                    <Tab>Science Toys</Tab>
                    <Tab>Math Toys</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;