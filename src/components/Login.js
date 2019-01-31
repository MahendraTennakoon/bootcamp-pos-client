import React, { Component } from 'react';
import { Container, Segment, Header, Form, Button, Message } from 'semantic-ui-react';
const axios = require('axios');

class Login extends Component {
    state = {
        error: undefined
    };
    validateCredentials = (e) => {
        const credentials = {
            user_name: e.target.elements["username"].value,
            password: e.target.elements["password"].value
        };

        axios.post(`http://localhost:8080/sessions`, credentials)
            .then((response) => {
                localStorage.setItem('isAuthenticated', 'true');
                this.props.history.push('/orders');
            })
            .catch((error) => {
                this.setState(() => ({
                    error: 'Invalid user name or password.'
                }));
            });

    }
    render() {
        return (
            <div>
                <Container>
                    <Header as='h2' attached='top'>
                        Log In
                    </Header>
                    <Segment attached>
                        <Form onSubmit={this.validateCredentials}>
                            <Form.Field>
                                <label>User name</label>
                                <input name="username" placeholder='User name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input name="password" placeholder='Password' type="password" />
                            </Form.Field>
                            <Button type='submit'>Log In</Button>
                            {
                                this.state.error && 
                                <Message negative>
                                    <Message.Header>Error!</Message.Header>
                                    <p>{this.state.error}</p>
                                </Message>
                            }
                        </Form>
                    </Segment>
                </Container>
            </div>
        );
    }
}

export default Login;