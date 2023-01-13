import React from 'react'
import { Input, Button } from 'antd';

const NewProject = () => {
  return (
    <div>
        <br />
        <Input id='url-search' placeholder="Page URL" />
        <Button type="primary" htmlType="submit" className="submit-url">Upload</Button>
        <br />
    </div>
  )
}

export default NewProject