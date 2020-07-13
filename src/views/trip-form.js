import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TimePicker,
  TreeSelect,
  Switch,
} from 'antd';
import { MinusOutlined, PlusOutlined, DatabaseOutlined } from '@ant-design/icons';

export const TripForm = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Nazwa Imprezy">
          <Input />
        </Form.Item>
        <Form.Item label="Status">
          <Select>
            <Select.Option value="zapytanie">Zapytanie</Select.Option>
            <Select.Option value="zapytanieBezDaty">Zapytanie bez daty</Select.Option>
            <Select.Option value="wstepniePotwierdzona">Wstępnie potwierdzona</Select.Option>
            <Select.Option value="potwierdzona">Impreza potwierdzona</Select.Option>
            
        
          </Select>
          </Form.Item>
            
          <Form.Item label="Cała trasa">
          <Select mode="tags" />
        </Form.Item>

        <Form.Item label="Kierunek">
          <Cascader
             
             options={[
               {
                 value: 'country',
                 label: 'Ukraina',
                 children: [
                   {
                     value: 'city',
                     label: 'Lwów',
                   },
                 ],
               },
             ]}
           />
        </Form.Item>

        <Form.Item label="Ilość uczestników/pilot/kierowcy">
          <InputNumber /><InputNumber /><InputNumber />
        </Form.Item>
        
        <Form.Item label="Wszystkie notatki">
          <Input />
        </Form.Item>

        <Form.Item label="Folder">
          <Input />
        </Form.Item>

        <Form.Item label="Trasa">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Data imprezy">
          <DatePicker.RangePicker />
        </Form.Item>

        <Form.Item label="Ilość dni">
          <InputNumber />
        </Form.Item>
    

        <Form.Item label="Hotel">
          <Select>
            <Select.Option value="lviv">Hotel Lwów</Select.Option>
            <Select.Option value="george">Hotel George</Select.Option>
            
        
          </Select>
          Wybierz z Bazy <DatabaseOutlined />Usuń hotel<MinusOutlined />Dodaj kolejny hotel<PlusOutlined />
          </Form.Item>

          <Form.Item label="Restaurant">
              
          <Select>
            <Select.Option value="lviv1rest">Restauracja 1</Select.Option>
            <Select.Option value="lviv2rest">Restauracja 2</Select.Option>
        
          </Select> 
          Usuń restaurację<MinusOutlined />
          <Form.Item label="Godziny posiłku">
          <TimePicker.RangePicker />
          Wybierz z Bazy <DatabaseOutlined />
          Dodaj kolejną  restaurację <PlusOutlined />
          </Form.Item>
          </Form.Item>

         

          <Form.Item label="Pilot">
              
              <Select>
                <Select.Option value="namepilot1">Pilot1</Select.Option>
                <Select.Option value="namepilot2">Pilot2</Select.Option>
            
              </Select> 
              Usuń pilota<MinusOutlined />
              Wybierz z Bazy <DatabaseOutlined />
              Dodaj  kolejnego pilota <PlusOutlined />
              </Form.Item>
             
             
              <Form.Item label="Przewodnik">
              
              <Select>
                <Select.Option value="nameguide1">Restauracja 1</Select.Option>
                <Select.Option value="nameguide2">Restauracja 2</Select.Option>
            
              </Select> 
              Usuń przewodnika<MinusOutlined />
              <Form.Item label="Godziny pracy przewodnika">
              <TimePicker.RangePicker />
              Wybierz z Bazy <DatabaseOutlined />
              Dodaj  kolejnego przewodnika <PlusOutlined />
              </Form.Item>
              </Form.Item>

              <Form.Item label="Transport">
              
              <Select>
                <Select.Option value="transport1">Przewośnik1</Select.Option>
                <Select.Option value="transport2">Przewoźnik2</Select.Option>
            
              </Select> 

              <Select>
                <Select.Option value="kierowca1">Driver 1</Select.Option>
                <Select.Option value="kierowca2">Driver 2</Select.Option>

              </Select> 
              <Form.Item label="Godziny pracy transportu">
              <TimePicker.RangePicker />
              Dodaj  kolejnego kierowcę <PlusOutlined />
              Dodaj  kolejnego przewoźnika <PlusOutlined />
              Usuń kierowcę<MinusOutlined />
              Usuń przewoźnika<MinusOutlined />
              Wybierz z bazy kierowcę <DatabaseOutlined />
              Wybierz z bazy przewoźnika <DatabaseOutlined />
              
             
              </Form.Item>

              <Form.Item label="Trasa">
                <Select mode="tags" />
              </Form.Item>
              </Form.Item>

              <Form.Item label="Inne">
          <Cascader
             
             options={[
               {
                 value: 'kapela',
                 label: 'Kapela1',
                 children: [
                   {
                     value: 'batiary',
                     label: 'Batiary',
                   },
                   {
                    value: 'nadrabyni',
                    label: 'Na Drabyni',
                  },
                 ],
               },
               {
                value: 'muzeum',
                label: 'Muzeum',
                children: [
                  {
                    value: 'opera',
                    label: 'Opera',
                  },
                  {
                   value: 'wloskie',
                   label: 'Włoskie podwórko',
                 },
                ],
              },
             ]}
           />
              Usuń przewodnika<MinusOutlined />
              <Form.Item label="Godziny pracy przewodnika">
              <TimePicker.RangePicker />
              Wybierz z Bazy <DatabaseOutlined />
              Dodaj  kolejnego przewodnika <PlusOutlined />
              </Form.Item>
              </Form.Item>


        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};