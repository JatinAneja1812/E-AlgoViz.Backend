import React from 'react';
import { Row, Input, Button } from 'antd';

const SearchInputDropdown = ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
    return (
        <Row style={{ flexFlow: 'row' }}>
            <Input
                autoFocus={true}
                placeholder="Search text"
                value={selectedKeys[0]}         
                onChange={(e) => {
                    setSelectedKeys([e.target.value.length > 0 ? [e.target.value] : []]);
                }}
                onPressEnter={() => {
                    confirm();
                }}
            >
            </Input>
            <Button
                style={{ borderRadius: "0" }}
                type="primary"
                onClick={() => { confirm() }}
            >
                Search
            </Button>
            <Button
                style={{ borderRadius: "0" }}
                type="danger"
                onClick={() => {
                    clearFilters();
                    confirm();
                }}
            >
                Reset
            </Button>
        </Row>
    );
};

export default SearchInputDropdown;
