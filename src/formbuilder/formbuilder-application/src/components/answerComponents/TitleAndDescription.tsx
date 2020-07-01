import React, { useState } from 'react';
import { Input, Row, Col, Checkbox } from 'antd';
import './AnswerComponent.css';

function TitleAndDescription(): JSX.Element {
    return (
        <div
            style={{
                margin: '10px',
                padding: '10px',
                backgroundColor: 'var(--color-base-1)',
                width: '95%',
                display: 'inline-block',
            }}
        >
            <Row style={{ padding: '10px' }}>
                <Col xs={0} lg={4}></Col>
                <Col xs={24} lg={16}>
                    <Input
                        placeholder="Skjematittel..."
                        className="input-question"
                        size="large"
                    ></Input>
                </Col>
                <Col xs={0} lg={4}></Col>
            </Row>
            <Row style={{ padding: '0 10px' }}>
                <Col xs={0} lg={4}></Col>
                <Col xs={24} lg={16}>
                    <Input
                        placeholder="Beskrivelse av skjema (må ikke fylles ut)..."
                        className="input-question"
                    ></Input>
                </Col>
                <Col xs={0} lg={4}></Col>
            </Row>
        </div>
    );
}
export default TitleAndDescription;
