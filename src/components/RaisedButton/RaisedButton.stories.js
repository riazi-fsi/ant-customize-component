import React from "react";
// import 'antd/dist/antd.css';
import RaisedButton from "./RaisedButton";
import { SearchOutlined } from '@ant-design/icons';
export default {
    title: 'ReactComponent/RaisedButton',
    component: RaisedButton,
};

const Template = (args) => <RaisedButton {...args} />;

export const normal = Template.bind({});
normal.args = {
    label: "Click me!!",
    disabled: false,

};
export const disabled = Template.bind({});
disabled.args = {
    label: "Click me!!",
    disabled: true,
};
export const shape = Template.bind({});
shape.args = {
    label: "...",
    disabled: false,
    shape: "circle",
};

export const icon = Template.bind({});
icon.args = {
    label: "Click me!!",
    disabled: false,
    icon:<SearchOutlined />,

};

export const block = Template.bind({});
block.args = {
    label: "Click me!!",
     disabled: false,
     block:true,

};

export const custom = Template.bind({});
custom.args = {
    label: "Click me!!",
    disabled: false,
    style: {width: '100px', color: 'red', fontSize: '12px', fontWeight: 'bolder'},

};
