import React from 'react'
import { Input, Button } from 'antd';
import { useState } from 'react';

const NewProject = () => {

    const [url, setUrl] = useState('');

    const handleChange = (e) => {
        setUrl(e.target.value);
    }


    return (
        <div>
            <br />
            <Input id='url-search' placeholder="Page URL" />
            <Button type="primary" htmlType="submit" className="submit-url" onChange={setUrl}>Upload</Button>
            <br />
        </div>
    )
}

export default NewProject