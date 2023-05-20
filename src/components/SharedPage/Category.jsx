import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCart from './CategoryCart';



const Category = () => {
    const [category, setCategory] = useState("mathToys");
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allCategories/${category}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [category])
    const handleTab = (categoryParameter) => {
        setCategory(categoryParameter)
    }
    return (
        <div>
            <Tabs className="text-center">
                <TabList className='text-2xl font-serif font-extralight pt-10'>
                    <Tab onClick={() => handleTab("mathToys")}>Engineering Toys</Tab>
                    <Tab onClick={() => handleTab("engineeringKits")}>Science Toys</Tab>
                    <Tab onClick={() => handleTab("scienceKits")}>Math Toys</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                        {
                            data?.map(data => <CategoryCart data={data}></CategoryCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                        {
                            data?.map(data => <CategoryCart data={data}></CategoryCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                        {
                            data?.map(data => <CategoryCart data={data}></CategoryCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;