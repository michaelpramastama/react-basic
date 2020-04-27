import React, { Component } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
    console.log(time, timeString);
}

export default class contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </div>
        );
    }
}