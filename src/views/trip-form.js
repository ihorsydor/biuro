import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TimePicker,
  Tabs,
} from 'antd';
import { MinusOutlined, PlusOutlined, DatabaseOutlined } from '@ant-design/icons';
import firebase from '../config';
import * as uuid from 'uuid';

export const TripForm = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [formValues, setFormValues] = useState();
  const [daysCount, setDaysCount] = useState(1);

  const onValuesChange = (values) => {
    console.log(values)
    if (values.begining) {
      const dates = values.begining;
      const days = dates[1].diff(dates[0], 'days', false) + 1;
      setDaysCount(days);
    } else if (values.days) {
      setDaysCount(values.days)
    }
    setFormValues({ ...formValues, ...values });
  };

  const handleSubmit = (values) => {
    console.log(values);
    firebase.database().ref('trips').push({ ...values, id: uuid.v4() }).then(data => {
      alert('Data submitted')
      console.log(data)
    })
  }


  return (
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
        days: 1,
      }}
      onValuesChange={onValuesChange}
      size={componentSize}
      onFinish={handleSubmit}
    >
      <Form.Item label="Nazwa Imprezy" name="name"  rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Status" name="status" rules={[{ required: true }]}>
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

      <Form.Item label="Kierunek" name="direction" rules={[{ required: true }]}>
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

      <Form.Item label="Ilość uczestników/pilot/kierowcy" name="numberOfPeople" rules={[{ required: true }]}>
        <InputNumber /><InputNumber name="numberOfPeople" /><InputNumber name="numberOfPeople" />
      </Form.Item>

      <Form.Item label="Wszystkie notatki" name="notes" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Folder" name="folder" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Trasa" name="route" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item label="Data imprezy" name="begining" rules={[{ required: true }]}>
        <DatePicker.RangePicker />
      </Form.Item>

      <Form.Item label="Ilość dni" name="days" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>

      <Tabs>
        {Array(parseInt(daysCount, 10)).fill('0').map((item, index) =>
          <Tabs.TabPane tab={`Day ${index + 1}`} key={index.toString()}>
            <Form.Item label="Hotel" name={`hotel_${index}`} rules={[{ required: true }]}>
              <Select>
                <Select.Option value="lviv">Hotel Lwów</Select.Option>
                <Select.Option value="george">Hotel George</Select.Option>


              </Select>
              {/* Wybierz z Bazy <DatabaseOutlined />Usuń hotel<MinusOutlined />Dodaj kolejny hotel<PlusOutlined /> */}
            </Form.Item>

            <Form.Item label="Restaurant" name={`restaurant${index}`} rules={[{ required: true }]}>

              <Select>
                <Select.Option value="lviv1rest">Restauracja 1</Select.Option>
                <Select.Option value="lviv2rest">Restauracja 2</Select.Option>

              </Select>

            </Form.Item>

            <Form.Item label="Godziny posiłku" name={`diningHours${index}`} rules={[{ required: true }]}>
              <TimePicker.RangePicker />
            </Form.Item>



            <Form.Item label="Pilot" name={`pilot${index}`} rules={[{ required: true }]}>

              <Select>
                <Select.Option value="namepilot1">Pilot1</Select.Option>
                <Select.Option value="namepilot2">Pilot2</Select.Option>

              </Select>
            </Form.Item>


            <Form.Item label="Przewodnik" name={`quide${index}`} rules={[{ required: true }]}>

              <Select>
                <Select.Option value="nameguide1">Restauracja 1</Select.Option>
                <Select.Option value="nameguide2">Restauracja 2</Select.Option>

              </Select>

              <Form.Item label="Godziny pracy przewodnika" name={`guideWorkHours${index}`} rules={[{ required: true }]}>
                <TimePicker.RangePicker />
              </Form.Item>
            </Form.Item>

            <Form.Item label="Transport" name={`transport${index}`} rules={[{ required: true }]}>

              <Select>
                <Select.Option value="transport1">Przewośnik1</Select.Option>
                <Select.Option value="transport2">Przewoźnik2</Select.Option>

              </Select>
            </Form.Item>
            <Form.Item label="Kierowca" name={`driver${index}`} rules={[{ required: true }]}>
              <Select>
                <Select.Option value="kierowca1">Driver 1</Select.Option>
                <Select.Option value="kierowca2">Driver 2</Select.Option>

              </Select>
            </Form.Item>
            <Form.Item label="Godziny pracy transportu" name={`transportWorkHours${index}`} rules={[{ required: true }]}>
              <TimePicker.RangePicker />
              Dodaj  kolejnego kierowcę <PlusOutlined />
              Dodaj  kolejnego przewoźnika <PlusOutlined />
              Usuń kierowcę<MinusOutlined />
              Usuń przewoźnika<MinusOutlined />
              Wybierz z bazy kierowcę <DatabaseOutlined />
              Wybierz z bazy przewoźnika <DatabaseOutlined />


            </Form.Item>

            <Form.Item label="Trasa" name={`route${index}`} rules={[{ required: true }]}>
              <Select mode="tags" />
            </Form.Item>


            <Form.Item label="Inne" name={`other${index}`} rules={[{ required: true }]}>
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
            </Form.Item>
          </Tabs.TabPane>
        )}
      </Tabs>

      <Form.Item label="Button">
        <Button type="primary" style={{ width: '100px' }} htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};