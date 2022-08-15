import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabProduto.css';
import ListaProdutoTab from '../listaprodutotab/ListaProdutotab';


function TabProduto() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
       
        <TabPanel value="1" >
          <Box  className='tab'>
            <ListaProdutoTab />
          </Box>
        </TabPanel>
       
      </TabContext>
    </>
  );
}
export default TabProduto;